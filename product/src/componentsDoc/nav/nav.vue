<template>
  <div class="x-nav-main">
    <div class="big-class" :key="listOne.title" v-for="listOne in list">
      <div class="title">
        {{ listOne.title }}
      </div>
      <ul class="list">
        <router-link
          :key="listOneOne.path"
          v-for="listOneOne in listOne.childs"
          class="item"
          :to="listOneOne.path"
        >
          {{ listOneOne.label }}
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'xNav',
  props: {
  },
  data () {
    return {
      list: [
        {
          title: '开始',
          childs: [
            {
              path: '/dependencies',
              label: '安装依赖'
            },
            {
              path: '/changeFile',
              label: '哪些文件可以改动'
            },
            {
              path: '/components',
              label: '开始写页面'
            },
            {
              path: '/style',
              label: '样式'
            },
            {
              path: '/commonComponents',
              label: '写公共业务组件'
            },
            {
              path: '/router',
              label: '路由配置'
            },
            {
              path: '/network',
              label: '网络请求'
            }
          ]
        },
        {
          title: '架构',
          childs: [
            {
              path: '/technology',
              label: '所用技术'
            }
          ]
        },
        {
          title: '规范',
          childs: [
            {
              path: '/eslint',
              label: 'eslint'
            },
            {
              path: '/vueFile',
              label: 'vue单文件规范'
            },
            {
              path: '/CSS',
              label: 'CSS规范'
            },
            {
              path: '/js',
              label: 'JS规范'
            },
            {
              path: '/vuex',
              label: 'vuex规范'
            },
          ]
        },
        {
          title: '表单',
          childs: [
            {
              path: '/xForm',
              label: 'xForm'
            },
            {
              path: '/xUploader',
              label: '文件上传'
            },
            {
              path: '/xUploaderFixed',
              label: '文件上传-固定'
            }
          ]
        },
        {
          title: '数据选项',
          childs: [
            {
              path: '/dataOptions',
              label: '数据选项'
            }
          ]
        },
        {
          title: '其它组件',
          childs: [
            {
              path: '/chart',
              label: '图表'
            },
            {
              path: '/signature',
              label: '签名'
            }
          ]
        },
        {
          title: '存储',
          childs: [
            {
              path: '/store',
              label: '全局变量'
            },
            {
              path: '/localStorage',
              label: 'localStorage'
            },
            {
              path: '/sessionStorage',
              label: 'sessionStorage'
            }
          ]
        },
        {
          title: 'APP壳',
          childs: [
            {
              path: '/appBridgeDemo',
              label: '互相调用及数据交换原理'
            },
            {
              path: '/appBridgeDemojs',
              label: 'js端实现代码'
            }
          ]
        },
        {
          title: '统计',
          childs: [
            {
              path: '/statistics',
              label: '统计'
            }
          ]
        },
        {
          title: '部署',
          childs: [
            {
              path: '/deployment',
              label: '使用Jenkins部署'
            }
          ]
        },
        {
          title: '区别对待',
          childs: [
            {
              path: '/discriminate',
              label: '区别对待'
            }
          ]
        },
        {
          title: '技术方案说明书',
          childs: [
            {
              path: '/technologyPrinciple',
              label: '技术方案说明书'
            }
          ]
        }
      ]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    // isOn: function (path) {
    //   if (this.$route.path === path) {
    //     return true
    //   }
    //   return false
    // }
  },
  components: {
  }
}
</script>
<style scoped lang="scss">
.x-nav-main{
  float: left;
  display: block;
  box-sizing: border-box;
  width: 25%;
  padding-left: 10px;
  border-right: 1px solid #e8e8e8;
  min-height: 100%;
  .big-class{
    .title{
      font-size: 14px;
      padding: 10px;
      color: rgba(0,0,0,.65);
      font-weight: 600;
    }
    .list{
      padding: 10px;
      padding-left: 20px;
      font-size: 14px;
      color: rgba(0,0,0,.45);
      .item{
        height: 35px;
        line-height: 35px;
        color: rgba(0,0,0,.45);
        width: 100%;
        display: block;
        &.router-link-active{
          color: #1890ff;
          font-weight: 600;
        }
        &:hover {
          color: #1890ff;
        }
      }
    }
  }
}
</style>
