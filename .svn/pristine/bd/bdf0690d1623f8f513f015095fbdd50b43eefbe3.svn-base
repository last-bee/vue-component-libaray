import Dialog from 'vant/lib/dialog'
import 'vant/lib/dialog/style'
export default {
  install: function (Vue) {
    var that = this
    setTimeout(function () {
      that.check(Vue)
    }, 1000)
  },
  isTip: false,
  nowVersionNumber: null,
  check: function (Vue) {
    var that = this
    Vue.http.post('/checkUpdate').then(response => {
      console.log(response.body)
      if (that.nowVersionNumber < response.body.versionNumber) {
        Dialog.alert({
          title: '更新提示',
          message: '发现系统更新，需升级后才能正常使用。'
        }).then(() => {
          window.location.reload()
        })
        that.isTip = true
      } else if (!that.isTip) {
        setTimeout(function () {
          that.check(Vue)
        }, 10000)
      }
      if (!that.nowVersionNumber) {
        that.nowVersionNumber = response.body.versionNumber
      }
    })
  }
}
