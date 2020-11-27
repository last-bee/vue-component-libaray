import uploader from './uploader.vue'
export default {
  install: function (Vue) {
    Vue.component(uploader.name, uploader)
  }
}
