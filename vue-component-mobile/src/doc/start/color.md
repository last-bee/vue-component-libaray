<description>
### 颜色
架构在全局已经注入了一些颜色的sass变量，你可以直接在组件中使用。
</description>

```html
<template>
  <div class="color-demo">
    <div class="color-block" v-for="color in colors" :key="color" :class="color">
      ${{color}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      colors: [
        'black',
        'white',
        'red',
        'blue',
        'orange',
        'orange-dark',
        'orange-light',
        'green',
        'gray',
        'gray-light',
        'gray-darker',
        'gray-dark',
        'text-color',
        'border-color',
        'active-color',
        'background-color',
        'background-color-light'
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.color-demo{
  overflow: hidden;
  .color-block{
    text-align: center;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    float: left;
    margin: 10px;
    border: 1px solid $gray-light;
    &.black{
      background: $black;
      color: $white;
    }
    &.white{
      background: $white;
    }
    &.red{
      background: $red;
    }
    &.blue{
      background: $blue;
    }
    &.orange{
      background: $orange;
    }
    &.orange-dark{
      background: $orange-dark;
    }
    &.orange-light{
      background: $orange-light;
    }
    &.green{
      background: $green;
    }
    &.gray{
      background: $gray;
    }
    &.gray-light{
      background: $gray-light;
    }
    &.gray-darker{
      background: $gray-darker;
    }
    &.gray-dark{
      background: $gray-dark;
    }
    &.text-color{
      background: $text-color;
      color: $white;
    }
    &.border-color{
      background: $border-color;
    }
    &.active-color{
      background: $active-color;
    }
    &.background-color{
      background: $background-color;
      width: 200px;
    }
    &.background-color-light{
      background: $background-color-light;
      width: 200px;
    }
  }
}
</style>
```
