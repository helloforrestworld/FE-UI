import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Input from '../src/input.vue'
chai.use(sinonChai)

describe('input.vue', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })

  // 测试input属性
  describe('属性', () => {
    it('设置value.', () => {
      const wrapper = mount(Input, {
        propsData: {
          value: '1'
        }
      })
      const inputElement = wrapper.find('input')
      expect(inputElement.element.value).to.equal('1')
    })
    it('设置disabled.', () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true
        }
      })
      const inputElement = wrapper.find('input')
      expect(inputElement.element.getAttribute('disabled')).to.equal('disabled')
    })
    it('设置error.', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: '错误'
        }
      })
      const userElement = wrapper.find('use')
      const mesElement = wrapper.find('.error-msg')
      expect(userElement.element.getAttribute('xlink:href')).to.equal('#i-error')
      expect(mesElement.element.innerHTML).to.equal('错误')
    })
  })

  // 测试input事件
  describe('事件', () => {
    it('change事件.', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: '错误'
        }
      })
      const callback = sinon.fake()
      wrapper.vm.$on('change', callback)

      // 触发chang事件
      let event = new Event('change')
      let inputElement = wrapper.find('input').element
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('', event)
    })
    it('input事件.', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: '错误'
        }
      })
      const callback = sinon.fake()
      wrapper.vm.$on('input', callback)

      // 触发chang事件
      let event = new Event('input')
      let inputElement = wrapper.find('input').element
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('', event)
    })
    it('blur事件.', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: '错误'
        }
      })
      const callback = sinon.fake()
      wrapper.vm.$on('blur', callback)

      // 触发chang事件
      let event = new Event('blur')
      let inputElement = wrapper.find('input').element
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('', event)
    })
    it('focus事件.', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: '错误'
        }
      })
      const callback = sinon.fake()
      wrapper.vm.$on('focus', callback)

      // 触发chang事件
      let event = new Event('focus')
      let inputElement = wrapper.find('input').element
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('', event)
    })
  })
})