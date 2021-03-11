<template>
  <div>
    <template>
          <test :jsfiddle="{&quot;html&quot;:&quot;\n  &lt;div class=\&quot;vuex-demo\&quot;&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;get\&quot; type=\&quot;primary\&quot;&gt;获取数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;getter\&quot; type=\&quot;primary\&quot;&gt;获取数据等级&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;set\&quot; type=\&quot;primary\&quot;&gt;设置数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;increment\&quot; type=\&quot;primary\&quot;&gt;递增数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;incrementAsync\&quot; type=\&quot;primary\&quot;&gt;Action异步递增数据&lt;/van-button&gt;\n  &lt;/div&gt;\n&quot;,&quot;script&quot;:&quot;\nimport Toast from 'vant/lib/toast'\nimport 'vant/lib/toast/style'\nimport vanButton from 'vant/lib/button'\nimport 'vant/lib/button/style'\nexport default {\n  methods: {\n    get () 
{\n      Toast(this.$store.state.common_test)\n    },\n    getter () {\n      Toast(this.$store.getters.common_testLevel)\n  
  },\n    set () {\n      this.$store.commit('common_test', 2)\n      Toast.success('设置成功')\n    },\n    increment () {\n      this.$store.commit('common_testIncrement', 3)\n      Toast.success('设置成功')\n    },\n    incrementAsync () {\n      
this.$store.dispatch('common_test_incrementAsync', 5)\n      Toast.success('3秒后生效')\n    }\n  },\n  components: {\n    vanButton\n  }\n}\n&quot;,&quot;style&quot;:null,&quot;description&quot;:&quot;\n### 全局变量\n项目的全局变量管理使用的是`Vuex`,具体用法请看:[Vuex官网](https://vuex.vuejs.org/zh/)\n#### 2.存放位置\n##### src/store/state.js : 定义变量\n##### src/store/getters.js : 定义getters\n##### src/store/mutations.js : 定义mutations\n##### src/store/actions.js : 定义actions\n#### 1.命名 
规范\n全局变量应该细分为 `全局` 和 `局部` 两类。\n##### 1.1.全局\n全局都可能用到的变量，比如当前登录用户的信息。此类变量的命 
名需以`common_`开头，如：`common_userName`。对应的`actions`也需要用这种方式密码，如：`common_userNameIncrement`，对应的`getters`、`mutations`同样如此。\n&gt;注意：下划线只用于分割前缀和变量名，变量名部分仍然使用小驼峰命名。\n##### 1.2.局部\n局部共享 
的变量，如两个或者几个页面间用于传递数据的变量，这种变量应当少用。此类变量的命名需以变量起源页面的路由名为开头，如：`login_valueName`。这个变量是在`login`这个页面中首次赋值的。如果出现可能多个页面首次赋值的情况需要以多个页面的路由名为开头，并且以下划
线分割。如：`login_register_valueName`。\n&quot;,&quot;sourceCode&quot;:&quot;&lt;template&gt;\n  &lt;div class=\&quot;vuex-demo\&quot;&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;get\&quot; type=\&quot;primary\&quot;&gt;获取数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;getter\&quot; type=\&quot;primary\&quot;&gt;获取数
据等级&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;set\&quot; type=\&quot;primary\&quot;&gt;设置数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;increment\&quot; type=\&quot;primary\&quot;&gt;递增数据&lt;/van-button&gt;\n    &lt;van-button class=\&quot;btn\&quot; @click=\&quot;incrementAsync\&quot; type=\&quot;primary\&quot;&gt;Action异步递增数据&lt;/van-button&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nimport Toast from 'vant/lib/toast'\nimport 'vant/lib/toast/style'\nimport vanButton from 'vant/lib/button'\nimport 'vant/lib/button/style'\nexport default {\n  methods: {\n    get () {\n      Toast(this.$store.state.common_test)\n    },\n    getter () {\n      Toast(this.$store.getters.common_testLevel)\n    },\n    set () {\n      this.$store.commit('common_test', 2)\n      Toast.success('设置成功')\n    },\n    increment () {\n      this.$store.commit('common_testIncrement', 3)\n      Toast.success('设置成 
功')\n    },\n    incrementAsync () {\n      this.$store.dispatch('common_test_incrementAsync', 5)\n      Toast.success('3秒 
后生效')\n    }\n  },\n  components: {\n    vanButton\n  }\n}\n&lt;/script&gt;\n&lt;style scoped lang=\&quot;scss\&quot;&gt;\n.vuex-demo{\n  .btn{\n    margin-right: 10px;\n  }\n}\n&lt;/style&gt;\n&quot;}" has-description="true" has-template="true" has-code="true">
            <template slot="description"><h3>全局变量</h3>
<p>项目的全局变量管理使用的是<code>Vuex</code>,具体用法请看:<a href="https://vuex.vuejs.org/zh/">Vuex官网</a></p>
<h4>2.存放位置</h4>
<h5>src/store/state.js : 定义变量</h5>
<h5>src/store/getters.js : 定义getters</h5>
<h5>src/store/mutations.js : 定义mutations</h5>
<h5>src/store/actions.js : 定义actions</h5>
<h4>1.命名规范</h4>
<p>全局变量应该细分为 <code>全局</code> 和 <code>局部</code> 两类。</p>
<h5>1.1.全局</h5>
<p>全局都可能用到的变量，比如当前登录用户的信息。此类变量的命名需以<code>common_</code>开头，如：<code>common_userName</code>。对应的<code>actions</code>也需要用这种方式密码，如：<code>common_userNameIncrement</code>，对应的<code>getters</code>、<code>mutations</code>同样如此。</p>
<blockquote>
<p>注意：下划线只用于分割前缀和变量名，变量名部分仍然使用小驼峰命名。</p>
</blockquote>
<h5>1.2.局部</h5>
<p>局部共享的变量，如两个或者几个页面间用于传递数据的变量，这种变量应当少用。此类变量的命名需以变量起源页面的路由名为开头，如
：<code>login_valueName</code>。这个变量是在<code>login</code>这个页面中首次赋值的。如果出现可能多个页面首次赋值的情况需要以 
多个页面的路由名为开头，并且以下划线分割。如：<code>login_register_valueName</code>。</p>

        <template>
          <test :jsfiddle="{&quot;html&quot;:&quot;&quot;,&quot;script&quot;:&quot;&quot;,&quot;style&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&quot;}" has-description="false" has-template="false" has-code="false">
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
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
            <template slot="description"/>
            <template slot="component"/>
            <template slot="code"/>
          </test>
        </template>
      </template>
          </test>
        </template>



  </div>
</template>
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
</script>