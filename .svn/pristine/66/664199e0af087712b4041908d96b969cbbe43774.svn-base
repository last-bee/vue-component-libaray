<description>
### 公共业务组件
在业务开发过程中会有很多业务组件需要抽象，比如你需要基于[Vant的Picker组件](https://youzan.github.io/vant/#/zh-CN/picker)来封装一个医院选择的组件。以`commonComponentDemo`组件为例子，创建一个公共业务组件的步骤应当如下：
#### 1.在`/src/components/common/`目录下创建和组件同名的目录
在`/src/components/common/`下创建目录：`commonComponentDemo`
#### 2.在上一个步骤创建的目录下创建组件的`.vue`文件
在`/src/components/common/commonComponentDemo/`下创建组件：`commonComponentDemo.vue`
#### 3.在上一个步骤创建的`.vue`文件中编写组件的代码
`commonComponentDemo.vue`中编写组件代码，`commonComponentDemo`目录即是该组件的目录，可以存放该组件的子组件代码、静态图片等等。
> 注意：`commonComponentDemo`组件的`name`属性将在全局注册为该组件的名字
##### 示例
````html
<template>
  <div class="common-component-demo-main">
    <h1>commonComponentDemo</h1>
  </div>
</template>
<script>
export default {
  name: 'commonComponentDemo'
}
</script>
<style scoped lang="scss">
.common-component-demo-main{
}
</style>
````
#### 4.将组件注册成全局组件
在`/src/components/common/index.js`中`import`刚刚写的组件，并把这个组件放到`components`数组中。如：
````js
import Vue from 'vue'
import commonComponentDemo from './commonComponentDemo/commonComponentDemo.vue'
var components = [
  commonComponentDemo
]
for (var i = 0; i < components.length; i++) {
  Vue.component(components[i].name, components[i])
}
````
</description>
