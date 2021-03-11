import sessionStorage from './sessionStorage.js'
export default {
  install: function (Vue) {
    Vue.sessionStorage = sessionStorage
    Vue.prototype.$sessionStorage = sessionStorage
  }
}
