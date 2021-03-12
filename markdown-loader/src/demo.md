<description>
### 选项数据
选项数据是一些如：`车牌类型`，`事故责任类型` 等选项类型的数据，这类数据由于运营需要无法再前端"写死"，但是如果每次都单独请求后端数据又会导致系统低效及编码繁琐，所以系统在初始化的时候会将这些数据请求并统一管理，开发者只需通过简单的方法即可获取相应的数据。
#### 异步获取选项列表
由于选项数据是从服务器请求回来的需要一定的时间，如果数据还没请求回来就进行查询，这是时候肯定是没有数据的，所以查询数据一般采用异步的形式进行获取，如下代码：
```` js
this.$dataOptions.getSync('AccidentType', function (data) {
  console.log(data)
}, function () {
  console.log('获取数据选项失败')
})
````
从上面代码可以知晓，数据查询的方法已经注入到vue示例中，你可以在组件中使用`this.$dataOptions.getSync(codeType, successCallBack, failureCallBack)`进行查询。其中参数如下：
- codeType：数据类型，也就是数据的key
- successCallBack：成功回调
- failureCallBack：失败回调
#### 同步获取选项列表
如果获取操作不是在页面初始化的时候，那么这时候所有的数据应该都已经请求回来了，可以考虑使用同步请求来简化代码逻辑。
```` js
console.log(this.$dataOptions.get('AuditStatus'))
````
#### 异步获取指定数据选项name
由于选项数据是从服务器请求回来的需要一定的时间，如果数据还没请求回来就进行查询，这是时候肯定是没有数据的，所以查询数据一般采用异步的形式进行获取，如下代码：
```` js
this.$dataOptions.getNameSync('AccidentType', '01', function (name) {
  console.log(name)
}, function () {
  console.log('name获取失败')
})
````
从上面代码可以知晓，数据查询的方法已经注入到vue示例中，你可以在组件中使用`this.$dataOptions.getNameSync(codeType, value, successCallBack, failureCallBack)`进行查询。其中参数如下：
- codeType：数据类型，也就是数据的key
- value：数据code，也就是数据的值
- successCallBack：成功回调
- failureCallBack：失败回调
#### 同步获取指定数据选项name
如果获取操作不是在页面初始化的时候，那么这时候所有的数据应该都已经请求回来了，可以考虑使用同步请求来简化代码逻辑。
```` js
console.log(this.$dataOptions.getName('HospitalLevel', '01'))
````
</description>

```html
<template>
  <div class="data-options-demo">
    <van-button @click="get" type="primary">同步获取选项数据</van-button>
    <p>{{ auditStatus }}</p>
    <van-button @click="getNameSync" type="primary">异步获取name</van-button>
    <p></p>
    <van-button @click="getName" type="primary">同步获取name</van-button>
    <van-radio-group v-model="accidentDealDepart">
      <van-radio
        :name="accidentDealDepartOptions.codeCode"
        :key="accidentDealDepartOptions.codeCode" v-for="accidentDealDepartOptions in accidentDealDepartList">
        {{ accidentDealDepartOptions.codeName }}
      </van-radio>
    </van-radio-group>
  </div>
</template>
<script>
import vanRadioGroup from 'vant/lib/radio-group'
import 'vant/lib/radio-group/style'
import vanRadio from 'vant/lib/radio'
import 'vant/lib/radio/style'
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  data () {
    return {
      accidentDealDepartList: [],
      accidentDealDepart: '01',
      auditStatus: null
    }
  },
  created () {
    this.getName()
    var that = this
    this.$dataOptions.getSync('AccidentDealDepart', function (data) {
      console.log(data)
      that.accidentDealDepartList = data
    }, function () {
      console.log('获取数据选项失败')
    })
  },
  methods: {
    get: function () {
      this.auditStatus = this.$dataOptions.get('AuditStatus')
    },
    getNameSync: function () {
      this.$dataOptions.getNameSync('AccidentType', '01', function (name) {
        console.log(name)
      }, function () {
        console.log('name获取失败')
      })
    },
    getName: function () {
      console.log(this.$dataOptions.getName('HospitalLevel', '01'))
    }
  },
  components: {
    vanRadio,
    vanRadioGroup,
    vanButton
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
```