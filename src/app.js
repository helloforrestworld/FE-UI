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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsSpan from './tabs-span'
import TabsBody from './tabs-body'
import TabsPanel from './tabs-panel'

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

Vue.component('fe-tabs', Tabs)
Vue.component('fe-tabs-head', TabsHead)
Vue.component('fe-tabs-span', TabsSpan)
Vue.component('fe-tabs-body', TabsBody)
Vue.component('fe-tabs-panel', TabsPanel)

Vue.use(plugin)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      selectTab: '1'
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