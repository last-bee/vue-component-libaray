var loaderUtils = require('loader-utils')
var hljs = require('highlight.js')
var cheerio = require('cheerio')
var MarkdownIt = require('markdown-it')
var fs = require("fs")
module.exports = function (src) {
  // console.log('---src---', src)
  // console.log('---this---', this)
  const options = loaderUtils.getOptions(this)
  // console.log('---options---', options)
  var renderVueTemplate = function(html, wrapper) {
    var $ = cheerio.load(html, {
      decodeEntities: false,
      lowerCaseAttributeNames: false,
      lowerCaseTags: false,
      xmlMode: true,
    })
    // console.log('---$---', $)
    var output = {
      style: $.html('style'),
      // get only the first script child. Causes issues if multiple script files in page.
      script: $.html($('script').first())
    }
    // console.log('----output----', output)
    var result
    $('style').remove()
    $('script').remove()
    if(wrapper) {
      result =
        `<template><${wrapper}>` +
        $.html() +
        `</${wrapper}></template>\n`
    } else {
      result =
        `<template>` +
          $.html() +
        `</template>\n`
    }
    result += output.style + '\n' + output.script

    return result
  }
  const Token = require('markdown-it/lib/token')
  const fetch = (str, tag, scoped) => {
    const $ = cheerio.load(str, {
      decodeEntities: false,
      xmlMode: true,
    })
    if (!tag) { return str }
    if (tag === 'style') {
      return scoped
        ? $(`${tag}[scoped]`).html()
        : $(`${tag}`).not(`${tag}[scoped]`).html()
    }
    return $(tag).html()
  }
  // console.log('renderHighlight', renderHighlight)
  const md = require('markdown-it')('default', {
    html: true,
    breaks: true,
    highlight: renderHighlight,
  })
  // console.log('-----md-----', md)
  // .use(require('markdown-it-anchor'), {
  //   level: 2,
  //   slugify: string => string.trim().split(' ').join('-'),
  //   permalink: true,
  //   permalinkClass: 'anchor',
  //   // permalinkSymbol: '#',
  //   permalinkBefore: false,
  // })
  const descriptionReg = new RegExp('<(description)(?:[^<]|<)+</\\1>', 'g')
  md.core.ruler.push('update_template', function replace ({ tokens }) {
    let description = ''
    let template = ''
    let script = ''
    let style = ''
    let scopedStyle = ''
    let code = ''
    let sourceCode = ''
    tokens.forEach(token => {
      if (token.type === 'html_block') {
        if (token.content.match(descriptionReg)) {
          description = fetch(token.content, 'description')
          token.content = ''
        }
      }
      if (token.type === 'fence' && token.info === 'html' && token.markup === '```') {
        sourceCode = token.content
        code = '````html\n' + token.content + '````'
        template = fetch(token.content, 'template')
        script = fetch(token.content, 'script')
        style = fetch(token.content, 'style')
        scopedStyle = fetch(token.content, 'style', true)
        token.content = ''
        token.type = 'html_block'
      }
    })
    // if (template || description) {
      let jsfiddle = {
        html: template,
        script,
        style,
        description,
        sourceCode,
      }
      jsfiddle = md
        .utils
        .escapeHtml(JSON.stringify(jsfiddle))
      const codeHtml = code
        ? md.render(code)
        : ''
      const descriptionHtml = description
        ? md.render(description)
        : ''
      let newContent = `
        <template>
          <` + options.componentName + ` :jsfiddle="${jsfiddle}" has-description="`+ !!descriptionHtml +`" has-template="`+ !!template +`" has-code="`+ !!codeHtml +`">
            <template slot="description">${descriptionHtml}</template>
            <template slot="component">${template}</template>
            <template slot="code">${codeHtml}</template>
          </` + options.componentName + `>
        </template>`
      newContent += script
        ? `
        <script>
        ${script || ''}
        </script>
        `
        : ''
      newContent += style
        ? `
        <style lang="scss">
        ${style || ''}
        </style>
        `
        : ''
      newContent += scopedStyle
        ? `
        <style scoped lang="scss">
        ${scopedStyle || ''}
        </style>
        `
        : ''
      const t = new Token('html_block', '', 0)
      t.content = newContent
      tokens.push(t)
    // }
  })
  var returns = renderVueTemplate(md.render(src), 'div')
  fs.writeFile('returns.vue', returns, function () {

  })
  return returns
}
/**
 * `{{ }}` => `<span>{{</span> <span>}}</span>`
 * @param  {string} str
 * @return {string}
 */
var replaceDelimiters = function (str) {
  return str.replace(/({{|}})/g, '<span>$1</span>')
}
var renderHighlight = function(str, lang) {
  if (!(lang && hljs.getLanguage(lang))) {
    return ''
  }
  return replaceDelimiters(hljs.highlight(lang, str, true).value)
}
