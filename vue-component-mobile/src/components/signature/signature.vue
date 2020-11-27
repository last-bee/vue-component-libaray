<template>
  <div class="x-canvas-main">
    <div class="border">
      <div v-if="loadingIsShow" class="loading">
        <div class="middle">
          <van-loading class="van-loading" type="spinner"></van-loading>
          <p class="loading-text">
            正在上传签名···
          </p>
        </div>
      </div>
      <img class="image" v-if="imageIsShow" :src="imageSrc" />
      <canvas class="canvas" :width="width * ratio" :height="height * ratio" :style="canvasStyle" ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
import SignaturePad from 'signature_pad'
import vanLoading from 'vant/lib/loading'
import 'vant/lib/loading/style'
export default {
  name: 'xSignature',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 200
    }
  },
  watch: {
    disabled: function (val) {
      this.disabledHandle(val)
    }
  },
  computed: {
    canvasStyle: function () {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
  },
  data () {
    return {
      ratio: Math.max(window.devicePixelRatio || 1, 1),
      imageIsShow: false,
      loadingIsShow: false
    }
  },
  created () {
  },
  mounted () {
    this.$refs.canvas.getContext('2d').scale(this.ratio, this.ratio)
    this.signaturePad = new SignaturePad(this.$refs.canvas)
    this.disabledHandle(this.disabled)
  },
  activated () {
  },
  deactivated () {
  },
  destroyed () {
  },
  methods: {
    isEmpty () {
      return this.signaturePad.isEmpty()
    },
    clear () {
      this.signaturePad.clear()
    },
    showImage (fileId) {
      this.imageSrc = '/api/file/get?id=' + fileId
      this.imageIsShow = true
    },
    hideImage () {
      this.imageIsShow = false
    },
    upload (successCallBack, failureCallBack) {
      var that = this
      this.loadingIsShow = true
      this.$http.post('/file/uploadBase64', {
        data: this.getData()
      }).then(response => {
        that.loadingIsShow = false
        successCallBack && successCallBack(response.body.data.fileId)
      }, response => {
        that.loadingIsShow = false
        failureCallBack && failureCallBack(response)
      })
    },
    getData () {
      return this.signaturePad.toDataURL()
    },
    disabledHandle (val) {
      if (val) {
        this.signaturePad.off()
      } else {
        this.signaturePad.on()
      }
    }
  },
  components: {
    vanLoading
  }
}
</script>
<style scoped lang="scss">
.x-canvas-main{
  .border{
    overflow: hidden;
    position: relative;
    .canvas{
      display: block;
    }
    .image{
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      background: #fff;
    }
    .loading{
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      text-align: center;
      background-color: rgba(255, 255, 255, 0.9);
      .middle{
        top: 50%;
        margin-top: -30px;
        width: 100%;
        height: 60px;
        position: absolute;
        .van-loading{
          position: absolute;
          left: 50%;
          margin-left: -15px;
        }
        .loading-text{
          position: absolute;
          display: block;
          height: 30px;
          line-height: 30px;
          bottom: 0px;
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: rgb(77, 77, 77);
        }
      }
    }
  }
}
</style>
