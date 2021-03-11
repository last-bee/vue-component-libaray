[^_^]:<description>
### xForm
`xForm`是一个用于记录并恢复表单数据的组件。
#### 用法
将`Vant`的表单组件写在`xForm`内，并且配置好`x-form`属性，如下所示：
````html
<x-form ref="xForm">
  <van-stepper x-form="stepper" v-model="stepper"></van-stepper>
</x-form>
````
当你想恢复上一次的数据时，你只需要执行`xForm`的`getBackup`方法，来获取缓存的数据，该方法会返回类似如下的数据结构：
````js
{
  name: 'stepper',
  value: 1
}
````
再将这些数据设置给对应的表单绑定的变量即可。
#### 注意
当表单的数据是`Date`时，你需要额外给表单配置属性`x-form-type="date"`,如下所示：
````html
<x-form ref="xForm">
  <van-datetime-picker x-form="birthday" x-form-type="date" v-model="birthday" type="date"></van-datetime-picker>
</x-form>
````
[^_^/]:</description>

```html
<template>
  <div>
    <x-form ref="xForm">
      <van-cell-group>
        <van-stepper x-form="stepper" v-model="stepper"></van-stepper>
        <van-switch x-form="switchVal" v-model="switchVal"></van-switch>
        <van-slider x-form="slider" v-model="slider"/>
        <van-rate x-form="score" v-model="score" />
        <van-radio-group x-form="gender" v-model="gender">
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
        <van-datetime-picker confirm-button-text="确认" cancel-button-text="取消" x-form="birthday" x-form-type="date" v-model="birthday" type="date"></van-datetime-picker>
        <van-checkbox x-form="married" v-model="married">已婚</van-checkbox>
        <van-field x-form="userName" v-model="userName" placeholder="请输入用户名" />
        <van-checkbox-group x-form="hobby" v-model="hobby">
          <van-checkbox v-for="(item, index) in list" :key="item" :name="item"> {{ item }} </van-checkbox>
        </van-checkbox-group>
      </van-cell-group>
    </x-form>
    <van-button @click="restore" type="primary">恢复数据</van-button>
  </div>
</template>
<script>
import vanButton from 'vant/lib/button'
import 'vant/lib/button/style'
import vanStepper from 'vant/lib/stepper'
import 'vant/lib/stepper/style'
import vanSwitch from 'vant/lib/switch'
import 'vant/lib/switch/style'
import vanSlider from 'vant/lib/slider'
import 'vant/lib/slider/style'
import vanRate from 'vant/lib/rate'
import 'vant/lib/rate/style'
import vanRadioGroup from 'vant/lib/radio-group'
import 'vant/lib/radio-group/style'
import vanRadio from 'vant/lib/radio'
import 'vant/lib/radio/style'
import vanDatetimePicker from 'vant/lib/datetime-picker'
import 'vant/lib/datetime-picker/style'
import vanCheckbox from 'vant/lib/checkbox'
import 'vant/lib/checkbox/style'
import vanField from 'vant/lib/field'
import 'vant/lib/field/style'
import vanCheckboxGroup from 'vant/lib/checkbox-group'
import 'vant/lib/checkbox-group/style'
import vanCellGroup from 'vant/lib/cell-group'
import 'vant/lib/cell-group/style'
export default {
  data () {
    return {
      switchVal: false,
      stepper: 1,
      slider: 40,
      score: 3,
      gender: '1',
      birthday: new Date(),
      married: true,
      userName: 'hhm1999',
      list: ['足球', '健身', '游泳'],
      hobby: ['足球', '健身']
    }
  },
  methods: {
    restore () {
      var backup = this.$refs.xForm.getBackup()
      if (backup && backup.length > 0) {
        var that = this
        for (var i = 0; i < backup.length; i++) {
          this[backup[i].name] = backup[i].value
        }
      }
    }
  },
  components: {
    vanButton,
    vanStepper,
    vanSwitch,
    vanSlider,
    vanRate,
    vanRadioGroup,
    vanDatetimePicker,
    vanCheckbox,
    vanField,
    vanCheckboxGroup,
    vanCellGroup,
    vanRadio
  }
}
</script>
```
