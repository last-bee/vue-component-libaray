<description>
### xSignature
`xSignature`用于在触屏手机上签名的组件。
参数 | 说明 | 类型 | 可选值 | 默认值 | 必选
----|------|------ |-------|---|---
disabled | 禁用状态，无法签名  | Boolean | `true`、`false`  | `false` | 否
width | 宽度，单位`px`  | Number |  | `400` | 否
height | 高度，单位`px`  | Number |  | `200` | 否
### 方法
#### upload 上传签名数据
该接口会上传签名数据，并且后端会将数据转化为图片，并且返回图片的`fileId`。
#### clear 清除签名板内容
调用该方法可以清除签名板内容
#### isEmpty 判断是否为空
调用该方法会返回签名板是否为空
#### showImage(fileId) 将签名板内容替换成图片
调用该方法并传递对应图片id可将签名板内容替换成图片
#### hideImage() 将签名图片隐藏
调用该方法可将签名图片隐藏
</description>

```html
<template>
  <div class="signature-demo-main">
    <x-signature class="signature" :disabled="false" :width="400" :height="200" ref="signature"></x-signature>
    <br>
    <van-button class="btn" @click="upload" plain type="primary">上传签名数据</van-button>
    <van-button class="btn" @click="clear" plain type="primary">清除</van-button>
    <van-button class="btn" @click="isEmpty" plain type="primary">签名板是否为空</van-button>
    <van-button class="btn" @click="showImage" plain type="primary">将签名板内容替换成图片</van-button>
    <van-button class="btn" @click="hideImage" plain type="primary">将签名图片隐藏</van-button>
  </div>
</template>
<script>
import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  methods: {
    upload () {
      var that = this
      this.$refs.signature.upload(function (fileId) {
        that.$refs.signature.showImage(fileId)
        Toast('上传成功图片fileId：' + fileId)
      }, function () {
        Toast.fail('上传失败')
      })
    },
    showImage () {
      this.$refs.signature.showImage('006768d7ac014143b3e9f358bd3dece9.png')
    },
    hideImage () {
      this.$refs.signature.hideImage()
    },
    clear () {
      this.$refs.signature.clear()
    },
    isEmpty () {
      Toast('画板是否为空：' + this.$refs.signature.isEmpty())
    }
  },
  components: {
    vanButton
  }
}
</script>
<style scoped lang="scss">
.signature-demo-main{
  .btn{
    margin-top: 10px;
    margin-right: 10px;
  }
  .signature{
    border: 1px dashed #c9c9c9;
    border-radius: 2px;
    overflow: hidden;
    display: inline-block;
  }
}
</style>
```
