<template>
  <div class="x-uploader-main cf">
    <div v-if="model === 'image'" class="image">
      <div
        class="completes-wrap"
        v-for="(fileName, index) in fileNames"
        :key="fileName"
        ref="button"
      >
        <div class="frame">
          <template v-if="value[index] && value[index]!=='' && state[index] !== 'uploadIng'">
            <img
              class="completes"
              :src="imagePrefix + value[index]"
            />
            <div class="magnifying-glass-wrap" @click="lookImg(index)">
              <img class="magnifying-glass" src="./magnifying-glass.png">
            </div>
            <div class="trash-wrap" @click="delImg(index)">
              <img class="trash" src="./trash.png">
            </div>
          </template>
          <div v-else-if="!disabled && state[index] !== 'uploadIng'" class="add-icon"></div>
          <van-circle
            v-show="state[index] === 'uploadIng'"
            class="circle"
            v-model="currentRate"
            :rate="rate"
            :speed="150"
            :text="currentRate.toFixed(0) + '%'"
            size="50px"
            layerColor="#fff"
          />
        </div>
        <span class="file-name">
          {{ fileName }}
        </span>
      </div>
      <div class="completes-wrap">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import qq from 'fine-uploader/lib/core'
import vanCircle from 'vant/lib/circle'
import 'vant/lib/circle/style'
import ImagePreview from 'vant/lib/image-preview'
import 'vant/lib/image-preview/style'
import Notify from 'vant/lib/notify'
import 'vant/lib/notify/style'
export default {
  name: 'xUploaderFixed',
  props: {
    model: {
      type: String,
      default: 'image'
    },
    fileNames: {
      type: Array,
      default: function () {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: function () {
        return []
      }
    },
    allowedExtensions: {
      type: Array,
      default: function () {
        return []
      }
    },
    sizeLimit: {
      type: Number,
      default: 1048576 // 1M
    }
  },
  data () {
    return {
      rate: 0,
      state: [], // initial 初始状态 uploadIng 上传中 uploadComplete 上传完成
      currentRate: 0,
      imagePrefix: '/api/file/get?id=',
      filePrefix: '/api/file/download?id='
    }
  },
  created () {
    for (var i = 0; i < this.fileNames.length; i++) {
      this.state[i] = ['initial']
    }
  },
  mounted () {
    if (this.disabled) {
      return
    }
    for (let i = 0; i < this.$refs.button.length; i++) {
      var that = this
      new qq.FineUploaderBasic({
        button: that.$refs.button[i],
        multiple: false,
        autoUpload: true,
        request: {
          endpoint: '/api/file/upload',
          inputName: 'file'
        },
        callbacks: {
          onUpload: function () {
            that.$set(that.state, i, 'uploadIng')
            that.uploadIngIndex = i
            that.rate = 5
          },
          onComplete: function (id, name, responseJSON) {
            that.rate = 100
            that.$set(that.state, i, 'uploadComplete')
            var cloneValue = that.$clone(that.value)
            cloneValue[i] = responseJSON.data.fileId
            that.$emit('input', cloneValue)
            setTimeout(function () {
              that.rate = 0
            }, 150)
          },
          onProgress: function (id, name, uploadedBytes, totalBytes) {
            that.rate = totalBytes / uploadedBytes * 100
          },
          onError: function (id, name, errorReason) {
            Notify({
              message: errorReason,
              duration: 3000
            })
          }
        },
        text: {
          defaultResponseError: '未知错误，请重试'
        },
        messages: {
          typeError: '只能上传:{extensions}文件',
          sizeError: '文件须小于{sizeLimit}'
        },
        validation: {
          allowedExtensions: that.allowedExtensions,
          sizeLimit: that.sizeLimit
        }
      })
    }
  },
  activated () {
  },
  deactivated () {
  },
  destroyed () {
  },
  methods: {
    lookImg: function (index) {
      var images = []
      for (var i = 0; i < this.value.length; i++) {
        if (this.value[i] && this.value[i] !== '') {
          images.push(this.imagePrefix + this.value[i])
        }
      }
      ImagePreview({
        images: images,
        startPosition: index
      })
    },
    delImg: function (index) {
      var cloneValue = this.$clone(this.value)
      cloneValue[index] = null
      this.$emit('input', cloneValue)
    }
  },
  components: {
    vanCircle
  }
}
</script>
<style scoped lang="scss">
  .x-uploader-main{
    &.cf {
      *zoom:1
    }
    &.cf:after,.c-cf:before {
      display: table;
      content: "";
      line-height: 0
    }
    &.cf:after {
      clear: both
    }
    .image{
      .completes-wrap{
        display: block;
        float: left;
        position: relative;
        // margin-right: 10px;
        // margin-bottom: 10px;
        width: 50%;
        text-align: center;
        &:nth-child(2n){
          padding-left: 5px;
        }
        &:nth-child(2n+1){
          padding-right: 5px;
        }
        .frame{
          height: 100px;
          border-radius: 4px;
          overflow: hidden;
          background-color: rgb(240, 240, 240);
          border: 1px solid rgb(204, 204, 204);
          position: relative;
          .trash-wrap{
            position: absolute;
            left: 0px;
            top: 0px;
            padding: 5px;
            z-index: 1;
            .trash{
              width: 20px;
              height: 20px;
            }
          }
          .magnifying-glass-wrap{
            position: absolute;
            right: 0px;
            top: 0px;
            padding: 5px;
            z-index: 1;
            .magnifying-glass{
              width: 20px;
              height: 20px;
            }
          }
          .circle{
            font-size: 12px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -25px;
            margin-left: -25px;
          }
          .completes{
            max-width: 100%;
            max-height: 100%;
            margin: 0 auto;
          }
          .add-icon{
            left: 50%;
            top: 50%;
            margin-top: -20px;
            margin-left: -20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            border: 2px solid rgb(153, 153, 153);
            &::after{
              position: absolute;
              content: " ";
              width: 2px;
              height: 20px;
              background-color: rgb(153, 153, 153);
              left: 50%;
              top: 50%;
              margin-top: -10px;
              margin-left: -1px;
            }
            &::before{
              position: absolute;
              content: " ";
              width: 20px;
              height: 2px;
              background-color: rgb(153, 153, 153);
              left: 50%;
              top: 50%;
              margin-top: -1px;
              margin-left: -10px;
            }
          }
        }
        .file-name{
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: rgb(77, 77, 77);
        }
        // .completes{
        //   height: 50px;
        //   display: block;
        //   border-radius: 2px;
        //   margin: 0 auto;
        // }
        .file-name{

        }
      }
      .button{
        float: left;
        display: block;
        width: 50px;
        height: 50px;
        border: 1px dashed #c9c9c9;
        background-color: #f8f8f8;
        border-radius: 2px;
        &::after{
          position: absolute;
          content: " ";
          width: 2px;
          height: 30px;
          background-color: #c9c9c9;
          top: 9px;
          left: 23px;
        }
        &::before{
          position: absolute;
          content: " ";
          width: 30px;
          height: 2px;
          background-color: #c9c9c9;
          left: 9px;
          top: 23px;
        }
      }
    }
  }
</style>
