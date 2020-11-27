import appBridge from './appBridge.js'
export default {
  install: function (Vue) {
    window.appCallbackJs = appBridge.appCallbackJs
    window.appCallJs = appBridge.appCallJs
    Vue.appBridge = appBridge
    Vue.prototype.$appBridge = appBridge
  }
}
