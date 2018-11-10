import Vue from 'vue'
import buttonGroup from './button-group'
import Button from './button'
import icon from './icon'

Vue.component('fe-button', Button)
Vue.component('fe-button-group', buttonGroup)
Vue.component('fe-icon', icon)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  },
})