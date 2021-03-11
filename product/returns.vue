<template><div><h3>xForm</h3>
<p><code>xForm</code>是一个用于记录并恢复表单数据的组件。</p>
<h4>用法</h4>
<p>将<code>Vant</code>的表单组件写在<code>xForm</code>内，并且配置好<code>x-form</code>属性，如下所示：</p>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">x-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"xForm"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"stepper"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"stepper"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-stepper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">x-form</span>&gt;</span>
</code></pre>
<p>当你想恢复上一次的数据时，你只需要执行<code>xForm</code>的<code>getBackup</code>方法，来获取缓存的数据，该方法会返回类似如下的数据结构：</p>
<pre><code class="language-js">{
  <span class="hljs-attr">name</span>: <span class="hljs-string">'stepper'</span>,
  <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>
}
</code></pre>
<p>再将这些数据设置给对应的表单绑定的变量即可。</p>
<h4>注意</h4>
<p>当表单的数据是<code>Date</code>时，你需要额外给表单配置属性<code>x-form-type=&quot;date&quot;</code>,如下所示：</p>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">x-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"xForm"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"birthday"</span> <span class="hljs-attr">x-form-type</span>=<span class="hljs-string">"date"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"birthday"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-datetime-picker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">x-form</span>&gt;</span>
</code></pre>

        <template>
          <x-doc-demo-wrap :jsfiddle="{&quot;html&quot;:&quot;\n  &lt;div&gt;\n    &lt;x-form ref=\&quot;xForm\&quot;&gt;\n      &lt;van-cell-group&gt;\n        &lt;van-stepper x-form=\&quot;stepper\&quot; v-model=\&quot;stepper\&quot;/&gt;\n        &lt;van-switch x-form=\&quot;switchVal\&quot; v-model=\&quot;switchVal\&quot;/&gt;\n        &lt;van-slider x-form=\&quot;slider\&quot; v-model=\&quot;slider\&quot;/&gt;\n        &lt;van-rate x-form=\&quot;score\&quot; v-model=\&quot;score\&quot;/&gt;\n        &lt;van-radio-group x-form=\&quot;gender\&quot; v-model=\&quot;gender\&quot;&gt;\n          &lt;van-radio name=\&quot;1\&quot;&gt;男&lt;/van-radio&gt;\n          &lt;van-radio name=\&quot;2\&quot;&gt;女&lt;/van-radio&gt;\n        &lt;/van-radio-group&gt;\n        &lt;van-datetime-picker confirm-button-text=\&quot;确认\&quot; cancel-button-text=\&quot;取消\&quot; x-form=\&quot;birthday\&quot; x-form-type=\&quot;date\&quot; v-model=\&quot;birthday\&quot; type=\&quot;date\&quot;/&gt;\n        &lt;van-checkbox x-form=\&quot;married\&quot; v-model=\&quot;married\&quot;&gt;已婚&lt;/van-checkbox&gt;\n        &lt;van-field x-form=\&quot;userName\&quot; v-model=\&quot;userName\&quot; placeholder=\&quot;请输入用户名\&quot;/&gt;\n        &lt;van-checkbox-group x-form=\&quot;hobby\&quot; v-model=\&quot;hobby\&quot;&gt;\n          &lt;van-checkbox v-for=\&quot;(item, index) in list\&quot; :key=\&quot;item\&quot; :name=\&quot;item\&quot;&gt; {{ item }} &lt;/van-checkbox&gt;\n        &lt;/van-checkbox-group&gt;\n      &lt;/van-cell-group&gt;\n    &lt;/x-form&gt;\n    &lt;van-button @click=\&quot;restore\&quot; type=\&quot;primary\&quot;&gt;恢复数据&lt;/van-button&gt;\n  &lt;/div&gt;\n&quot;,&quot;script&quot;:&quot;\nimport vanButton from 'vant/lib/button'\nimport 'vant/lib/button/style'\nimport vanStepper from 'vant/lib/stepper'\nimport 'vant/lib/stepper/style'\nimport vanSwitch from 'vant/lib/switch'\nimport 'vant/lib/switch/style'\nimport vanSlider from 'vant/lib/slider'\nimport 'vant/lib/slider/style'\nimport vanRate from 'vant/lib/rate'\nimport 'vant/lib/rate/style'\nimport vanRadioGroup from 'vant/lib/radio-group'\nimport 'vant/lib/radio-group/style'\nimport vanRadio from 'vant/lib/radio'\nimport 'vant/lib/radio/style'\nimport vanDatetimePicker from 'vant/lib/datetime-picker'\nimport 'vant/lib/datetime-picker/style'\nimport vanCheckbox from 'vant/lib/checkbox'\nimport 'vant/lib/checkbox/style'\nimport vanField from 'vant/lib/field'\nimport 'vant/lib/field/style'\nimport vanCheckboxGroup from 'vant/lib/checkbox-group'\nimport 'vant/lib/checkbox-group/style'\nimport vanCellGroup from 'vant/lib/cell-group'\nimport 'vant/lib/cell-group/style'\nexport default {\n  data () {\n    return {\n      switchVal: false,\n      stepper: 1,\n      slider: 40,\n      score: 3,\n      gender: '1',\n      birthday: new Date(),\n      married: true,\n      userName: 'hhm1999',\n      list: ['足球', '健身', '游泳'],\n      hobby: ['足球', '健身']\n    }\n  },\n  methods: {\n    restore () {\n      var backup = this.$refs.xForm.getBackup()\n      if (backup &amp;&amp; backup.length &gt; 0) {\n        var that = this\n        for (var i = 0; i &lt; backup.length; i++) {\n          this[backup[i].name] = backup[i].value\n        }\n      }\n    }\n  },\n  components: {\n    vanButton,\n    vanStepper,\n    vanSwitch,\n    vanSlider,\n    vanRate,\n    vanRadioGroup,\n    vanDatetimePicker,\n    vanCheckbox,\n    vanField,\n    vanCheckboxGroup,\n    vanCellGroup,\n    vanRadio\n  }\n}\n&quot;,&quot;style&quot;:null,&quot;description&quot;:&quot;&quot;,&quot;sourceCode&quot;:&quot;&lt;template&gt;\n  &lt;div&gt;\n    &lt;x-form ref=\&quot;xForm\&quot;&gt;\n      &lt;van-cell-group&gt;\n        &lt;van-stepper x-form=\&quot;stepper\&quot; v-model=\&quot;stepper\&quot;&gt;&lt;/van-stepper&gt;\n        &lt;van-switch x-form=\&quot;switchVal\&quot; v-model=\&quot;switchVal\&quot;&gt;&lt;/van-switch&gt;\n        &lt;van-slider x-form=\&quot;slider\&quot; v-model=\&quot;slider\&quot;/&gt;\n        &lt;van-rate x-form=\&quot;score\&quot; v-model=\&quot;score\&quot; /&gt;\n        &lt;van-radio-group x-form=\&quot;gender\&quot; v-model=\&quot;gender\&quot;&gt;\n          &lt;van-radio name=\&quot;1\&quot;&gt;男&lt;/van-radio&gt;\n          &lt;van-radio name=\&quot;2\&quot;&gt;女&lt;/van-radio&gt;\n        &lt;/van-radio-group&gt;\n        &lt;van-datetime-picker confirm-button-text=\&quot;确认\&quot; cancel-button-text=\&quot;取消\&quot; x-form=\&quot;birthday\&quot; x-form-type=\&quot;date\&quot; v-model=\&quot;birthday\&quot; type=\&quot;date\&quot;&gt;&lt;/van-datetime-picker&gt;\n        &lt;van-checkbox x-form=\&quot;married\&quot; v-model=\&quot;married\&quot;&gt;已婚&lt;/van-checkbox&gt;\n        &lt;van-field x-form=\&quot;userName\&quot; v-model=\&quot;userName\&quot; placeholder=\&quot;请输入用户名\&quot; /&gt;\n        &lt;van-checkbox-group x-form=\&quot;hobby\&quot; v-model=\&quot;hobby\&quot;&gt;\n          &lt;van-checkbox v-for=\&quot;(item, index) in list\&quot; :key=\&quot;item\&quot; :name=\&quot;item\&quot;&gt; {{ item }} &lt;/van-checkbox&gt;\n        &lt;/van-checkbox-group&gt;\n      &lt;/van-cell-group&gt;\n    &lt;/x-form&gt;\n    &lt;van-button @click=\&quot;restore\&quot; type=\&quot;primary\&quot;&gt;恢复数据&lt;/van-button&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nimport vanButton from 'vant/lib/button'\nimport 'vant/lib/button/style'\nimport vanStepper from 'vant/lib/stepper'\nimport 'vant/lib/stepper/style'\nimport vanSwitch from 'vant/lib/switch'\nimport 'vant/lib/switch/style'\nimport vanSlider from 'vant/lib/slider'\nimport 'vant/lib/slider/style'\nimport vanRate from 'vant/lib/rate'\nimport 'vant/lib/rate/style'\nimport vanRadioGroup from 'vant/lib/radio-group'\nimport 'vant/lib/radio-group/style'\nimport vanRadio from 'vant/lib/radio'\nimport 'vant/lib/radio/style'\nimport vanDatetimePicker from 'vant/lib/datetime-picker'\nimport 'vant/lib/datetime-picker/style'\nimport vanCheckbox from 'vant/lib/checkbox'\nimport 'vant/lib/checkbox/style'\nimport vanField from 'vant/lib/field'\nimport 'vant/lib/field/style'\nimport vanCheckboxGroup from 'vant/lib/checkbox-group'\nimport 'vant/lib/checkbox-group/style'\nimport vanCellGroup from 'vant/lib/cell-group'\nimport 'vant/lib/cell-group/style'\nexport default {\n  data () {\n    return {\n      switchVal: false,\n      stepper: 1,\n      slider: 40,\n      score: 3,\n      gender: '1',\n      birthday: new Date(),\n      married: true,\n      userName: 'hhm1999',\n      list: ['足球', '健身', '游泳'],\n      hobby: ['足球', '健身']\n    }\n  },\n  methods: {\n    restore () {\n      var backup = this.$refs.xForm.getBackup()\n      if (backup &amp;&amp; backup.length &gt; 0) {\n        var that = this\n        for (var i = 0; i &lt; backup.length; i++) {\n          this[backup[i].name] = backup[i].value\n        }\n      }\n    }\n  },\n  components: {\n    vanButton,\n    vanStepper,\n    vanSwitch,\n    vanSlider,\n    vanRate,\n    vanRadioGroup,\n    vanDatetimePicker,\n    vanCheckbox,\n    vanField,\n    vanCheckboxGroup,\n    vanCellGroup,\n    vanRadio\n  }\n}\n&lt;/script&gt;\n&quot;}" has-description="false" has-template="true" has-code="true">
            <template slot="description"/>
            <template slot="component">
  <div>
    <x-form ref="xForm">
      <van-cell-group>
        <van-stepper x-form="stepper" v-model="stepper"/>
        <van-switch x-form="switchVal" v-model="switchVal"/>
        <van-slider x-form="slider" v-model="slider"/>
        <van-rate x-form="score" v-model="score"/>
        <van-radio-group x-form="gender" v-model="gender">
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
        <van-datetime-picker confirm-button-text="确认" cancel-button-text="取消" x-form="birthday" x-form-type="date" v-model="birthday" type="date"/>
        <van-checkbox x-form="married" v-model="married">已婚</van-checkbox>
        <van-field x-form="userName" v-model="userName" placeholder="请输入用户名"/>
        <van-checkbox-group x-form="hobby" v-model="hobby">
          <van-checkbox v-for="(item, index) in list" :key="item" :name="item"> {{ item }} </van-checkbox>
        </van-checkbox-group>
      </van-cell-group>
    </x-form>
    <van-button @click="restore" type="primary">恢复数据</van-button>
  </div>
