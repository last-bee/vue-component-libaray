<description>
### 准则
app执行js函数，js想返回数据给app，一律通过执行回调函数异步地进行。反过来js执行app函数，app想返回数据给js，也一律通过执行回调函数异步地进行。
### app调用js函数
**原理：** 利用浏览器地址栏可以运行JavaScript代码的原理，Android端（iOS原理类似）可以通过以下代码来执行JavaScript函数
```java
webView.loadUrl("javascript:sayHello()");
```
**实际应用：**
因为通过这种形式执行js函数这个函数需要在js的全局中才能正常运行，所以实际编码中不会直接这样执行，而是有一个统一的入口。
```java
webView.loadUrl("javascript:appCallJs('test', 'appCallJs传过来的参数', 'callbackKey');")
```
#### app调用js的入口函数是`appCallJs(funName, parameter, key)`
**参数：**
- `funName` 想要执行的js的函数名，由js工程师和Android、iOS工程师共同约定
- `parameter` 传递给函数的参数，可能是一个字符串或者数字或者一个json字符串（如果是json字符串js端会自动将其转化为json对象）
- `key` js回调app函数的时候传递的key。当app执行了js的函数，而js的函数需要返回一些数据的时候，js会统一通过调用app的`jsCallbackApp`函数（下面有提到）并且传递数据及回传这个`key`。所以这个`key`是识别回调的关键。
#### app回调js的函数是`appCallbackJs(key, successOrError, parameter)`
**说明：** js调用了app的函数，而app的函数需要返回一些数据给js的时候，app会统一通过调用js的`appCallbackJs`函数。
**参数：**
- `key` 将js执行app函数的时候传递来的key原样回传。
- `successOrError` app通过这个参数告知js函数执行是成功还是失败，成功传递`success`，失败传递`error`
- `parameter` 传递给函数的参数，可能是一个字符串或者数字或者一个json字符串（app端可以将json字符串转化为json对象）
### js调用Android函数
通过`addJavascriptInterface`通过`JsCallAndroid`对js开放两个函数，如下伪代码：
```java
this.addJavascriptInterface(mJavaScriptInterface, "JsCallAndroid");
class JavaScriptInterface {
    @JavascriptInterface
    public void execute(String funName, String parameter, String key) {
      if (funName.equals("test")) {
        test(parameter)
      }
    }
    @JavascriptInterface
    public void jsCallbackApp (String key, String successOrError, String parameter) {
    }
}
this.addJavascriptInterface(new JavaScriptInterface(), "JsCallAndroid");
```
### execute 函数
**说明：** Android开放给js的一个用于`js执行Android函数的入口`。什么意思呢？也就是说Android开放给js的函数可能有很多个，但是都是以这个为入口。比如Android想开放一个名为'test'的函数给js，那么参考上面的`execute`函数中的逻辑来,当然这种通过`funName.equals("test")`来判断并决定执行什么函数的方式有点蠢，你可以用java映射或者其它技术更好管理代码。
**参数：**
- `funName` 想要执行的app端的函数名，由js工程师和Android、iOS工程师共同约定
- `parameter` 传递给函数的参数，可能是一个字符串或者数字或者一个json字符串（app端可以将json字符串转化为json对象）
- `key` app回调js函数的时候传递的key。当js执行了app的函数，需要返回一些数据的时候，app统一通过调用js的`appCallbackJs`函数并且传递数据及回传这个`key`。所以这个`key`是识别回调的关键。
### jsCallbackApp 函数
**说明：** 当app执行了js的函数，而js的函数需要返回一些数据给app的时候，js会统一通过调用app的`jsCallbackApp`函数。
**参数：**
- `key` 将app执行js函数的时候传递来的key原样回传。
- `successOrError` js通过这个参数告知app函数执行是成功还是失败，成功传递`success`，失败传递`error`
- `parameter` 传递给函数的参数，可能是一个字符串或者数字或者一个json字符串（app端可以将json字符串转化为json对象）
## iOS相关
尽管上面是以Android平台为例，但是iOS的实现思路也是一样，可以参考：[自己动手打造基于 WKWebView 的混合开发框架](https://lvwenhan.com/ios/461.html)
### 开放方法给js
通过在 WKWebView 中的 js runtime 里事先注入 window.webkit.messageHandlers.execute.postMessage() 和 window.webkit.messageHandlers.jsCallbackApp.postMessage()，`execute`和`jsCallbackApp`分别对应上面提到的函数。
### js会按以下方式来调用app方法
``` js
window.webkit.messageHandlers['execute'].postMessage({
  'funName': funName,
  'parameter': parameter,
  'key': key
})
window.webkit.messageHandlers['jsCallbackApp'].postMessage({
  'key': key,
  'successOrError': successOrError,
  'parameter': parameter
})
```
</description>

```html
<template>
  <div class="app-bridge-demo">
    <van-button class="btn" @click="test" plain type="primary">获取数据</van-button>
    <template v-html="log"></template>
  </div>
</template>
<script>
// import Toast from 'vant/lib/toast'
// import 'vant/lib/toast/style'
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
      // this.log += window.JsCallAndroid.test() + '</br>'
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
