<description>
## 路由配置
路由配置的主文件是 `/src/router.js` 但是如果所有的路由配置都放在这个文件，会导致文件巨大无法维护，所以这个主文件只作为配置的索引文件。
### 如何配置路由
以"个人中心"系列页面的路由配置为例：
#### 1.在 `/src/router/` 目录下创建个人自行 `home.js`(这个文件名字根据具体业务命名)
#### 2.在home.js中配置个人中心页面的路由
**home.js**
````js
var router = {
  path: 'home',
  component: () => import('../src/components/home/home.vue'),
  children: [
    {
      {
        path: '/info',
        name: '个人信息管理',
        component: () => import('../src/components/home/info.vue')
      }
    }
  ]
}
export default router
````
#### 3.在`/src/router.js`中引入`/src/router/home.js`
**router.js**
````js
import Vue from 'vue'
import Router from 'vue-router'
import home from './home.js'
Vue.use(Router)
export default new Router({
  routes: [
    home
  ]
})
````
### 思路
总体的思路就是将不同业务系统的路由配置文件分割出去，避免单个文件过于庞大。
</description>
