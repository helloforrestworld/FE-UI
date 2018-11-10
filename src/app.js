import Vue from 'vue'
import Button from './button'
import icon from './icon'

Vue.component('fe-button', Button)
Vue.component('fe-icon', icon)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  },
})