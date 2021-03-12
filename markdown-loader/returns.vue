<template><div>
        <template>
          <test>
            <template slot="description"><h3>选项数据</h3>
<p>选项数据是一些如：<code>车牌类型</code>，<code>事故责任类型</code> 等选项类型的数据，这类数据由于运营需要无法再前端&quot;写死&quot;，但是如果每次都单独请求后端数据又会导致系统低效及编码繁琐，所以系统在初始化的时候会将这些数据请求并统一管理，开发者只需通过简单的方法即可获取相应的数据。</p>
<h4>异步获取选项列表</h4>
<p>由于选项数据是从服务器请求回来的需要一定的时间，如果数据还没请求回来就进行查询，这是时候肯定是没有数据的，所以查询数据一般采用异步的形式进行获取，如下代码：</p>
<pre><code class="language-js"><span class="hljs-built_in">this</span>.$dataOptions.getSync(<span class="hljs-string">&#x27;AccidentType&#x27;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">data</span>) </span>{
  <span class="hljs-built_in">console</span>.log(data)
}, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;获取数据选项失败&#x27;</span>)
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
<pre><code class="language-js"><span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.$dataOptions.get(<span class="hljs-string">&#x27;AuditStatus&#x27;</span>))
</code></pre>
<h4>异步获取指定数据选项name</h4>
<p>由于选项数据是从服务器请求回来的需要一定的时间，如果数据还没请求回来就进行查询，这是时候肯定是没有数据的，所以查询数据一般采用异步的形式进行获取，如下代码：</p>
<pre><code class="language-js"><span class="hljs-built_in">this</span>.$dataOptions.getNameSync(<span class="hljs-string">&#x27;AccidentType&#x27;</span>, <span class="hljs-string">&#x27;01&#x27;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">name</span>) </span>{
  <span class="hljs-built_in">console</span>.log(name)
}, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;name获取失败&#x27;</span>)
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
<pre><code class="language-js"><span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.$dataOptions.getName(<span class="hljs-string">&#x27;HospitalLevel&#x27;</span>, <span class="hljs-string">&#x27;01&#x27;</span>))
</code></pre>

        <template>
          <test>
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
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;data-options-demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;get&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>同步获取选项数据<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span>{{</span> auditStatus <span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getNameSync&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>异步获取name<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getName&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>同步获取name<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;accidentDealDepart&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span>
        <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;accidentDealDepartOptions.codeCode&quot;</span>
        <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;accidentDealDepartOptions.codeCode&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;accidentDealDepartOptions in accidentDealDepartList&quot;</span>&gt;</span>
        <span>{{</span> accidentDealDepartOptions.codeName <span>}}</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> vanRadioGroup <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant/lib/radio-group&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/lib/radio-group/style&#x27;</span>
<span class="hljs-keyword">import</span> vanRadio <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant/lib/radio&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/lib/radio/style&#x27;</span>
<span class="hljs-keyword">import</span> vanButton <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant/lib/button&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/lib/button/style&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">accidentDealDepartList</span>: [],
      <span class="hljs-attr">accidentDealDepart</span>: <span class="hljs-string">&#x27;01&#x27;</span>,
      <span class="hljs-attr">auditStatus</span>: <span class="hljs-literal">null</span>
    }
  },
  created () {
    <span class="hljs-built_in">this</span>.getName()
    <span class="hljs-keyword">var</span> that = <span class="hljs-built_in">this</span>
    <span class="hljs-built_in">this</span>.$dataOptions.getSync(<span class="hljs-string">&#x27;AccidentDealDepart&#x27;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">data</span>) </span>{
      <span class="hljs-built_in">console</span>.log(data)
      that.accidentDealDepartList = data
    }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;获取数据选项失败&#x27;</span>)
    })
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-attr">get</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
      <span class="hljs-built_in">this</span>.auditStatus = <span class="hljs-built_in">this</span>.$dataOptions.get(<span class="hljs-string">&#x27;AuditStatus&#x27;</span>)
    },
    <span class="hljs-attr">getNameSync</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
      <span class="hljs-built_in">this</span>.$dataOptions.getNameSync(<span class="hljs-string">&#x27;AccidentType&#x27;</span>, <span class="hljs-string">&#x27;01&#x27;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">name</span>) </span>{
        <span class="hljs-built_in">console</span>.log(name)
      }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;name获取失败&#x27;</span>)
      })
    },
    <span class="hljs-attr">getName</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
      <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.$dataOptions.getName(<span class="hljs-string">&#x27;HospitalLevel&#x27;</span>, <span class="hljs-string">&#x27;01&#x27;</span>))
    }
  },
  <span class="hljs-attr">components</span>: {
    vanRadio,
    vanRadioGroup,
    vanButton
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.x-canvas-main</span>{
  <span class="hljs-selector-class">.border</span>{
    <span class="hljs-attribute">overflow</span>: hidden;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-selector-class">.canvas</span>{
      <span class="hljs-attribute">display</span>: block;
    }
    <span class="hljs-selector-class">.image</span>{
      <span class="hljs-attribute">position</span>: absolute;
      <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
      <span class="hljs-attribute">display</span>: block;
      <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
    }
    <span class="hljs-selector-class">.loading</span>{
      <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
      <span class="hljs-attribute">position</span>: absolute;
      <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
      <span class="hljs-attribute">display</span>: block;
      <span class="hljs-attribute">text-align</span>: center;
      <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0.9</span>);
      <span class="hljs-selector-class">.middle</span>{
        <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
        <span class="hljs-attribute">margin-top</span>: -<span class="hljs-number">30px</span>;
        <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
        <span class="hljs-attribute">height</span>: <span class="hljs-number">60px</span>;
        <span class="hljs-attribute">position</span>: absolute;
        <span class="hljs-selector-class">.van-loading</span>{
          <span class="hljs-attribute">position</span>: absolute;
          <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
          <span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">15px</span>;
        }
        <span class="hljs-selector-class">.loading-text</span>{
          <span class="hljs-attribute">position</span>: absolute;
          <span class="hljs-attribute">display</span>: block;
          <span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;
          <span class="hljs-attribute">line-height</span>: <span class="hljs-number">30px</span>;
          <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0px</span>;
          <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
          <span class="hljs-attribute">text-align</span>: center;
          <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
          <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">77</span>, <span class="hljs-number">77</span>, <span class="hljs-number">77</span>);
        }
      }
    }
  }
}
</span></code></pre>

        <template>
          <test>
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
          </test>
        </template></template>
          </test>
        </template></div></template>
<style scoped="scoped" lang="scss">
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