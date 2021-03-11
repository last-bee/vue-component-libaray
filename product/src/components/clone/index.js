import clone from './clone.js'
export default {
  install: function (Vue) {
    Vue.clone = clone
    Vue.prototype.$clone = clone
  }
}
