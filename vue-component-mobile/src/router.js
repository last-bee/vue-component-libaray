import Vue from 'vue'
import Router from 'vue-router'
const localStorage = () => import( './components/localStorage/demo.md')
const sessionStorage = () => import( './components/sessionStorage/demo.md')
const appBridgeDemo = () => import( './components/appBridge/demo.md')
const appBridgeDemojs = () => import( './components/appBridge/demojs.md')
const form = () => import( './components/form/demo.md')
const signature = () => import( './components/signature/demo.md')
const uploader = () => import( './components/uploader/demo.md')
const uploaderFixed = () => import( './components/uploaderFixed/demo.md')
const eslint = () => import( './doc/standard/eslint.md')
const css = () => import('./doc/standard/css.md')
const js = () => import('./doc/standard/js.md')
const vuex = () => import('./doc/standard/vuex.md')
const vueFile = () => import( './doc/standard/vueFile.md')
const technology = () => import( './doc/framework/technology.md')
const dependencies = () => import( './doc/start/dependencies.md')
const changeFile = () => import( './doc/start/changeFile.md')
const store = () => import( './doc/storage/store.md')
const router = () => import( './doc/start/router.md')
const components = () => import( './doc/start/components.md')
const network = () => import( './doc/start/network.md')
const commonComponents = () => import( './doc/start/commonComponents.md')
const style = () => import( './doc/start/style.vue')
const chart = () => import( './doc/chart/chart.md')
const dataOptions = () => import( './components/dataOptions/demo.md')
const statistics = () => import( './components/statistics/demo.md')
const deployment = () => import( './doc/deployment/deployment.md')
const technologyPrinciple = () => import( './doc/technologyPrinciple/technologyPrinciple.md')
const discriminate = () => import( './components/discriminate/demo.md')

Vue.use(Router)
// console.log(signature)
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: home
    // },
    { path: '/', redirect: '/dependencies' },
    {
      path: '/dependencies',
      name: 'dependencies',
      component: dependencies
    },
    {
      path: '/localStorage',
      name: 'localStorage',
      component: localStorage
    },
    {
      path: '/sessionStorage',
      name: 'sessionStorage',
      component: sessionStorage
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/xForm',
      name: 'xForm',
      component: form
    },
    {
      path: '/xUploader',
      name: 'xUploader',
      component: uploader
    },
    {
      path: '/xUploaderFixed',
      name: 'xUploaderFixed',
      component: uploaderFixed
    },
    {
      path: '/eslint',
      name: 'eslint',
      component: eslint
    },
    {
      path: '/css',
      name: 'css',
      component: css
    },
    {
      path: '/js',
      name: 'js',
      component: js
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/vueFile',
      name: 'vueFile',
      component: vueFile
    },
    {
      path: '/technology',
      name: 'technology',
      component: technology
    },
    {
      path: '/changeFile',
      name: 'changeFile',
      component: changeFile
    },
    {
      path: '/router',
      name: 'router',
      component: router
    },
    {
      path: '/components',
      name: 'components',
      component: components
    },
    {
      path: '/network',
      name: 'network',
      component: network
    },
    {
      path: '/commonComponents',
      name: 'commonComponents',
      component: commonComponents
    },
    {
      path: '/style',
      name: 'style',
      component: style
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {
      path: '/appBridgeDemo',
      name: 'appBridgeDemo',
      component: appBridgeDemo
    },
    {
      path: '/appBridgeDemojs',
      name: 'appBridgeDemojs',
      component: appBridgeDemojs
    },
    {
      path: '/dataOptions',
      name: 'dataOptions',
      component: dataOptions
    },
    {
      path: '/signature',
      name: 'signature',
      component: signature
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: statistics
    },
    {
      path: '/deployment',
      name: 'deployment',
      component: deployment
    },
    {
      path: '/discriminate',
      name: 'discriminate',
      component: discriminate
    },
    {
      path: '/technologyPrinciple',
      name: 'technologyPrinciple',
      component: technologyPrinciple
    }
  ]
})
