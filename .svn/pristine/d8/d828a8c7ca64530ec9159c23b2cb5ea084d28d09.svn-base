export default {
  install: function (Vue) {
    var that = this
    Vue.directive('discriminate', {
      inserted: function (el, binding) {
        that.showOrHide(binding.value, el, binding.modifiers.contrary)
      }
    })
    Vue.http.post('/api/discriminate', {}).then(response => {
      that.discriminateKeys = response.body.list
      for (var i = 0; i < that.queue.length; i++) {
        that.showOrHide(that.queue[i].value, that.queue[i].el, that.queue[i].contrary)
      }
    })
  },
  queue: [],
  discriminateKeys: null,
  showOrHide: function (value, el, contrary) {
    if (this.discriminateKeys) {
      var has = false
      for (var i = 0; i < this.discriminateKeys.length; i++) {
        if (this.discriminateKeys[i] === value) {
          has = true
          break
        }
      }
      if (contrary) {
        el.style.display = has ? 'none' : ''
      } else {
        el.style.display = has ? '' : 'none'
      }
    } else {
      this.queue.push({
        value: value,
        el: el,
        contrary: contrary
      })
    }
  }
}
