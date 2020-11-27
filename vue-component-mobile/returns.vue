<template><div>
        <template>
          <x-doc-demo-wrap :jsfiddle="{&quot;html&quot;:&quot;\n  &lt;div class=\&quot;color-demo\&quot;&gt;\n    &lt;div class=\&quot;color-block\&quot; v-for=\&quot;color in colors\&quot; :key=\&quot;color\&quot; :class=\&quot;color\&quot;&gt;\n      ${{color}}\n    &lt;/div&gt;\n  &lt;/div&gt;\n&quot;,&quot;script&quot;:&quot;\nexport default {\n  data () {\n    return {\n      colors: [\n        'black',\n        'white',\n        'red',\n        'blue',\n        'orange',\n        'orange-dark',\n        'orange-light',\n        'green',\n        'gray',\n        'gray-light',\n        'gray-darker',\n        'gray-dark',\n        'text-color',\n        'border-color',\n        'active-color',\n        'background-color',\n        'background-color-light'\n      ]\n    }\n  }\n}\n&quot;,&quot;style&quot;:null,&quot;description&quot;:&quot;\n### 颜色\n架构在全局已经注入了一些颜色的sass变量，你可以直接在组件中使用。\n&quot;,&quot;sourceCode&quot;:&quot;&lt;template&gt;\n  &lt;div class=\&quot;color-demo\&quot;&gt;\n    &lt;div class=\&quot;color-block\&quot; v-for=\&quot;color in colors\&quot; :key=\&quot;color\&quot; :class=\&quot;color\&quot;&gt;\n      ${{color}}\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nexport default {\n  data () {\n    return {\n      colors: [\n        'black',\n        'white',\n        'red',\n        'blue',\n        'orange',\n        'orange-dark',\n        'orange-light',\n        'green',\n        'gray',\n        'gray-light',\n        'gray-darker',\n        'gray-dark',\n        'text-color',\n        'border-color',\n        'active-color',\n        'background-color',\n        'background-color-light'\n      ]\n    }\n  }\n}\n&lt;/script&gt;\n&lt;style scoped lang=\&quot;scss\&quot;&gt;\n.color-demo{\n  overflow: hidden;\n  .color-block{\n    text-align: center;\n    width: 150px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 4px;\n    float: left;\n    margin: 10px;\n    border: 1px solid $gray-light;\n    &amp;.black{\n      background: $black;\n      color: $white;\n    }\n    &amp;.white{\n      background: $white;\n    }\n    &amp;.red{\n      background: $red;\n    }\n    &amp;.blue{\n      background: $blue;\n    }\n    &amp;.orange{\n      background: $orange;\n    }\n    &amp;.orange-dark{\n      background: $orange-dark;\n    }\n    &amp;.orange-light{\n      background: $orange-light;\n    }\n    &amp;.green{\n      background: $green;\n    }\n    &amp;.gray{\n      background: $gray;\n    }\n    &amp;.gray-light{\n      background: $gray-light;\n    }\n    &amp;.gray-darker{\n      background: $gray-darker;\n    }\n    &amp;.gray-dark{\n      background: $gray-dark;\n    }\n    &amp;.text-color{\n      background: $text-color;\n      color: $white;\n    }\n    &amp;.border-color{\n      background: $border-color;\n    }\n    &amp;.active-color{\n      background: $active-color;\n    }\n    &amp;.background-color{\n      background: $background-color;\n      width: 200px;\n    }\n    &amp;.background-color-light{\n      background: $background-color-light;\n      width: 200px;\n    }\n  }\n}\n&lt;/style&gt;\n&quot;}" has-description="true" has-template="true" has-code="true">
            <template slot="description"><h3>颜色</h3>
<p>架构在全局已经注入了一些颜色的sass变量，你可以直接在组件中使用。</p>

        <template>
          <x-doc-demo-wrap :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
          </x-doc-demo-wrap>
        </template></template>
            <template slot="component">
  <div class="color-demo">
    <div class="color-block" v-for="color in colors" :key="color" :class="color">
      ${{color}}
    </div>
  </div>
