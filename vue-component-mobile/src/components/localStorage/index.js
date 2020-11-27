import localStorage from './localStorage.js'
export default {
  install: function (Vue) {
    Vue.localStorage = localStorage
    Vue.prototype.$localStorage = localStorage
  }
}
