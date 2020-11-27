<description>
### `vuex`规范
**`Vuex`为主，每个模块单独维护一个module，方便数据维护符合vuex的引用、赋值、逻辑处理的标准，详情见[`vuex`官网](https://vuex.vuejs.org)。**
**注意只改变state中的值用 `mutations` 进行修改 对test进行添加修改删除等操作 用`actions`进行**
```
#### index.js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
const moduleName = {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    moduleName: moduleName
  }
})
export {
  moduleClient
}
```
#### actions.js
```
export default {
  add_test({commit, getters}, value) {// 添加test
    commit('set_test', getters.get_test + value)  
  }
}
```
#### mutations.js
```
export default {
  set_test(state, value) {// test赋值
    state.test = value
  }
}
```
#### getters.js
```
export default {
  get_test(state) {// 获取测试数据
    return state.test || ''
  }
}
```
#### state.js
```
export default {
  test: null,// 测试默认值
}
```
#### 调用
```
import { mapGetters, mapMutations, mapActions } from 'vuex'
computed: {
  ...mapGetters('moduleName', ['get_test])
},
created() {
  console.log(this.get_test) // 获取test值
  this.add_test('hello word')// 给test添加 hello world
  this.setTest('hello lift') // test赋值
  // 注意只改变state中的值用 setTest 进行修改
  // 对test进行添加修改删除等操作 用actions进行
},
methods: {
  ...mapActions('moduleName', ['add_test]),
  ...mapMutations('moduleName', {
    setTest: set_test
  })
}
```
</description>