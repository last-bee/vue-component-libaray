<template>
  <div class="x-uploader-main cf">
    <div v-if="model === 'image'" class="image">
      <div
        class="completes-wrap"
        v-for="(valueOne, index) in value"
        :key="valueOne"
      >
        <div
          class="close"
          v-show="!disabled"
          @click="delCompletes(index)"
        >
          x
        </div>
        <img
          @click="lookImg(index)"
          class="completes"
          :src="imagePrefix + valueOne"
        />
      </div>
      <div
        class="button"
        v-show="!disabled && (state === 'initial' || state === 'uploadComplete') && value.length < maxNumber"
        ref="button"
      >
      </div>
      <van-circle
        v-show="state === 'uploadIng'"
        class="circle"
        v-model="currentRate"
        :rate="rate"
        :text="currentRate.toFixed(0) + '%'"
        size="50px"
        layerColor="#ebedf0"
      />
    </div>
    <div v-else-if="model === 'file'" class="file">
      <div
        class="completes-wrap"
        v-for="(valueOne, index) in value"
        :key="valueOne"
      >
        <div
          class="close"
          v-show="!disabled"
          @click="delCompletes(index)"
        >
          x
        </div>
        <a
          class="link"
          :href="filePrefix + valueOne"
        >
          {{ valueOne }}
        </a>
      </div>
      <div class="progress-wrap" v-show="state === 'uploadIng'">
        <van-progress class="progress" :percentage="rate" />
      </div>
      <div
        class="button"
        v-show="!disabled && (state === 'initial' || state === 'uploadComplete') && value.length < maxNumber"
        ref="button"
      >
      </div>
    </div>
    <div v-else-if="model === 'video'" class="video">
      <div
        class="completes-wrap"
        v-for="(valueOne, index) in value"
        :key="valueOne"
      >
        <div
          class="close"
          v-show="!disabled"
          @click="delCompletes(index)"
        >
          x
        </div>
        <video controls="controls" class="player" src="filePrefix + valueOne"></video>
      </div>
      <div class="progress-wrap" v-show="state === 'uploadIng'">
        <van-progress class="progress" :percentage="rate" />
      </div>
      <div
        class="button"
        v-show="!disabled && (state === 'initial' || state === 'uploadComplete') && value.length < maxNumber"
        ref="button"
      >
      </div>
    </div>
  </div>
</template>
<script>
import qq from 'fine-uploader/lib/core'
import vanCircle from 'vant/lib/circle'
import 'vant/lib/circle/style'
import vanProgress from 'vant/lib/progress'
import 'vant/lib/progress/style'
import ImagePreview from 'vant/lib/image-preview'
import 'vant/lib/image-preview/style'
import Notify from 'vant/lib/notify'
import 'vant/lib/notify/style'
export default {
  name: 'xUploader',
  props: {
    model: {
      type: String,
      default: 'image'
    },
    maxNumber: {
      type: Number,
      default: 1
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
      state: 'initial', // initial 初始状态 uploadIng 上传中 uploadComplete 上传完成
      currentRate: 0,
      fineUploaderBasic: null,
      imagePrefix: '/api/file/get?id=',
      filePrefix: '/api/file/download?id='
    }
  },
  created () {
  },
  mounted () {
    var that = this
    this.fineUploaderBasic = new qq.FineUploaderBasic({
      button: this.$refs.button,
      multiple: false,
      autoUpload: true,
      request: {
        endpoint: '/api/file/upload',
        inputName: 'file'
      },
      callbacks: {
        onUpload: function () {
          that.state = 'uploadIng'
          that.rate = 5
        },
        onComplete: function (id, name, responseJSON) {
          that.rate = 100
          that.state = 'uploadComplete'
          var cloneValue = that.$clone(that.value)
          cloneValue.push(responseJSON.data.fileId)
          that.$emit('input', cloneValue)
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
  },
  activated () {
  },
  deactivated () {
  },
  destroyed () {
  },
  methods: {
    delCompletes: function (index) {
      var cloneValue = this.$clone(this.value)
      cloneValue.splice(index, 1)
      this.$emit('input', cloneValue)
    },
    lookImg: function (index) {
      var images = []
      for (var i = 0; i < this.value.length; i++) {
        images.push(this.imagePrefix + this.value[i])
      }
      ImagePreview({
        images: images,
        startPosition: index
      })
    }
  },
  components: {
    vanCircle,
    vanProgress
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
    .file{
      .completes-wrap{
        display: block;
        float: left;
        position: relative;
        width: 100%;
        padding: 10px 36px 10px 10px;
        margin-bottom: 10px;
        background-color: #f8f8f8;
        .link{
          color: #1989fa;
          text-decoration: underline;
        }
        .close{
          display: block;
          width: 16px;
          height: 16px;
          line-height: 13px;
          background-color: #333;
          color: #fff;
          text-align: center;
          border-radius: 50%;
          font-size: 12px;
          position: absolute;
          right: 10px;
          top: 50%;
          margin-top: -8px;
        }
        .completes{
          height: 50px;
          display: block;
          border-radius: 2px;
          margin: 0 auto;
        }
      }
      .progress-wrap{
        overflow: hidden;
        width: 100%;
        margin-bottom: 10px;
        .progress{
          margin: 6px 0;
        }
      }
      .button{
        float: left;
        display: block;
        width: 100%;
        height: 40px;
        border: 1px dashed #c9c9c9;
        background-color: #f8f8f8;
        border-radius: 2px;
        &::after{
          position: absolute;
          content: " ";
          width: 2px;
          height: 20px;
          background-color: #c9c9c9;
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
          background-color: #c9c9c9;
          left: 50%;
          top: 50%;
          margin-top: -1px;
          margin-left: -10px;
        }
      }
    }
    .video{
      .completes-wrap{
        position: relative;
        width: 100%;
        margin-bottom: 10px;
        background-color: #e8e8e8;
        border-radius: 2px;
        .close{
          display: block;
          width: 20px;
          height: 20px;
          line-height: 16px;
          background-color: #333;
          color: #fff;
          text-align: center;
          border-radius: 50%;
          font-size: 14px;
          position: absolute;
          right: -8px;
          top: -8px;
          border: 1px solid #fff;
        }
        .player{
          width: 100%;
          display: block;
          border-radius: 2px;
        }
      }
      .progress-wrap{
        overflow: hidden;
        width: 100%;
        margin-bottom: 10px;
        .progress{
          margin: 6px 0;
        }
      }
      .button{
        float: left;
        display: block;
        width: 100%;
        height: 40px;
        border: 1px dashed #c9c9c9;
        background-color: #f8f8f8;
        border-radius: 2px;
        &::after{
          position: absolute;
          content: " ";
          width: 2px;
          height: 20px;
          background-color: #c9c9c9;
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
          background-color: #c9c9c9;
          left: 50%;
          top: 50%;
          margin-top: -1px;
          margin-left: -10px;
        }
      }
    }
    .image{
      .completes-wrap{
        display: block;
        float: left;
        position: relative;
        margin-right: 10px;
        margin-bottom: 10px;
        min-width: 50px;
        text-align: center;
        background-color: #f8f8f8;
        border-radius: 2px;
        .close{
          display: block;
          width: 17px;
          height: 17px;
          line-height: 13px;
          background-color: #333;
          color: #fff;
          text-align: center;
          border-radius: 50%;
          font-size: 12px;
          position: absolute;
          right: -8px;
          top: -8px;
          border: 1px solid #fff;
        }
        .completes{
          height: 50px;
          display: block;
          border-radius: 2px;
          margin: 0 auto;
        }
      }
      .circle{
        font-size: 12px;
        float: left;
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
