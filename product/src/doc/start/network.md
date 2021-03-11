<description>
### 网络请求
项目的网络请求集成了`vue-resource`，具体用法请看：[vue-resource文档](https://github.com/pagekit/vue-resource/blob/develop/docs/http.md)
#### 统一的url前缀
每个网络请求的url都会被全局加上一个`/api`前缀，也就是，如果你要向`/api/user/passwordLogin`发起请求，url只需要写`/user/passwordLogin`即可。如果你不想要被加上这个url前缀，可以在请求的`body`或`params`中添加参数`interceptorsUrlIgnore: true`。
#### 示例
````html
<script>
export default {
  created () {
    this.post()
  },
  methods: {
    post () {
      // 正常请求，url会自动添加前缀，也就是该请求最终的url会是：/api/user/passwordLogin
      this.$http.post('/user/passwordLogin').then(response => {
        console.log(response)
      }, response => {
        console.log(response)
      })
      // 通过在body添加参数 interceptorsUrlIgnore: true，url不会自动添加前缀。最终的url还是：/user/passwordLogin
      this.$http.post('/user/passwordLogin', {interceptorsUrlIgnore: true}).then(response => {
        console.log(response)
      })
      // 通过在params添加参数 interceptorsUrlIgnore: true，url不会自动添加前缀。最终的url还是：/user/passwordLogin
      this.$http.get('/user/passwordLogin', {params: {type: 'get', interceptorsUrlIgnore: true}}).then(response => {
        console.log(response)
      })
    }
  }
}
</script>
````
> interceptorsUrlIgnore这个参数不会被传递到后端。
### 请求代理
如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。项目使用了`http-proxy-middleware`来进行网路代理。
#### 配置文件
`/config/proxy.js`
#### 配置方法
具体的配置方法可以请看：[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)
### 数据模拟
在后端接口没有就绪的情况下，数据模拟可以让你提前编写网络请求方面的代码，项目集成了[mockjs](http://mockjs.com/)，来完成这方面的工作。
#### 配置文件
`/config/mock/index.js`
#### 配置方法
##### 示例
````js
import mockjs from 'mockjs'
export default {
  init: function () {
    mockjs.mock('/api/login', {
      'list|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
      }]
    })
  }
}
````
**1.** `init`方法会在系统初始化的时候执行，所以如果你想拦截并且返回模拟数据，可以在这个函数里面执行对应的方法。
**2.** `/config/mock/`这个目录是用来放置模拟数据的相关文件的，你可以随意发挥，但是不要提交到线上。
**3.** 具体的配置方法可以请看：[mockjs](https://github.com/chimurai/http-proxy-middleware)
>注意：mock只在开发环境有效，线上环境无效。
</description>
