import docDemoWrap from './docDemoWrap.vue'
export default {
  install: function (Vue) {
    Vue.component(docDemoWrap.name, docDemoWrap)
  }
}
