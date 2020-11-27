import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vant from 'vant';
// import 'vant/lib/index.css';
import ComponentsMobile from './components/index.js'
import docDemoWrap from './componentsDoc/docDemoWrap/index.js'
import nav from './componentsDoc/nav/index.js'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
// Vue.use(Vant)
process.env.NODE_ENV === 'development' && require('../config/mock/index.js').default.init()
Vue.use(VueResource)
Vue.use(nav)
Vue.use(docDemoWrap)
Vue.use(ComponentsMobile)
new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    this.httpInterceptors()
  },
  methods: {
    httpInterceptors () {
      Vue.http.interceptors.push(function(request) {
        if (request.body && request.body.interceptorsUrlIgnore) {
          delete request.body.interceptorsUrlIgnore
        } else if (request.params && request.params.interceptorsUrlIgnore) {
          delete request.params.interceptorsUrlIgnore
        } else {
          request.url = '/api' + request.url
        }
      })
      // this.$http.post('/api/login', {type: 'post', interceptorsUrlIgnore: true}).then(response => {
      //   console.log(response)
      // })
      // this.$http.get('/api/login', {params: {type: 'get', interceptorsUrlIgnore: true}}).then(response => {
      //   console.log(response)
      // })
    }
  }
}).$mount('#app')
