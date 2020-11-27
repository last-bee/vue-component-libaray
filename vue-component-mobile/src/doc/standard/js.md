<description>
### `JS`规范
**`JS`中比较重要的是代码注释与封装，封装牵涉到creater的基本功底，主要写一下代码中的注释规范**
**代码的抽象，封装，class，构造函数与继承关系的使用场景creater多使用，锻炼基本功底**
#### `JS`中的命名
**常用命名符合习惯，从名称知道变量的基本功能，这是基本要求**
#### 方法注释
```
/**
 * @method
 * @param {Type} data 目标对象
 * @returns {Type} 运营商名称
 * @desc 根据目标对象获取运营商
 */
function functionNumber(data){
  return '返回对象'
}
```
**例如**
```
/**
 *@method
 *@desc 根据传入的字符串去除前后空格
 *@param { String } str 传入的字符串
 *@returns { String } 去除前后空格的结果
 */
  function trim(str) {
    return str?str.replace(/(^\s*)|(\s*$)/g, ''): ''
  }
```
#### 类的注释
```
/**
 * @class
 * @classdesc 这是对class类的描述
 * @desc 这是对class类的构造函数的描述
 */
function className() {
  ...
}
```
**例如**
```
/**
 * @class websocketHeart
 * @calssdesc  websocketHeart是对websocket的操作与重连的类
 * @desc 传入参数进行websocket链接，当断链时，会重新进行重连。
 * @desc 当主动调用close时不会主动重连
 * @param {Object} options
 * {
 *    url   websocket 地址
 *    pingTimeout 未收到消息多少毫秒发送请求，默认30000
 *    pongTimeout  发送ping之后，未收到消息超时时间，默认20000毫秒
 *    reconnectTimeout  重连时间2000
 *    pingMsg  发送的ping值  默认ClientHeartBeat
 *    repeatLimit
 * }
 * @returns 类的实例
 */
import Cookies from 'js-cookie'
export default class websocketHeart {
  constructor(options) {
    let _options = {
      pingTimeout: 30000,
      pongTimeout: 20000,
      reconnectTimeout: 2000,
      pingMsg: 'ClientHeartBeat'
    }
    this.options = Object.assign(_options, options || {})
    this.ws = null
    this.createWebSocket()
  }
  createWebSocket() {
    try {
      this.ws = new WebSocket(this.options.url, [Cookies.get('msusertoken')]);
      // console.log(this.ws)
      this.initEventHandle();
    } catch (e) {
      // this.reconnect();
      throw e;
    }
  }
  initEventHandle() {
    this.ws.onopen = () => {
      // console.log('------onopen-------')
      this.repeat = 0
      this.onopen()
      //心跳检测重置
      this.heartCheck();
    }
    this.ws.onmessage = (data) => {
      // console.log(data)
      // this.onmessage(data)
      //如果获取到消息，心跳检测重置
      //拿到任何消息都说明当前连接是正常的
      this.heartCheck();
      if(data.isTrusted) {
        if(data.data === 'ServerHeartBeat') {
          return
        } else {
          let _data = JSON.parse(data.data)
          this.onmessage(_data)
        }
      }
    }
    this.ws.onclose = (data) => {
      this.onclose()
      if(data.code === '4001') {
        this.ws.close()
      } else {
        this.reconnect()
      }
    }
    this.ws.onerror = () => {
      this.onerror();
      this.reconnect();
    }
  }
  heartCheck() {
    this.heartReset()
    this.heartStart()
  }
  heartReset() {
    clearTimeout(this.pingTimeoutId);
    clearTimeout(this.pongTimeoutId);
  }
  heartStart() {
    if(this.forbidReconnect) return;//不再重连就不再执行心跳
    this.pingTimeoutId = setTimeout(() => {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      //onmessage拿到返回的心跳就说明连接正常
      this.ws.send(this.options.pingMsg);
      //如果超过一定时间还没重置，说明后端主动断开了
      this.pongTimeoutId = setTimeout(() => {
        //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
        this.ws.close();
      }, this.options.pongTimeout);
    }, this.options.pingTimeout);
  }
  close() {
    this.forbidReconnect = true;
    this.heartReset();
    this.ws.close();
  }
  onclose() {}
  onerror() {}
  onopen() {}
  onmessage() {}
  onreconnect() {}
  reconnect() {
    if(this.options.repeatLimit>0 && this.options.repeatLimit <= this.repeat) return;
    if(this.lockReconnect || this.forbidReconnect) return;
    this.lockReconnect = true;
    this.repeat ++
    this.onreconnect();
    setTimeout(() => {
      this.createWebSocket();
      this.lockReconnect = false;
    }, this.options.reconnectTimeout);
  }
}
// 调用
let ws = new websocketHeart({})
// 主动关闭
wx.close()
```
</description>
