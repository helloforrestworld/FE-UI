import Vue from 'vue'
import ButtonGroup from './button-group'
import Button from './button'
import Icon from './icon'

Vue.component('fe-button', Button)
Vue.component('fe-button-group', ButtonGroup)
Vue.component('fe-icon', Icon)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'set'
    }
  })
  // 挂在到内存
  button.$mount()
  let useElememnt = button.$el.querySelector('use')
  let href = useElememnt.getAttribute('xlink:href')
  expect(href).to.eq('#i-set')
  button.$el.remove()
  button.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'set',
      loading: true
    }
  })
  button.$mount()
  let useElememnt = button.$el.querySelector('use')
  let href = useElememnt.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  button.$el.remove()
  button.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'set',
      loading: true
    }
  })
  vm.$mount()
  let useElememnt = vm.$el.querySelector('use')
  let href = useElememnt.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'set'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'set',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'set'
    }
  })
  vm.$mount()
  const spy = chai.spy(() => {})
  vm.$on('click', spy)
  vm.$el.click()
  expect(spy).to.have.been.called()

  vm.$el.remove()
  vm.$destroy()
}
