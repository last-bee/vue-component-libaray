<template>
  <div class="doc-demo-wrap-main">
    <div v-if="hasDescription === 'true'" class="markdown-body description">
      <slot name="description"></slot>
    </div>
    <div v-if="hasTemplate === 'true'" class="component">
      <h4 class="title">
        示例
      </h4>
      <slot name="component"></slot>
    </div>
    <div v-if="hasCode === 'true'" class="code markdown-body">
      <h4 class="title">
        示例源码
      </h4>
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/solarized-light.css'
export default {
  name: 'xDocDemoWrap',
  props: {
    hasCode: {
      type: String,
      default: 'true'
    },
    hasDescription: {
      type: String,
      default: 'true'
    },
    hasTemplate: {
      type: String,
      default: 'true'
    },
    jsfiddle: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
  }
}
</script>
<style>
@import "./github-markdown.css";
</style>
<style scoped lang="scss">
.doc-demo-wrap-main{
  font-size: 14px;
  .title{
    font-size: 1em;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
}
</style>
