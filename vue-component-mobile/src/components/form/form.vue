<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'xForm',
  props: {
  },
  data () {
    return {
      value: [],
      timeSaveSetInterval: null,
      valueString: null,
      tagVersion: ''
    }
  },
  created () {
  },
  mounted () {
    this.getFormsValue()
    var key = this.getKey()
    var backupOne = this.$localStorage.get('xForm', key + '1')
    var backupTwo = this.$localStorage.get('xForm', key + '2')
    if (backupTwo) {
      this.$localStorage.set('xForm', key + '1', backupTwo)
      this.$localStorage.remove('xForm', key + '2')
      this.tagVersion = '2'
    } else if (backupOne) {
      this.tagVersion = '2'
    } else {
      this.tagVersion = '1'
    }
  },
  activated () {
    var that = this
    this.timeSaveSetInterval = setInterval(function () {
      var valueString = JSON.stringify(that.getFormsValue())
      if (that.valueString !== valueString) {
        that.$localStorage.set('xForm', that.getKey() + that.tagVersion, valueString)
      }
      that.valueString = valueString
    }, 1000)
  },
  deactivated () {
    this.timeSaveSetInterval && clearInterval(this.timeSaveSetInterval)
  },
  destroyed () {
    this.timeSaveSetInterval && clearInterval(this.timeSaveSetInterval)
  },
  methods: {
    getBackup: function () {
      var datas = JSON.parse(this.$localStorage.get('xForm', this.getKey() + '1'))
      for (var i = 0; i < datas.length; i++) {
        if (datas[i].type === 'date') {
          datas[i].value = new Date(datas[i].value)
        }
      }
      return datas
    },
    getFormsValue: function () {
      this.value = []
      var childrens = this.$children
      if (childrens && childrens.length > 0) {
        this.getFormsValueRecursive(childrens)
      }
      return this.value
    },
    getFormsValueRecursive: function (childrens) {
      for (var i = 0; i < childrens.length; i++) {
        var xFormName = this.getXFormName(childrens[i])
        if (xFormName) {
          this.value.push({
            name: xFormName,
            value: childrens[i].value,
            type: this.getXFormType(childrens[i])
          })
        } else if (childrens[i].$children && childrens[i].$children.length > 0) {
          this.getFormsValueRecursive(childrens[i].$children)
        }
      }
    },
    getXFormName: function (vueComponent) {
      if (vueComponent && vueComponent.$attrs && vueComponent.$attrs['x-form']) {
        return vueComponent.$attrs['x-form']
      }
      return null
    },
    getXFormType: function (vueComponent) {
      if (vueComponent && vueComponent.$attrs && vueComponent.$attrs['x-form-type']) {
        return vueComponent.$attrs['x-form-type']
      }
      return null
    },
    getKey: function () {
      var key = this.$route.path
      for (var i = 0; i < this.value.length; i++) {
        key += '-' + this.value[i].name
      }
      return key
    }
  },
  components: {
  }
}
</script>
<style scoped lang="scss">
</style>
