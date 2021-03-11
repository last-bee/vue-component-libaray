import router from '../../router'
export default {
  install: function (Vue) {
    var that = this
    that.sendData(Vue)
    router.beforeEach((to, from, next) => {
      that.setBehaviorData({
        id: that.getUuid(16, 16),
        fromFullPath: from.fullPath,
        toFullPath: to.fullPath,
        time: new Date().getTime(),
        type: 'jump'
      }, Vue)
      next()
    })
    Vue.http.interceptors.push(function(request) {
      return function(response) {
        if (!response.ok || !response.body.success) {
          that.setErrorData({
            id: that.getUuid(16, 16),
            url: response.url,
            requestBody: request.body,
            body: response.bodyText,
            status: response.status,
            statusText: response.statusText,
            time: new Date().getTime(),
            type: 'network'
          }, Vue)
        }
      }
    })
    // Vue.config.warnHandler = function (msg, vm, trace) {
    //   console.error(msg, vm, trace)
    //   that.setErrorData({
    //     id: that.getUuid(16, 16),
    //     msg: msg,
    //     trace: trace,
    //     type: 'vue'
    //   }, Vue)
    // }
    if (process.env.NODE_ENV === 'production') {
      Vue.config.errorHandler = function (err, vm, info) {
        console.error(err, vm, info)
        that.setErrorData({
          id: that.getUuid(16, 16),
          err: err,
          info: info,
          type: 'vue'
        }, Vue)
      }
    }
    Vue.directive('statistics', {
      inserted: function (el, binding) {
        el.addEventListener('click', function () {
          that.setBehaviorData({
            id: that.getUuid(16, 16),
            key: binding.value,
            time: new Date().getTime(),
            type: 'click'
          }, Vue)
        }, false)
      },
      unbind: function () {
        // console.log('unbind', el, binding)
      },
      update: function () {
        // console.log('update', el, binding)
      }
    })
  },
  sendData: function (Vue) {
    var localStorageDataError = Vue.localStorage.get('statistics', 'error')
    if (localStorageDataError) {
      Vue.http.post('/api/log/error', JSON.parse(localStorageDataError)).then(response => {
        if (response.body.success) {
          window.statisticsError = null
          Vue.localStorage.clear('statistics', 'error')
        }
      })
    }
    var localStorageDataBehavior = Vue.localStorage.get('statistics', 'behavior')
    if (localStorageDataBehavior) {
      Vue.http.post('/api/log/info', JSON.parse(localStorageDataBehavior)).then(response => {
        if (response.body.success) {
          window.statisticsBehavior = null
          Vue.localStorage.clear('statistics', 'behavior')
        }
      })
    }
  },
  setBehaviorData: function (data, Vue) {
    if (!window.statisticsBehavior) {
      var localStorageData = Vue.localStorage.get('statistics', 'behavior')
      if (localStorageData) {
        window.statisticsBehavior = JSON.parse(localStorageData)
      } else {
        window.statisticsBehavior = []
      }
    }
    window.statisticsBehavior.push(data)
    Vue.localStorage.set('statistics', 'behavior', JSON.stringify(window.statisticsBehavior))
  },
  setErrorData: function (data, Vue) {
    if (!window.statisticsError) {
      var localStorageData = Vue.localStorage.get('statistics', 'error')
      if (localStorageData) {
        window.statisticsError = JSON.parse(localStorageData)
      } else {
        window.statisticsError = []
      }
    }
    window.statisticsError.push(data)
    Vue.localStorage.set('statistics', 'error', JSON.stringify(window.statisticsError))
  },
  getUuid: function (len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    var uuid = []
    radix = radix || chars.length
    if (len) {
      for (var i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * radix]
      }
    } else {
      var r = null
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'
      for (var j = 0; j < 36; j++) {
        if (!uuid[j]) {
          r = 0 | Math.random() * 16
          uuid[j] = chars[(j === 19) ? (r & 0x3) | 0x8 : r]
        }
      }
    }
    return uuid.join('')
  }
}
