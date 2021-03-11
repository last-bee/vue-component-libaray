var ss = {
  set: function (system, name, value) {
    sessionStorage.setItem(system + '.' + name, value)
  },
  get: function (system, name) {
    return sessionStorage.getItem(system + '.' + name)
  },
  remove: function (system, name) {
    sessionStorage.removeItem(system + '.' + name)
  },
  clear: function (system) {
    var removeKeyArr = []
    for (var i = 0; i < sessionStorage.length; i++) {
      if (sessionStorage.key(i).split('.')[0] === system) {
        removeKeyArr.push(sessionStorage.key(i))
      }
    }
    for (var j = 0; j < removeKeyArr.length; j++) {
      sessionStorage.removeItem(removeKeyArr[j])
    }
  }
}
export default ss
