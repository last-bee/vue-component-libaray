import appCallJsFunction from './appCallJsFunction/index.js'
let _queueCallbacks = []
let getRunEnv = function () {
  return {
    system: 'Android',
    env: 'App'
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
    // var that = this
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
