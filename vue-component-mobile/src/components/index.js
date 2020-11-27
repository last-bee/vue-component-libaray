import localStorage from './localStorage/index.js'
import sessionStorage from './sessionStorage/index.js'
import dataOptions from './dataOptions/index.js'
// import appBridge from './appBridge/index.js'
import clone from './clone/index.js'
import form from './form/index.js'
import uploader from './uploader/index.js'
import uploaderFixed from './uploaderFixed/index.js'
import signature from './signature/index.js'
import statistics from './statistics/index.js'
// import discriminate from './discriminate/index.js'
// import checkUpdate from './checkUpdate/index.js'
var components = [
  localStorage,
  sessionStorage,
  dataOptions,
  clone,
  form,
  uploader,
  uploaderFixed,
  signature,
  statistics
]
const install = Vue => {
  for (var i = 0; i < components.length; i++) {
    Vue.use(components[i])
  }
}
export default {
  install
}
