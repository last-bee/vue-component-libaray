<description>
### 区别对待（权限）
一些场景下需要对不同用户区别对待，比如一些用户显示特定按钮，一些用户不显示按钮。这些区别对待只需要在按钮上使用`v-discriminate`指令即可实现。
### 原理
1.系统为每个需要区别对待的按钮（也可以是其它任意元素）分配一个唯一的key。
2.前端会在系统进入时请求后端获取该用户的特定的key列表，也就是如果该用户可以显示某个按钮，那么后端需要将这个按钮的key添加在这个key列表中返回。
3.`v-discriminate`根据这个列表来决定是否显示这个按钮。
### 如何使用
只需要在DOM或者组件加上自定义指令`v-discriminate`，并加上该DOM或者组件的`key`。这样该DOM或者组件就会自动隐藏或者显示。
### 相反
默认状态下如果对应的key在列表中则DOM或者组件会显示，反之则隐藏。如果在指令上添加`contrary`修饰符则效果相反。
### 注意
由于目前系统未有该功能需求，以上的功能会暂时隐藏。
</description>

```html
<template>
  <div class="discriminate-demo">
    <!-- <van-button class="btn" v-discriminate="'111111'" type="primary">按钮</van-button>
    <van-button class="btn" v-discriminate.contrary="'999999'" type="primary">按钮contrary</van-button> -->
  </div>
</template>
<script>
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  components: {
    vanButton
  }
}
</script>
<style scoped lang="scss">
.discriminate-demo{
  .btn{
    margin-right: 10px;
  }
}
</style>
```
