import Vue from 'vue'
import ButtonGroup from './button-group'
import Button from './button'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Main from './main'
import Footer from './footer'
import Aside from './aside'

import plugin from './plugin'

Vue.component('fe-button', Button)
Vue.component('fe-button-group', ButtonGroup)
Vue.component('fe-icon', Icon)
Vue.component('fe-input', Input)
Vue.component('fe-row', Row)
Vue.component('fe-col', Col)

Vue.component('fe-layout', Layout)
Vue.component('fe-header', Header)
Vue.component('fe-main', Main)
Vue.component('fe-footer', Footer)
Vue.component('fe-aside', Aside)

Vue.use(plugin)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  },
  methods: {
    showToast(message, options) {
      this.$toast(message, options)
    },
    hasCallBack() {
      this.showToast('可执行回调', {
        closeBtn: {
          text: '回调',
          callback() {
            alert('执行回调！')
          }
        }
      })
    }
  }
})