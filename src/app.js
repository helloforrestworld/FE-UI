import Vue from 'vue'
import ButtonGroup from './button-group'
import Button from './button'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('fe-button', Button)
Vue.component('fe-button-group', ButtonGroup)
Vue.component('fe-icon', Icon)
Vue.component('fe-input', Input)
Vue.component('fe-row', Row)
Vue.component('fe-col', Col)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  },
  methods: {}
})