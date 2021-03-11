<description>
### xUploader
用于上传文件的组件，有图片和文件两种模式。
参数 | 说明 | 类型 | 可选值 | 默认值 | 必选
----|------|------ |-------|---|---
v-model | 已上传的文件id数组  | Array | --  | -- | 是
model | 组件显示模式，图片模式或者文件模式  | String | `image`、`file`  | `image` | 否
maxNumber | 允许上传的文件个数  | Number | --  | `1` | 否
sizeLimit | 文件大小限制，单位`b`  | Number | --  | `1048576` | 否
disabled | 禁用状态，无法上传和删除  | Boolean | `true`、`false`  | `false` | 否
allowedExtensions | 允许上传的文件扩展名，默认为空（不限制）  | Array | --  | `[]` | 否
>由于文档服务器环境限制，以下示例无法正常运行，请关注代码本身，忽略演示效果。
</description>

```html
<template>
  <div class="x-uploader-demo">
    <div class="title">图片上传</div>
    <x-uploader v-model="uploadedFiles" :allowedExtensions="['png']" model="image" :maxNumber="5"></x-uploader>
    <div class="title">文件上传</div>
    <x-uploader model="file"></x-uploader>
  </div>
</template>
<script>
export default {
  data () {
    return {
      uploadedFiles: [
        '4018c0d83a9d495298ae1889ff60037a.jpg',
        'e19d3fb145e141088d9000aa999eb8f6.jpg'
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.x-uploader-demo{
  .title{
    margin: 20px 0 10px 0;
  }
}
</style>
```
