var ls = {
  set: function (system, name, value) {
    localStorage.setItem(system + '.' + name, value)
  },
  get: function (system, name) {
    return localStorage.getItem(system + '.' + name)
  },
  remove: function (system, name) {
    localStorage.removeItem(system + '.' + name)
  },
  clear: function (system) {
    var removeKeyArr = []
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).split('.')[0] === system) {
        removeKeyArr.push(localStorage.key(i))
      }
    }
    for (var j = 0; j < removeKeyArr.length; j++) {
      localStorage.removeItem(removeKeyArr[j])
    }
  }
}
export default ls
