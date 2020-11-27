<description>
### 开始写页面
本文将以`个人中心`为例，讲述如何开始一个页面代码的编写。
#### 1.在`/src/components/`中创建目录`home`
该目录将存放`个人中心`所有页面。
#### 2.在`/src/components/home`中创建文件`home.vue`
**home.vue**
````html
<template>
  <div class="home-main">
    个人中心
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
.home-main {
}
</style>
````
>规范1：每个页面的最外层的class必须是： `页面名-main`，如上面的： `home-main`
>规范2：每个页面的style标签中需要加入两个属性 `scoped`和`lang="scss"`
#### 3.在`/src/components/home`中创建`个人中心`子页面`info.vue`
**info.vue**
````html
<template>
  <div class="info-main">
    info
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
.info-main {
}
</style>
````
#### 4.配置路由
路由配置请看[配置路由](#/router)。
</description>
