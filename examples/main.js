import Vue from 'vue'
import App from './App.vue'
import FeUI from '../packages/'
import '../packages/theme-chalk/src/index.less'

Vue.use(FeUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
