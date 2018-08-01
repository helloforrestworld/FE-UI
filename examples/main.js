import Vue from 'vue'
import App from './App'
import router from './router'

import FEUI from '../packages/index'
import '../packages/theme-default/lib/index.css'

import demoBlock from './components/demo-block.vue'

Vue.config.productionTip = false
Vue.component('demo-block', demoBlock)
Vue.use(FEUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
