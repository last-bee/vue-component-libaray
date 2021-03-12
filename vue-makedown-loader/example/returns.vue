<template><div>
        <template>
          <test :jsfiddle="{&quot;html&quot;:&quot;\n  &lt;div class=\&quot;data-options-demo\&quot;&gt;\n    &lt;van-button @click=\&quot;get\&quot; type=\&quot;primary\&quot;&gt;同步获取选项数据&lt;/van-button&gt;\n    &lt;p&gt;{{ auditStatus }}&lt;/p&gt;\n    &lt;van-button @click=\&quot;getNameSync\&quot; type=\&quot;primary\&quot;&gt;异步获取name&lt;/van-button&gt;\n    &lt;p/&gt;\n    &lt;van-button @click=\&quot;getName\&quot; type=\&quot;primary\&quot;&gt;同步获取name&lt;/van-button&gt;\n    &lt;van-radio-group v-model=\&quot;accidentDealDepart\&quot;&gt;\n      &lt;van-radio :name=\&quot;accidentDealDepartOptions.codeCode\&quot; :key=\&quot;accidentDealDepartOptions.codeCode\&quot; v-for=\&quot;accidentDealDepartOptions in accidentDealDepartList\&quot;&gt;\n        {{ accidentDealDepartOptions.codeName }}\n      &lt;/van-radio&gt;\n    &lt;/van-radio-group&gt;\n  &lt;/div&gt;\n&quot;,&quot;script&quot;:&quot;\nimport vanRadioGroup from 'vant/lib/radio-group'\nimport 'vant/lib/radio-group/style'\nimport vanRadio from 'vant/lib/radio'\nimport 'vant/lib/radio/style'\nimport vanButton from 'vant/lib/button'\nimport 'vant/lib/button/style'\nexport default {\n  data () {\n    return {\n      accidentDealDepartList: [],\n      accidentDealDepart: '01',\n      auditStatus: null\n    }\n  },\n  created () {\n    this.getName()\n    var that = this\n    this.$dataOptions.getSync('AccidentDealDepart', function (data) {\n      console.log(data)\n      that.accidentDealDepartList = data\n    }, function () {\n      console.log('获取数据选项失败')\n    })\n  },\n  methods: {\n    get: function () {\n      this.auditStatus = this.$dataOptions.get('AuditStatus')\n    },\n    getNameSync: function () {\n      this.$dataOptions.getNameSync('AccidentType', '01', function (name) {\n        console.log(name)\n      }, function () {\n        console.log('name获取失败')\n      })\n    },\n    getName: function () {\n      console.log(this.$dataOptions.getName('HospitalLevel', '01'))\n    }\n  },\n  components: {\n    vanRadio,\n    vanRadioGroup,\n    vanButton\n  }\n}\n&quot;,&quot;style&quot;:null,&quot;description&quot;:&quot;\n### 选项数据\n选项数据是一些如：`车牌类型`，`事故责任类型` 等选项类型的数据，这类数据由于运营需要无法再前端\&quot;写死\&quot;，但是如果每次都单独请求后端数据又会导致系统低效及编码繁琐，所以系统在初始化的时候会将这些数据请求并统一管理，开发者只需通过简单的方法即可获取相应的数据。\n#### 异步获取选项列表\n由于选项数据是从服务器请求回来的需要一定的时间，如果数据还没请求回来就进行查询，这是时候肯定是没有数据的，所以查询数据一般采用异步的形式进行获取，如下代码：\n```` js\nthis.$dataOptions.getSync('AccidentType', function (data) {\n  console.log(data)\n}, function () {\n  console.log('获取数据选项失败')\n})\n````\n从上面代码可以知晓，数据查询的方法已经注入到vue示例中，你可以在组件中使用`this.$dataOptions.getSync(codeType, successCallBack, failureCallBack)`进行查询。其中参数如下：\n- codeType：数据类型，也就是数据的key\n- successCallBack：成功回调\n- failureCallBack：失败回调\n#### 同步获取选项列表\n如果获取操作不是在页面初始化的时候，那么这时候所有的数据应该都已经请求回来了，可以考虑使用同步请求来简化代码逻辑。\n```` js\nconsole.log(this.$dataOptions.get('AuditStatus'))\n````\n#### 异步获取指定数据选项name\n由于选项数据是从服务器请求回来的需要一定的时间，如果数据还没请求回来就进行查询，这是时候肯定是没有数据的，所以查询数据一般采用异步的形式进行获取，如下代码：\n```` js\nthis.$dataOptions.getNameSync('AccidentType', '01', function (name) {\n  console.log(name)\n}, function () {\n  console.log('name获取失败')\n})\n````\n从上面代码可以知晓，数据查询的方法已经注入到vue示例中，你可以在组件中使用`this.$dataOptions.getNameSync(codeType, value, successCallBack, failureCallBack)`进行查询。其中参数如下：\n- codeType：数据类型，也就是数据的key\n- value：数据code，也就是数据的值\n- successCallBack：成功回调\n- failureCallBack：失败回调\n#### 同步获取指定数据选项name\n如果获取操作不是在页面初始化的时候，那么这时候所有的数据应该都已经请求回来了，可以考虑使用同步请求来简化代码逻辑。\n```` js\nconsole.log(this.$dataOptions.getName('HospitalLevel', '01'))\n````\n&quot;,&quot;sourceCode&quot;:&quot;&lt;template&gt;\n  &lt;div class=\&quot;data-options-demo\&quot;&gt;\n    &lt;van-button @click=\&quot;get\&quot; type=\&quot;primary\&quot;&gt;同步获取选项数据&lt;/van-button&gt;\n    &lt;p&gt;{{ auditStatus }}&lt;/p&gt;\n    &lt;van-button @click=\&quot;getNameSync\&quot; type=\&quot;primary\&quot;&gt;异步获取name&lt;/van-button&gt;\n    &lt;p&gt;&lt;/p&gt;\n    &lt;van-button @click=\&quot;getName\&quot; type=\&quot;primary\&quot;&gt;同步获取name&lt;/van-button&gt;\n    &lt;van-radio-group v-model=\&quot;accidentDealDepart\&quot;&gt;\n      &lt;van-radio\n        :name=\&quot;accidentDealDepartOptions.codeCode\&quot;\n        :key=\&quot;accidentDealDepartOptions.codeCode\&quot; v-for=\&quot;accidentDealDepartOptions in accidentDealDepartList\&quot;&gt;\n        {{ accidentDealDepartOptions.codeName }}\n      &lt;/van-radio&gt;\n    &lt;/van-radio-group&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nimport vanRadioGroup from 'vant/lib/radio-group'\nimport 'vant/lib/radio-group/style'\nimport vanRadio from 'vant/lib/radio'\nimport 'vant/lib/radio/style'\nimport vanButton from 'vant/lib/button'\nimport 'vant/lib/button/style'\nexport default {\n  data () {\n    return {\n      accidentDealDepartList: [],\n      accidentDealDepart: '01',\n      auditStatus: null\n    }\n  },\n  created () {\n    this.getName()\n    var that = this\n    this.$dataOptions.getSync('AccidentDealDepart', function (data) {\n      console.log(data)\n      that.accidentDealDepartList = data\n    }, function () {\n      console.log('获取数据选项失败')\n    })\n  },\n  methods: {\n    get: function () {\n      this.auditStatus = this.$dataOptions.get('AuditStatus')\n    },\n    getNameSync: function () {\n      this.$dataOptions.getNameSync('AccidentType', '01', function (name) {\n        console.log(name)\n      }, function () {\n        console.log('name获取失败')\n      })\n    },\n    getName: function () {\n      console.log(this.$dataOptions.getName('HospitalLevel', '01'))\n    }\n  },\n  components: {\n    vanRadio,\n    vanRadioGroup,\n    vanButton\n  }\n}\n&lt;/script&gt;\n&lt;style scoped lang=\&quot;scss\&quot;&gt;\n.x-canvas-main{\n  .border{\n    overflow: hidden;\n    position: relative;\n    .canvas{\n      display: block;\n    }\n    .image{\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      display: block;\n      background: #fff;\n    }\n    .loading{\n      z-index: 1;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      display: block;\n      text-align: center;\n      background-color: rgba(255, 255, 255, 0.9);\n      .middle{\n        top: 50%;\n        margin-top: -30px;\n        width: 100%;\n        height: 60px;\n        position: absolute;\n        .van-loading{\n          position: absolute;\n          left: 50%;\n          margin-left: -15px;\n        }\n        .loading-text{\n          position: absolute;\n          display: block;\n          height: 30px;\n          line-height: 30px;\n          bottom: 0px;\n          width: 100%;\n          text-align: center;\n          font-size: 14px;\n          color: rgb(77, 77, 77);\n        }\n      }\n    }\n  }\n}\n&quot;}" has-description="true" has-template="true" has-code="true">
            <template slot="description"><h3>选项数据</h3>