</template>
            <template slot="code"><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-demo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-block"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"color in colors"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"color"</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">"color"</span>&gt;</span>
      $<span>{{</span>color<span>}}</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">colors</span>: [
        <span class="hljs-string">'black'</span>,
        <span class="hljs-string">'white'</span>,
        <span class="hljs-string">'red'</span>,
        <span class="hljs-string">'blue'</span>,
        <span class="hljs-string">'orange'</span>,
        <span class="hljs-string">'orange-dark'</span>,
        <span class="hljs-string">'orange-light'</span>,
        <span class="hljs-string">'green'</span>,
        <span class="hljs-string">'gray'</span>,
        <span class="hljs-string">'gray-light'</span>,
        <span class="hljs-string">'gray-darker'</span>,
        <span class="hljs-string">'gray-dark'</span>,
        <span class="hljs-string">'text-color'</span>,
        <span class="hljs-string">'border-color'</span>,
        <span class="hljs-string">'active-color'</span>,
        <span class="hljs-string">'background-color'</span>,
        <span class="hljs-string">'background-color-light'</span>
      ]
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span>&gt;</span>
.color-demo{
  overflow: hidden;
  .color-block{
    text-align: center;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    float: left;
    margin: 10px;
    border: 1px solid $gray-light;
    &amp;.black{
      background: $black;
      color: $white;
    }
    &amp;.white{
      background: $white;
    }
    &amp;.red{
      background: $red;
    }
    &amp;.blue{
      background: $blue;
    }
    &amp;.orange{
      background: $orange;
    }
    &amp;.orange-dark{
      background: $orange-dark;
    }
    &amp;.orange-light{
      background: $orange-light;
    }
    &amp;.green{
      background: $green;
    }
    &amp;.gray{
      background: $gray;
    }
    &amp;.gray-light{
      background: $gray-light;
    }
    &amp;.gray-darker{
      background: $gray-darker;
    }
    &amp;.gray-dark{
      background: $gray-dark;
    }
    &amp;.text-color{
      background: $text-color;
      color: $white;
    }
    &amp;.border-color{
      background: $border-color;
    }
    &amp;.active-color{
      background: $active-color;
    }
    &amp;.background-color{
      background: $background-color;
      width: 200px;
    }
    &amp;.background-color-light{
      background: $background-color-light;
      width: 200px;
    }
  }
}
<span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>

        <template>
          <x-doc-demo-wrap :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
          </x-doc-demo-wrap>
        </template></template>
          </x-doc-demo-wrap>
        </template>
        
        
        
        </div></template>
<style scoped="" lang="scss">
        
.color-demo{
  overflow: hidden;
  .color-block{
    text-align: center;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    float: left;
    margin: 10px;
    border: 1px solid $gray-light;
    &.black{
      background: $black;
      color: $white;
    }
    &.white{
      background: $white;
    }
    &.red{
      background: $red;
    }
    &.blue{
      background: $blue;
    }
    &.orange{
      background: $orange;
    }
    &.orange-dark{
      background: $orange-dark;
    }
    &.orange-light{
      background: $orange-light;
    }
    &.green{
      background: $green;
    }
    &.gray{
      background: $gray;
    }
    &.gray-light{
      background: $gray-light;
    }
    &.gray-darker{
      background: $gray-darker;
    }
    &.gray-dark{
      background: $gray-dark;
    }
    &.text-color{
      background: $text-color;
      color: $white;
    }
    &.border-color{
      background: $border-color;
    }
    &.active-color{
      background: $active-color;
    }
    &.background-color{
      background: $background-color;
      width: 200px;
    }
    &.background-color-light{
      background: $background-color-light;
      width: 200px;
    }
  }
}

        </style>
<script>
        
