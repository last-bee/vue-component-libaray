<description>
### localStorage
封装了浏览器的 `localStorage` api，使得本地存储的操作更加简便和规范。
</description>

```html
<template>
  <div class="local-storage-demo">
    <van-button class="btn" @click="setData" plain type="primary">存储数据</van-button>
    <van-button class="btn" @click="getData" type="primary">获取数据</van-button>
    <van-button class="btn" @click="removeData" type="warning">移除数据</van-button>
    <van-button class="btn" @click="clearData" type="danger">批量清除数据</van-button>
  </div>
</template>
<script>
import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  methods: {
    setData: function () {
      // 为了更好分类本地数据，需要你传递一个数据前缀名。
      // 如果这个数据仅用在这个页面可以传递当前页面的路由：login;
      // 如果这个数据会用在一个比较大的范围，如个人中心，那么可以是：home；
      // 如果是全局公共数据请传递common
      var prefixName = 'localStorageDemo'
      var name = 'testName' // 数据名
      var value = 'testValue' // 数据值
      this.$localStorage.set(prefixName, name, value)
      Toast.success('存储成功')
    },
    getData: function () {
      var prefixName = 'localStorageDemo'
      var name = 'testName' // 数据名
      Toast('获取到的值为：' + this.$localStorage.get(prefixName, name))
    },
    removeData: function () {
      var prefixName = 'localStorageDemo'
      var name = 'testName' // 数据名
      this.$localStorage.remove(prefixName, name)
      Toast.success('移除完成')
    },
    clearData: function () {
      var prefixName = 'localStorageDemo' // 清除该前缀的所有数据
      this.$localStorage.clear(prefixName, name)
      Toast.success('批量清除完成')
    }
  },
  components: {
    vanButton
  }
}
</script>
<style scoped lang="scss">
.local-storage-demo{
  .btn{
    margin-right: 10px;
  }
}
</style>
```
