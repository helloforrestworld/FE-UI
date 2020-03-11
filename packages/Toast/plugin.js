import Toast from './index'
let currentToast = null
let Vue

function registerToast (_Vue) {
  Vue = _Vue
  Vue.prototype.$toast = toast
}

function toast (message, toastOptions) {
  if (!Vue) {
    throw new Error('please install plugin first')
  }
  if (currentToast) {
    currentToast.close()
  }
  currentToast = createToast({ Vue, message, toastOptions })
  return currentToast
}

function createToast ({ Vue, message, toastOptions }) {
  const Constructor = Vue.extend(Toast)
  const vm = new Constructor({
    propsData: toastOptions
  })
  vm.$slots.default = [message]
  vm.$mount()
  document.body.appendChild(vm.$el)
  return vm
}

export default Toast

export {
  registerToast
}