export default {
  data () {
    return {
      colors: [
        'black',
        'white',
        'red',
        'blue',
        'orange',
        'orange-dark',
        'orange-light',
        'green',
        'gray',
        'gray-light',
        'gray-darker',
        'gray-dark',
        'text-color',
        'border-color',
        'active-color',
        'background-color',
        'background-color-light'
      ]
    }
  }
}

        </script>n> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-keyword">get</span> () {
      Toast(<span class="hljs-keyword">this</span>.$store.state.common_test)
    },
    getter () {
      Toast(<span class="hljs-keyword">this</span>.$store.getters.common_testLevel)
    },
    <span class="hljs-keyword">set</span> () {
      <span class="hljs-keyword">this</span>.$store.commit(<span class="hljs-string">'common_test'</span>, <span class="hljs-number">2</span>)
      Toast.success(<span class="hljs-string">'设置成功'</span>)
    },
    increment () {
      <span class="hljs-keyword">this</span>.$store.commit(<span class="hljs-string">'common_testIncrement'</span>, <span class="hljs-number">3</span>)
      Toast.success(<span class="hljs-string">'设置成功'</span>)
    },
    incrementAsync () {
      <span class="hljs-keyword">this</span>.$store.dispatch(<span class="hljs-string">'common_test_incrementAsync'</span>, <span class="hljs-number">5</span>)
      Toast.success(<span class="hljs-string">'3秒后生效'</span>)
    }
  },
  <span class="hljs-attr">components</span>: {
    vanButton
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span>&gt;</span>
.vuex-demo{
  .btn{
    margin-right: 10px;
  }
}
<span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>

        <template>
          <x-doc-demo-wrap :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
          </x-doc-demo-wrap>
        </template></template>
          </x-doc-demo-wrap>
        </template>
        
        
        
        </div></template>
<style scoped="" lang="scss">
        
.vuex-demo{
  .btn{
    margin-right: 10px;
  }
}

        </style>
<script>
        
import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  methods: {
    get () {
      Toast(this.$store.state.common_test)
    },
    getter () {
      Toast(this.$store.getters.common_testLevel)
    },
    set () {
      this.$store.commit('common_test', 2)
      Toast.success('设置成功')
    },
    increment () {
      this.$store.commit('common_testIncrement', 3)
      Toast.success('设置成功')
    },
    incrementAsync () {
      this.$store.dispatch('common_test_incrementAsync', 5)
      Toast.success('3秒后生效')
    }
  },
  components: {
    vanButton
  }
}

        </script>n class="hljs-keyword">var</span> uuid = []
    radix = radix || chars.length
    <span class="hljs-keyword">if</span> (len) {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; len; i++) {
        uuid[i] = chars[<span class="hljs-number">0</span> | <span class="hljs-built_in">Math</span>.random() * radix]
      }
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-keyword">var</span> r = <span class="hljs-literal">null</span>
      uuid[<span class="hljs-number">8</span>] = uuid[<span class="hljs-number">13</span>] = uuid[<span class="hljs-number">18</span>] = uuid[<span class="hljs-number">23</span>] = <span class="hljs-string">'-'</span>
      uuid[<span class="hljs-number">14</span>] = <span class="hljs-string">'4'</span>
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> j = <span class="hljs-number">0</span>; j &lt; <span class="hljs-number">36</span>; j++) {
        <span class="hljs-keyword">if</span> (!uuid[j]) {
          r = <span class="hljs-number">0</span> | <span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">16</span>
          uuid[j] = chars[(j === <span class="hljs-number">19</span>) ? (r &amp; <span class="hljs-number">0x3</span>) | <span class="hljs-number">0x8</span> : r]
        }
      }
    }
    <span class="hljs-keyword">return</span> uuid.join(<span class="hljs-string">''</span>)
  }
}
</code></pre>
<h3>appCallJsFunction 目录是js开放给app的函数集合</h3>
<h4><code>./appCallJsFunction/index.js</code> 内容：</h4>
<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">test</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">parameter, callFun</span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'app调用了js的方法'</span> + parameter)
    <span class="hljs-keyword">var</span> jsParameter = {
      <span class="hljs-string">'name'</span>: <span class="hljs-string">'来至js的参数'</span>
    }
    callFun(<span class="hljs-string">'success'</span>, jsParameter)
  }
}
</code></pre>
<p>集成以上的代码，并配合app壳即可像以下的方式来调用app的函数。</p>

        <template>
          <x-doc-demo-wrap :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
          </x-doc-demo-wrap>
        </template></template>
            <template slot="component">
  <div class="app-bridge-demo">
    <van-button class="btn" @click="test" plain="" type="primary">获取数据</van-button>
    <template v-html="log"/>
  </div>
</template>
            <template slot="code"><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"app-bridge-demo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"test"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>获取数据<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">"log"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> vanButton <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/button'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/button/style'</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">log</span>: <span class="hljs-string">''</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-attr">test</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"/>) </span>{
      <span class="hljs-keyword">this</span>.$appBridge.jsCallApp(<span class="hljs-string">'appFuncttion'</span>, <span class="hljs-string">'js传递给app的参数'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">parameter</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'app成功回调'</span> + parameter)
      }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">parameter</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'app成功回调'</span> + parameter)
      })
    }
  },
  <span class="hljs-attr">components</span>: {
    vanButton
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span>&gt;</span>
.local-storage-demo{
  .btn{
    margin-right: 10px;
  }
}
<span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>

        <template>
          <x-doc-demo-wrap :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
          </x-doc-demo-wrap>
        </template></template>
          </x-doc-demo-wrap>
        </template>
        
        
        
        </div></template>
<style scoped="" lang="scss">
        
.local-storage-demo{
  .btn{
    margin-right: 10px;
  }
}

        </style>
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