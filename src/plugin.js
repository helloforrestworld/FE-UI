import Toast from './toast'
export default {
  install(Vue, vueOptions) {
    Vue.prototype.$toast = (message, options) => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: options
      })
      vm.$slots.default = [message]
      vm.$mount()
      document.body.appendChild(vm.$el)
    }
  }
}