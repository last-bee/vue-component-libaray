<description>
### xUploaderFixed
用于上传文件的组件，有图片和文件两种模式。
参数 | 说明 | 类型 | 可选值 | 默认值 | 必选
----|------|------ |-------|---|---
v-model | 已上传的文件id数组  | Array | --  | -- | 是
fileNames | 图片的标题 | Array | --  | -- | 是
sizeLimit | 文件大小限制，单位`b`  | Number | --  | `1048576` | 否
disabled | 禁用状态，无法上传  | Boolean | `true`、`false`  | `false` | 否
allowedExtensions | 允许上传的文件扩展名，默认为空（不限制）  | Array | --  | `[]` | 否
#### slot
组件的`slot`用于在文件列表末尾添加自定义的内容，下面示例就在末尾加了一个`绘制草图`的触发区域。
>由于文档服务器环境限制，以下示例无法正常运行，请关注代码本身，忽略演示效果。
</description>

```html
<template>
  <div class="x-uploader-demo">
    <div class="title">固定文件上传</div>
    <x-uploader-fixed :fileNames="fileNames" v-model="uploadedFiles" :allowedExtensions="['png', 'jpg']">
      <div class="slot">
        <div class="frame"></div>
        <span class="file-name">
          现场草图绘制
        </span>
      </div>
    </x-uploader-fixed>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fileNames: [
        '事故现场照1',
        '事故现场照2',
        '事故认定书3'
      ],
      uploadedFiles: [
        '',
        '',
        '4018c0d83a9d495298ae1889ff60037a.jpg'
        // 'e19d3fb145e141088d9000aa999eb8f6.jpg',
        // '602b21596ee34cbc9738eeded5ac1a6a.png'
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
  .slot{
  }
}
</style>
```