<p>选项数据是一些如：<code>车牌类型</code>，<code>事故责任类型</code> 等选项类型的数据，这类数据由于运营需要无法再前端&quot;写死&quot;，但是如果每次都单独请求后端数据又会导致系统低效及编码繁琐，所以系统在初始化的时候会将这些数据请求并统一管理，开发者只需通过简单的方法即可获取相应的数据。</p>
<h4>异步获取选项列表</h4>
<p>由于选项数据是从服务器请求回来的需要一定的时间，如果数据还没请求回来就进行查询，这是时候肯定是没有数据的，所以查询数据一般采用异步的形式进行获取，如下代码：</p>
<pre><code class="language-js"><span class="hljs-keyword">this</span>.$dataOptions.getSync(<span class="hljs-string">'AccidentType'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">data</span>) </span>{
  <span class="hljs-built_in">console</span>.log(data)
}, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'获取数据选项失败'</span>)
})
</code></pre>
<p>从上面代码可以知晓，数据查询的方法已经注入到vue示例中，你可以在组件中使用<code>this.$dataOptions.getSync(codeType, successCallBack, failureCallBack)</code>进行查询。其中参数如下：</p>
<ul>
<li>codeType：数据类型，也就是数据的key</li>
<li>successCallBack：成功回调</li>
<li>failureCallBack：失败回调</li>
</ul>
<h4>同步获取选项列表</h4>
<p>如果获取操作不是在页面初始化的时候，那么这时候所有的数据应该都已经请求回来了，可以考虑使用同步请求来简化代码逻辑。</p>
<pre><code class="language-js"><span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$dataOptions.get(<span class="hljs-string">'AuditStatus'</span>))
</code></pre>
<h4>异步获取指定数据选项name</h4>
<p>由于选项数据是从服务器请求回来的需要一定的时间，如果数据还没请求回来就进行查询，这是时候肯定是没有数据的，所以查询数据一般采用异步的形式进行获取，如下代码：</p>
<pre><code class="language-js"><span class="hljs-keyword">this</span>.$dataOptions.getNameSync(<span class="hljs-string">'AccidentType'</span>, <span class="hljs-string">'01'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">name</span>) </span>{
  <span class="hljs-built_in">console</span>.log(name)
}, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'name获取失败'</span>)
})
</code></pre>
<p>从上面代码可以知晓，数据查询的方法已经注入到vue示例中，你可以在组件中使用<code>this.$dataOptions.getNameSync(codeType, value, successCallBack, failureCallBack)</code>进行查询。其中参数如下：</p>
<ul>
<li>codeType：数据类型，也就是数据的key</li>
<li>value：数据code，也就是数据的值</li>
<li>successCallBack：成功回调</li>
<li>failureCallBack：失败回调</li>
</ul>
<h4>同步获取指定数据选项name</h4>
<p>如果获取操作不是在页面初始化的时候，那么这时候所有的数据应该都已经请求回来了，可以考虑使用同步请求来简化代码逻辑。</p>
<pre><code class="language-js"><span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$dataOptions.getName(<span class="hljs-string">'HospitalLevel'</span>, <span class="hljs-string">'01'</span>))
</code></pre>

        <template>
          <test :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
          </test>
        </template></template>
            <template slot="component">
  <div class="data-options-demo">
    <van-button @click="get" type="primary">同步获取选项数据</van-button>
    <p>{{ auditStatus }}</p>
    <van-button @click="getNameSync" type="primary">异步获取name</van-button>
    <p/>
    <van-button @click="getName" type="primary">同步获取name</van-button>
    <van-radio-group v-model="accidentDealDepart">
      <van-radio :name="accidentDealDepartOptions.codeCode" :key="accidentDealDepartOptions.codeCode" v-for="accidentDealDepartOptions in accidentDealDepartList">
        {{ accidentDealDepartOptions.codeName }}
      </van-radio>
    </van-radio-group>
  </div>
