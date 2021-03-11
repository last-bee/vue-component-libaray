<template>
          <test :jsfiddle="{&quot;html&quot;:&quot;\n  &lt;div class=\&quot;vuex-demo\&quot;&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;get\&quot; type=\&quot;primary\&quot;&gt;获取数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;getter\&quot; type=\&quot;primary\&quot;&gt;获取数据等级&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;set\&quot; type=\&quot;primary\&quot;&gt;设置数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;increment\&quot; type=\&quot;primary\&quot;&gt;递增数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;incrementAsync\&quot; type=\&quot;primary\&quot;&gt;Action异步递增数据&lt;/van-button&gt;\n  &lt;/div&gt;\n&quot;,&quot;script&quot;:&quot;\nimport Toast from 'vant/lib/toast'\nimport 'vant/lib/toast/style'\nimport vanButton from 'vant/lib/button'\nimport 'vant/lib/button/style'\nexport default {\n  methods: {\n    get () {\n      Toast('获取数据')\n      Toast(this.$store.state.common_test)\n    },\n    getter () {\n      Toast(this.$store.getters.common_testLevel)\n    },\n    set () {\n      this.$store.commit('common_test', 2)\n      Toast.success('设置成功')\n    
},\n    increment () {\n      this.$store.commit('common_testIncrement', 3)\n      Toast.success('设置成功')\n    },\n    incrementAsync () {\n      this.$store.dispatch('common_test_incrementAsync', 5)\n      Toast.success('3秒后生效')\n    }\n  },\n  components: {\n    vanButton\n  }\n}\n&quot;,&quot;style&quot;:null,&quot;description&quot;:&quot;\n#### 基本\n最简单的用法。\n&quot;,&quot;sourceCode&quot;:&quot;&lt;template&gt;\n  &lt;div class=\&quot;vuex-demo\&quot;&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;get\&quot; type=\&quot;primary\&quot;&gt;获取数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;getter\&quot; type=\&quot;primary\&quot;&gt;获取数据等级&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;set\&quot; type=\&quot;primary\&quot;&gt;设置数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;increment\&quot; type=\&quot;primary\&quot;&gt;递
增数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;incrementAsync\&quot; type=\&quot;primary\&quot;&gt;Action异步递增数据&lt;/van-button&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nimport Toast from 'vant/lib/toast'\nimport 'vant/lib/toast/style'\nimport vanButton from 'vant/lib/button'\nimport 'vant/lib/button/style'\nexport default {\n  methods: {\n    get () {\n     
 Toast('获取数据')\n      Toast(this.$store.state.common_test)\n    },\n    getter () {\n      Toast(this.$store.getters.common_testLevel)\n    },\n    set () {\n      this.$store.commit('common_test', 2)\n      Toast.success('设置成功')\n    },\n    increment () {\n      this.$store.commit('common_testIncrement', 3)\n      Toast.success('设置成功')\n    },\n    incrementAsync () {\n      this.$store.dispatch('common_test_incrementAsync', 5)\n      Toast.success('3秒后生效')\n    }\n  },\n  components: {\n    vanButton\n  }\n}\n&lt;/script&gt;\n&lt;style scoped lang=\&quot;scss\&quot;&gt;\n.vuex-demo{\n  .btn{\n    margin-right: 10px;\n  }\n}\n&lt;/style&gt;\n&quot;}" has-description="true" has-template="true" has-code="true">
            <template slot="description"><h4>基本</h4>
<p>最简单的用法。</p>

        <template>
          <test :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"></template>
            <template slot="component"></template>
            <template slot="code"></template>
          </test>
        </template></template>
            <template slot="component">
  <div class="vuex-demo">
    <van-button class="btn" @click="get" type="primary">获取数据</van-button>
    <van-button class="btn" @click="getter" type="primary">获取数据等级</van-button>
    <van-button class="btn" @click="set" type="primary">设置数据</van-button>
    <van-button class="btn" @click="increment" type="primary">递增数据</van-button>
    <van-button class="btn" @click="incrementAsync" type="primary">Action异步递增数据</van-button>
  </div>
</template>
            <template slot="code"><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vuex-demo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"get"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>获取数据<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"getter"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>获取数据等级<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>       
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"set"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>设置数据<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"increment"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>递增数据<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>        
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"incrementAsync"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>Action异步递增数据<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> Toast <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/toast'</span>    
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/toast/style'</span>
<span class="hljs-keyword">import</span> vanButton <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/button'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/button/style'</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-keyword">get</span> () {
      Toast(<span class="hljs-string">'获取数据'</span>)
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
          <test :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"></template>
            <template slot="component"></template>
            <template slot="code"></template>
          </test>
        </template></template>
          </test>
        </template>
        <script>

import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  methods: {
    get () {
      Toast('获取数据')
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

        </script>

        <style scoped lang="scss">

.vuex-demo{
  .btn{
    margin-right: 10px;
  }
}

        </style>