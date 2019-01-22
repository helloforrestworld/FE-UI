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
    it('change/input/blur/focus事件.', () => {
      ['change', 'input', 'blur', 'focus'].forEach((eventName) => {
        const wrapper = mount(Input, {
          propsData: {}
        })
        const callback = sinon.fake()
        wrapper.vm.$on(eventName, callback)

        // 触发chang事件
        let event = new Event(eventName)
        let inputElement = wrapper.find('input').element
        inputElement.dispatchEvent(event)
        console.log('eventName: ' + eventName)
        expect(callback).to.have.been.calledWith('', event)
      })
    })
  })
})