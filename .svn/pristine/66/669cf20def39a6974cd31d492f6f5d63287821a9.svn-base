const proxy = require('./config/proxy.js')
module.exports = {
  "lintOnSave": false,
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-doc-loader')
      .loader('@hhm1999/vue-markdown-doc-loader')
      .options({
        componentName: 'x-doc-demo-wrap'
      })
      .end()
  },
  baseUrl: './',
  devServer: {
    port: 1999,
    proxy: proxy
  },
  productionSourceMap: false,
  lintOnSave: 'error',
  productionSourceMap: false,
  css: {
    extract: false, // css注入在js中
    loaderOptions: {
      sass: {
        data: `@import "@/variables.scss";`
      }
    }
  }
}
