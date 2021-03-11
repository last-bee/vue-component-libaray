const loaderUtils = require('loader-utils')
const hljs = require('highlight.js')
const cheerio = require('cheerio')
module.exports = function(source) {
    console.log(source)
    console.log(loaderUtils.getOptions(this))

    const md = require('markdown-it')('default', {
        html: true,
        breaks: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return hljs.highlight(lang, str, true).value;
              } catch (__) {}
            }
        
            return ''; // 使用额外的默认转义
        }
    })
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

    const descriptionReg = new RegExp('<(description)(?:[^<]|<)+</\\1>', 'g')
    md.core.ruler.push('markdown_rule', function replace({ tokens }) {
        //...
        console.log('---tokens---',tokens)
        let description
        tokens.forEach(token => {
            if (token.type === 'html_block') {
                if (descriptionReg.test(token.content)) {
                  description = fetch(token.content, 'description')
                  console.log('---description---', description)
                  token.content = ''
                }
            }
            if(token.type === 'fence' && token.tag === 'code') {
                description = fetch(token.content, 'description')
            }
        })
    });


    console.log(md.render(source))









    return 'hello world'
}