</template>
            <template slot="code"><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">x-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"xForm"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"stepper"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"stepper"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-stepper</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"switchVal"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"switchVal"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-switch</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"slider"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"slider"</span>/&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"score"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"score"</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"gender"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"gender"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"1"</span>&gt;</span>男<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"2"</span>&gt;</span>女<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span> <span class="hljs-attr">confirm-button-text</span>=<span class="hljs-string">"确认"</span> <span class="hljs-attr">cancel-button-text</span>=<span class="hljs-string">"取消"</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"birthday"</span> <span class="hljs-attr">x-form-type</span>=<span class="hljs-string">"date"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"birthday"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-datetime-picker</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"married"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"married"</span>&gt;</span>已婚<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"userName"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"userName"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入用户名"</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">x-form</span>=<span class="hljs-string">"hobby"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"hobby"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(item, index) in list"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">"item"</span>&gt;</span> <span>{{</span> item <span>}}</span> <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">x-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"restore"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>恢复数据<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> vanButton <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/button'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/button/style'</span>
<span class="hljs-keyword">import</span> vanStepper <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/stepper'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/stepper/style'</span>
<span class="hljs-keyword">import</span> vanSwitch <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/switch'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/switch/style'</span>
<span class="hljs-keyword">import</span> vanSlider <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/slider'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/slider/style'</span>
<span class="hljs-keyword">import</span> vanRate <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/rate'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/rate/style'</span>
<span class="hljs-keyword">import</span> vanRadioGroup <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/radio-group'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/radio-group/style'</span>
<span class="hljs-keyword">import</span> vanRadio <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/radio'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/radio/style'</span>
<span class="hljs-keyword">import</span> vanDatetimePicker <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/datetime-picker'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/datetime-picker/style'</span>
<span class="hljs-keyword">import</span> vanCheckbox <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/checkbox'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/checkbox/style'</span>
<span class="hljs-keyword">import</span> vanField <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/field'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/field/style'</span>
<span class="hljs-keyword">import</span> vanCheckboxGroup <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/checkbox-group'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/checkbox-group/style'</span>
<span class="hljs-keyword">import</span> vanCellGroup <span class="hljs-keyword">from</span> <span class="hljs-string">'vant/lib/cell-group'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'vant/lib/cell-group/style'</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">switchVal</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">stepper</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">slider</span>: <span class="hljs-number">40</span>,
      <span class="hljs-attr">score</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">gender</span>: <span class="hljs-string">'1'</span>,
      <span class="hljs-attr">birthday</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),
      <span class="hljs-attr">married</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">userName</span>: <span class="hljs-string">'hhm1999'</span>,
      <span class="hljs-attr">list</span>: [<span class="hljs-string">'足球'</span>, <span class="hljs-string">'健身'</span>, <span class="hljs-string">'游泳'</span>],
      <span class="hljs-attr">hobby</span>: [<span class="hljs-string">'足球'</span>, <span class="hljs-string">'健身'</span>]
    }
  },
  <span class="hljs-attr">methods</span>: {
    restore () {
      <span class="hljs-keyword">var</span> backup = <span class="hljs-keyword">this</span>.$refs.xForm.getBackup()
      <span class="hljs-keyword">if</span> (backup &amp;&amp; backup.length &gt; <span class="hljs-number">0</span>) {
        <span class="hljs-keyword">var</span> that = <span class="hljs-keyword">this</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; backup.length; i++) {
          <span class="hljs-keyword">this</span>[backup[i].name] = backup[i].value
        }
      }
    }
  },
  <span class="hljs-attr">components</span>: {
    vanButton,
    vanStepper,
    vanSwitch,
    vanSlider,
    vanRate,
    vanRadioGroup,
    vanDatetimePicker,
    vanCheckbox,
    vanField,
    vanCheckboxGroup,
    vanCellGroup,
    vanRadio
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
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

<script>
        
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
import vanStepper from 'vant/lib/stepper'
import 'vant/lib/stepper/style'
import vanSwitch from 'vant/lib/switch'
import 'vant/lib/switch/style'
import vanSlider from 'vant/lib/slider'
import 'vant/lib/slider/style'
import vanRate from 'vant/lib/rate'
import 'vant/lib/rate/style'
import vanRadioGroup from 'vant/lib/radio-group'
import 'vant/lib/radio-group/style'
import vanRadio from 'vant/lib/radio'
import 'vant/lib/radio/style'
import vanDatetimePicker from 'vant/lib/datetime-picker'
import 'vant/lib/datetime-picker/style'
import vanCheckbox from 'vant/lib/checkbox'
import 'vant/lib/checkbox/style'
import vanField from 'vant/lib/field'
import 'vant/lib/field/style'
import vanCheckboxGroup from 'vant/lib/checkbox-group'
import 'vant/lib/checkbox-group/style'
import vanCellGroup from 'vant/lib/cell-group'
import 'vant/lib/cell-group/style'
export default {
  data () {
    return {
      switchVal: false,
      stepper: 1,
      slider: 40,
      score: 3,
      gender: '1',
      birthday: new Date(),
      married: true,
      userName: 'hhm1999',
      list: ['足球', '健身', '游泳'],
      hobby: ['足球', '健身']
    }
  },
  methods: {
    restore () {
      var backup = this.$refs.xForm.getBackup()
      if (backup && backup.length > 0) {
        var that = this
        for (var i = 0; i < backup.length; i++) {
          this[backup[i].name] = backup[i].value
        }
      }
    }
  },
  components: {
    vanButton,
    vanStepper,
    vanSwitch,
    vanSlider,
    vanRate,
    vanRadioGroup,
    vanDatetimePicker,
    vanCheckbox,
    vanField,
    vanCheckboxGroup,
    vanCellGroup,
    vanRadio
  }
}

        </script>