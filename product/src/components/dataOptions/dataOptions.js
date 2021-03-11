let dataOptions = null
let callBackQueue = []
let errorNumber = 0
import localStorage from '../localStorage/localStorage.js'
export default {
  init: function (Vue) {
    this.networkRequest(Vue)
    var localStorageDataOptions = localStorage.get('dataOptions', 'datas')
    if (localStorageDataOptions) {
      dataOptions = this.getDataOptions(JSON.parse(localStorageDataOptions))
    }
  },
  networkRequest: function (Vue) {
    var that = this
    Vue.http.post('/api/support/queryPageByCondition', {
      'interceptorsUrlIgnore': true,
      'pageNum': 1,
      'pageSize': 10000
    }).then(response => {
      var datas = response.body.data
      if (datas) {
        localStorage.set('dataOptions', 'datas', JSON.stringify(datas))
        dataOptions = that.getDataOptions(datas)
        for (var j = 0; j < callBackQueue.length; j++) {
          callBackQueue[j].successCallBack(this.get(callBackQueue[j].codeType))
        }
      } else {
        that.againNetworkRequest(response, Vue)
      }
    }, response => {
      that.againNetworkRequest(response, Vue)
    })
  },
  getDataOptions: function (datas) {
    var dataOptionsTemporary = {}
    for (var i = 0; i < datas.length; i++) {
      if (!dataOptionsTemporary[datas[i].codeType]) {
        dataOptionsTemporary[datas[i].codeType] = []
      }
      datas[i].validStatus === '1' && dataOptionsTemporary[datas[i].codeType].push(datas[i])
    }
    return dataOptionsTemporary
  },
  againNetworkRequest: function (response, Vue) {
    var that = this
    console.log('数据选项请求失败，即将重试，错误请求信息：')
    console.log(response)
    errorNumber++
    if (errorNumber < 10) {
      setTimeout(function () {
        that.networkRequest(Vue)
      }, 1000)
    } else {
      if (!dataOptions) {
        for (var j = 0; j < callBackQueue.length; j++) {
          callBackQueue[j].failureCallBack && callBackQueue[j].failureCallBack()
        }
      }
      console.log('数据选项请求失败10次，不再重试')
    }
  },
  get: function (codeType) {
    if (dataOptions && dataOptions[codeType]) {
      return dataOptions[codeType]
    }
    return null
  },
  getSync: function (codeType, successCallBack, failureCallBack) {
    if (dataOptions) {
      successCallBack(this.get(codeType))
    } else {
      callBackQueue.push({
        codeType: codeType,
        successCallBack: successCallBack,
        failureCallBack: failureCallBack
      })
    }
  },
  getNameSync: function (codeType, value, successCallBack, failureCallBack) {
    this.getSync(codeType, function (data) {
      if (data) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].codeCode === value) {
            successCallBack(data[i].codeName)
            break
          }
        }
      } else {
        failureCallBack && failureCallBack()
      }
    }, function () {
      failureCallBack && failureCallBack()
    })
  },
  getName: function (codeType, value) {
    var data = this.get(codeType)
    if (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].codeCode === value) {
          return data[i].codeName
        }
      }
    }
    return null
  }
}
