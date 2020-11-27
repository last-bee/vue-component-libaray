<description>
# 技术说明书
## 项目的构成
如下图所示：
1.项目的基础是 [vue cli 3](https://cli.vuejs.org/zh/)脚手架加上一些自定义的配置。
2.在[vue cli 3脚手架](https://cli.vuejs.org/zh/)上编写业务代码和组件。
3.可以高度抽离的组件和功能独立成一个库：@hhm1999/vue-components-mobile，并且将这个库托管在npm上，再通过依赖加载进来。
<img width="600px" src="./architecture-diagram.png"/>
## 使用了那些开源资源
1.[vue cli 3](https://cli.vuejs.org/zh/) 脚手架
2.[F2](http://antv.alipay.com/zh-cn/f2/3.x/index.html) 移动图表库
3.[signature_pad](https://github.com/szimek/signature_pad) 用于签名组件
## 独立库抽离的原理
@hhm1999/vue-components-mobile库是一个独立的组件和功能库，发布在npm上，实现一个独立库的抽离有以下技术要点。
### 1.基于vue cli 3
独立库使用vue cli 3作为脚手架。并且通过vue cli 3的[库模式](https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93)进行打包构建。
打包的脚本命令：`vue-cli-service build --target lib --name vue-components-mobile ./src/components/index.js`
其中`./src/components/index.js`是整个库的入口，有关这个入口的原理见下一小节。
### 2.库的入口
`./src/components/index.js`是整个库的入口，内容如下：
```` js
import localStorage from './localStorage/index.js'
import sessionStorage from './sessionStorage/index.js'
import dataOptions from './dataOptions/index.js'
// import appBridge from './appBridge/index.js'
import clone from './clone/index.js'
import form from './form/index.js'
import uploader from './uploader/index.js'
import uploaderFixed from './uploaderFixed/index.js'
import signature from './signature/index.js'
import statistics from './statistics/index.js'
// import discriminate from './discriminate/index.js'
// import checkUpdate from './checkUpdate/index.js'
var components = [
  localStorage,
  sessionStorage,
  dataOptions,
  clone,
  form,
  uploader,
  uploaderFixed,
  signature,
  statistics
]
const install = Vue => {
  for (var i = 0; i < components.length; i++) {
    Vue.use(components[i])
  }
}
export default {
  install
}
````
可以看出该文件只是将`各个模块的入口`import进来，并将其使用[vue.use](https://cn.vuejs.org/v2/api/#Vue-use)安装进Vue中。
`各个模块的入口`及模块的设计原理请看下节。
### 3.库模块设计
每个模块由入口、主体和文档组成，以[签名](/signature)模块为例，该模块的 入口：index.js，主体：signature.vue，文档：demo.md。如下图所示：
<img width="400px" src="./module.jpg"/>
下面将以这个模块的三个文件为例阐述入口、主体和文档的原理。
#### 3.1 主体signature.vue
以签名模块为例，模块的主体就是签名组件的vue单文件，具体可以自行查看源码。需要注意的是vue单文件的name属性必须赋值，这个name将用于是该模块的全局名称，具体见下一小节。
#### 3.2 入口index.js
模块入口代码如下：
```` js
import signature from './signature.vue'
export default {
  install: function (Vue) {
    Vue.component(signature.name, signature)
  }
}
````
模块的入口很简单，直接将模块的主体import进来，并且在`install`中通过[Vue.component](https://cn.vuejs.org/v2/api/#Vue-component)注册为全局组件，其中组件的全局名称是上一节提到的name。
#### 3.3 文档
模块的文档和其它内容一样重要，是模块的组成部分，而一份文档分为2个部分：mk格式的文档 和 运行示例，通过一个webpack的自定义loader 可以实现将 mk格式的文档、示例、示例源码 3个内容渲染在一个页面上，这样做可以省略示例和示例源码的单独维护问题。而关于这个自定义loader的原理请看下一章。
### 文档自定义loader
上一节提到的自定义loader，是一个webpack的自定义loader，关于如何编写一个webpack的自定义loader请移步webpack官网的教程，这里只简单讲解这个loader的原理。打开任意一个模块的文档（即模块目录下的demo.md文件），可以发现文档分为两部分：
#### 第一部分：description
由<description></description>标签包裹的mk格式的文档，这个部分最终会被按mk格式渲染到文档页面上。
#### 第二部分：示例
示例部分，该部分会被按vue单文件渲染成vue程序，并以正常运行结果显示在文档上，而且这部分的源码也会显示在页面的，这样就形成了运行结果及源码这两部分都展示在页面的效果。
#### 原理
自定义loader通过正则的方式将文档分割成以上提到的两个部分，然后：
1.使用`markdown-it`将第一部分进行渲染，输出为模板
2.然后再将第二部分的源码“复制”两份，一份渲染为模板
3.另一份通过正则提取为style和script两部分
再将上面提到的4个部分组合成一个vue单文件并返回，所以这个loader的下一个loader需要配置为`vue-loader`，这样最终文档就渲染成了一个vue组件，其中既包括文本说明、示例运行效果还包括了示例的源码。
</description>
