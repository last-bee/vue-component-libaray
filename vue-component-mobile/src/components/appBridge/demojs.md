<description>
### js端的代码实现
JavaScript端的实现只需通过100多行的代码，请仔细阅读以下代码，并将代码集成进项目中。
首先将`appBridge`注入在vue中，这样在任何组件中都可以通过`this.$appBridge`来访问。
``` js
import appBridge from './appBridge.js'
export default {
  install: function (Vue) {
    window.appCallbackJs = appBridge.appCallbackJs
    window.appCallJs = appBridge.appCallJs
    Vue.appBridge = appBridge
    Vue.prototype.$appBridge = appBridge
  }
}
```
在`main.js`中引入上面的js，并且使用`Vue.use()`完成注入。
### appBridge.js 内容：
``` js
import appCallJsFunction from './appCallJsFunction/index.js'
let _queueCallbacks = []
// 获取当前运行环境为Android或者ios或者浏览器
let getRunEnv = function () { // 这里暂时写死为Android，请和app开发人员约定一个获取运行环境的函数，并通过这个函数获取运行环境
  return {
    system: 'Android', // Android平台
    env: 'App' // app环境
  }
}
export default {
  jsCallApp: function (funName, parameter, successCallback, errorCallback) {
    var key = this._addQueueCallbacks(successCallback, errorCallback)
    try {
      parameter = JSON.stringify(parameter)
    } catch {
      console.log('')
    }
    if (getRunEnv().system === 'Android') {
      window.JsCallAndroid.execute(funName, parameter, key)
    } else {
      window.webkit.messageHandlers['execute'].postMessage({
        'funName': funName,
        'parameter': parameter,
        'key': key
      })
    }
  },
  appCallJs: function (funName, parameter, key) { // funName 执行的方法名 parameter参数
    function jsCallbackApp (key, successOrError, parameter) {
      try {
        parameter = JSON.stringify(parameter)
      } catch {
        console.log('')
      }
      if (getRunEnv().system === 'Android') {
        window.JsCallAndroid.jsCallbackApp(key, successOrError, parameter)
      } else {
        window.webkit.messageHandlers['jsCallbackApp'].postMessage({
          'key': key,
          'successOrError': successOrError,
          'parameter': parameter
        })
      }
    }
    appCallJsFunction[funName](parameter, function (successOrError, jsParameter) {
      jsCallbackApp(key, successOrError, jsParameter)
    })
  },
  appCallbackJs: function (key, successOrError, parameter) {
    for (var i = 0; i < _queueCallbacks.length; i++) {
      if (_queueCallbacks[i].key === key) {
        try {
          parameter = JSON.parse(parameter)
        } catch {
          console.log('')
        }
        if (successOrError === 'success') {
          _queueCallbacks[i].success(parameter)
        } else if (successOrError === 'error') {
          _queueCallbacks[i].error(parameter)
        }
      }
    }
  },
  _queueCallbacks: [],
  _addQueueCallbacks: function (pSuccessCallback, pErrorCallback) {
    var key = this._getUuid()
    _queueCallbacks.push({
      success: pSuccessCallback,
      error: pErrorCallback,
      key: key
    })
    return key
  },
  _getUuid: function (len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    var uuid = []
    radix = radix || chars.length
    if (len) {
      for (var i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * radix]
      }
    } else {
      var r = null
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'
      for (var j = 0; j < 36; j++) {
        if (!uuid[j]) {
          r = 0 | Math.random() * 16
          uuid[j] = chars[(j === 19) ? (r & 0x3) | 0x8 : r]
        }
      }
    }
    return uuid.join('')
  }
}
```
### appCallJsFunction 目录是js开放给app的函数集合
#### `./appCallJsFunction/index.js` 内容：
```js
export default {
  test: function (parameter, callFun) {
    console.log('app调用了js的方法' + parameter)
    var jsParameter = {
      'name': '来至js的参数'
    }
    callFun('success', jsParameter)
  }
}
```
集成以上的代码，并配合app壳即可像以下的方式来调用app的函数。
</description>

```html
<template>
  <div class="app-bridge-demo">
    <van-button class="btn" @click="test" plain type="primary">获取数据</van-button>
    <template v-html="log"></template>
  </div>
</template>
<script>
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  data () {
    return {
      log: ''
    }
  },
  methods: {
    test: function () {
      this.$appBridge.jsCallApp('appFuncttion', 'js传递给app的参数', function (parameter) {
        console.log('app成功回调' + parameter)
      }, function (parameter) {
        console.log('app成功回调' + parameter)
      })
    }
  },
  components: {
    vanButton
  }
}
</script>
<style scoped lang="scss">
.local-storage-demo{
  .btn{
    margin-right: 10px;
  }
}
</style>
```