</template>
            <template slot="code"><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"data-options-demo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"get"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>同步获取选项数据<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span>{{</span> auditStatus <span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"getNameSync"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>异步获取name<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"getName"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>同步获取name<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"accidentDealDepart"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span>
        <span class="hljs-attr">:name</span>=<span class="hljs-string">"accidentDealDepartOptions.codeCode"</span>
        <span class="hljs-attr">:key</span>=<span class="hljs-string">"accidentDealDepartOptions.codeCode"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"accidentDealDepartOptions in accidentDealDepartList"</span>&gt;</span>
        <span>{{</span> accidentDealDepartOptions.codeName <span>}}</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> vanRadioGroup <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/radio-group'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/radio-group/style'</span>
<span class="hljs-keyword">import</span> vanRadio <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/radio'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/radio/style'</span>
<span class="hljs-keyword">import</span> vanButton <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/button'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/button/style'</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">accidentDealDepartList</span>: [],
      <span class="hljs-attr">accidentDealDepart</span>: <span class="hljs-string">'01'</span>,
      <span class="hljs-attr">auditStatus</span>: <span class="hljs-literal">null</span>
    }
  },
  created () {
    <span class="hljs-keyword">this</span>.getName()
    <span class="hljs-keyword">var</span> that = <span class="hljs-keyword">this</span>
    <span class="hljs-keyword">this</span>.$dataOptions.getSync(<span class="hljs-string">'AccidentDealDepart'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">data</span>) </span>{
      <span class="hljs-built_in">console</span>.log(data)
      that.accidentDealDepartList = data
    }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'获取数据选项失败'</span>)
    })
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-attr">get</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
      <span class="hljs-keyword">this</span>.auditStatus = <span class="hljs-keyword">this</span>.$dataOptions.get(<span class="hljs-string">'AuditStatus'</span>)
    },
    <span class="hljs-attr">getNameSync</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
      <span class="hljs-keyword">this</span>.$dataOptions.getNameSync(<span class="hljs-string">'AccidentType'</span>, <span class="hljs-string">'01'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">name</span>) </span>{
        <span class="hljs-built_in">console</span>.log(name)
      }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'name获取失败'</span>)
      })
    },
    <span class="hljs-attr">getName</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
      <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$dataOptions.getName(<span class="hljs-string">'HospitalLevel'</span>, <span class="hljs-string">'01'</span>))
    }
  },
  <span class="hljs-attr">components</span>: {
    vanRadio,
    vanRadioGroup,
    vanButton
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span>&gt;</span>
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
</code></pre>

        <template>
          <test :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
          </test>
        </template></template>
          </test>
        </template>
        
        
        
        </div></template>
<style scoped="" lang="scss">
        
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