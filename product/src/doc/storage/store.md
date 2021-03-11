<description>
### 全局变量
项目的全局变量管理使用的是`Vuex`,具体用法请看:[Vuex官网](https://vuex.vuejs.org/zh/)
#### 2.存放位置
##### src/store/state.js : 定义变量
##### src/store/getters.js : 定义getters
##### src/store/mutations.js : 定义mutations
##### src/store/actions.js : 定义actions
#### 1.命名规范
全局变量应该细分为 `全局` 和 `局部` 两类。
##### 1.1.全局
全局都可能用到的变量，比如当前登录用户的信息。此类变量的命名需以`common_`开头，如：`common_userName`。对应的`actions`也需要用这种方式密码，如：`common_userNameIncrement`，对应的`getters`、`mutations`同样如此。
>注意：下划线只用于分割前缀和变量名，变量名部分仍然使用小驼峰命名。
##### 1.2.局部
局部共享的变量，如两个或者几个页面间用于传递数据的变量，这种变量应当少用。此类变量的命名需以变量起源页面的路由名为开头，如：`login_valueName`。这个变量是在`login`这个页面中首次赋值的。如果出现可能多个页面首次赋值的情况需要以多个页面的路由名为开头，并且以下划线分割。如：`login_register_valueName`。
</description>

```html
<template>
  <div class="vuex-demo">
    <van-button class="btn" @click="get" type="primary">获取数据</van-button>
    <van-button class="btn" @click="getter" type="primary">获取数据等级</van-button>
    <van-button class="btn" @click="set" type="primary">设置数据</van-button>
    <van-button class="btn" @click="increment" type="primary">递增数据</van-button>
    <van-button class="btn" @click="incrementAsync" type="primary">Action异步递增数据</van-button>
  </div>
</template>
<script>
import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  methods: {
    get () {
      Toast(this.$store.state.common_test)
    },
    getter () {
      Toast(this.$store.getters.common_testLevel)
    },
    set () {
      this.$store.commit('common_test', 2)
      Toast.success('设置成功')
    },
    increment () {
      this.$store.commit('common_testIncrement', 3)
      Toast.success('设置成功')
    },
    incrementAsync () {
      this.$store.dispatch('common_test_incrementAsync', 5)
      Toast.success('3秒后生效')
    }
  },
  components: {
    vanButton
  }
}
</script>
<style scoped lang="scss">
.vuex-demo{
  .btn{
    margin-right: 10px;
  }
}
</style>
```
