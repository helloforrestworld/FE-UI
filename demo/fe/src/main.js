import Vue from 'vue'
import App from './App.vue'
import 'fe-ui-test01/dist/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
