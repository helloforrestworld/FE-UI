import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Vue from 'vue'
import Toast from '../src/toast.vue'
chai.use(sinonChai)

describe('toast.vue', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })
  describe('props', () => {
    it ('autoClose, duration', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          duration: 1000
        }
      })
      vm.$slots.default = ['Toast']
      vm.$mount(div)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.equal(false)
        vm.$el.remove()
        vm.$destroy()
        done()
      }, 1500)
    })

    it ('showClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          showClose: false
        }
      })
      vm.$slots.default = ['Toast']
      vm.$mount(div)
      setTimeout(() => {
        expect(vm.$el.querySelector('.fe-toast-close')).to.be.null
        vm.$el.remove()
        vm.$destroy()
        done()
      }, 0)
    })

    it ('closeBtn', (done) => {
      const callback =  sinon.fake()
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeBtn: {
            text: 'close',
            callback
          }
        }
      })
      vm.$slots.default = ['Toast']
      vm.$mount(div)
      setTimeout(() => {
        const closeBtn = vm.$el.querySelector('.fe-toast-close')
        closeBtn.click()
        expect(closeBtn.textContent.trim()).to.equal('close')
        expect(callback).to.have.been.called
        vm.$el.remove()
        vm.$destroy()
        done()
      }, 0)
    })

    it ('enableHtml', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="strong">123</strong>']
      vm.$mount(div)
      setTimeout(() => {
        let strongEle = vm.$el.querySelector('#strong')
        expect(strongEle).to.exist
        vm.$el.remove()
        vm.$destroy()
        done()
      }, 0)
    })

    it ('postion', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      })
      vm.$slots.default = ['Toast']
      vm.$mount(div)
      setTimeout(() => {
        expect(vm.$el.classList.contains('position-bottom')).to.equal(true)
        vm.$el.remove()
        vm.$destroy()
        done()
      }, 0)
    })
  })
})