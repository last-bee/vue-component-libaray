<description>
### 行为统计及错误日志上报
#### 自动上报内容
用户的路由跳转及运行过程中发生的vue代码异常及网络异常会存储在本地，并且会在合适的时机由系统自动上报给后端的统计服务。
#### 需要配置的上报内容
如果你想上报用户的点击事件，需要在目标DMO使用全局自定义指令`v-statistics`并且赋予一个`唯一的key`(标记该点击事件唯一值)。绑定了该指令的组件或者DMO都会在用户点击的时候记录下该操作，并且在合适的时机会发送给后端的统计服务。
</description>

```html
<template>
  <div class="statistics-demo">
    <div v-statistics="'事件key3'">点击</div>
    <van-button class="btn" v-statistics="'事件key1'" type="primary">按钮1</van-button>
    <van-button class="btn" v-statistics="'事件key2'" type="primary">按钮2</van-button>
    <van-button class="btn" @click="errorNetworkRequest" type="primary">异常网络请求演示</van-button>
    <van-button class="btn" @click="errorVueRequest" type="primary">vue异常演示</van-button>
  </div>
</template>
<script>
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  data () {
    return {
      errorVueRequestDemoIsShow: false
    }
  },
  methods: {
    errorNetworkRequest: function () {
      this.$http.post('/file/uploadBase64', {'hhm': {hhm: 1}}).then(response => {
        console.log(response)
      }, response => {
        console.log(response)
      })
    },
    errorVueRequest: function () {
      this.undefinedFun()
    }
  },
  components: {
    vanButton
  }
}
</script>
<style scoped lang="scss">
.statistics-demo{
  .btn{
    margin-right: 10px;
  }
}
</style>
```
