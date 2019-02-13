import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Col from '../src/col.vue'
chai.use(sinonChai)

describe('col.vue', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })

  it('设置span', () => {
    const wrapper = mount(Col, {
      propsData: {
        span: 1
      }
    })
    const Ele = wrapper.find('.fe-col')
    document.body.append(Ele.element)
    expect(Ele.element.classList.contains('fe-col-1')).to.equal(true)
    Ele.element.remove()
    wrapper.destroy()
  })
  it('设置offset', () => {
    const wrapper = mount(Col, {
      propsData: {
        offset: 1
      }
    })
    const Ele = wrapper.find('.fe-col')
    document.body.append(Ele.element)
    expect(Ele.element.classList.contains('fe-offset-1')).to.equal(true)
    Ele.element.remove()
    wrapper.destroy()
  })
  it('设置ipad', () => {
    const wrapper = mount(Col, {
      propsData: {
        ipad: {span:1, offset:1}
      }
    })
    const Ele = wrapper.find('.fe-col')
    document.body.append(Ele.element)
    expect(Ele.element.classList.contains('fe-offset-ipad-1')).to.equal(true)
    expect(Ele.element.classList.contains('fe-col-ipad-1')).to.equal(true)
    Ele.element.remove()
    wrapper.destroy()
  })
  it('设置narrowPc', () => {
    const wrapper = mount(Col, {
      propsData: {
        narrowPc: {span:1, offset:1}
      }
    })
    const Ele = wrapper.find('.fe-col')
    document.body.append(Ele.element)
    expect(Ele.element.classList.contains('fe-offset-narrowPc-1')).to.equal(true)
    expect(Ele.element.classList.contains('fe-col-narrowPc-1')).to.equal(true)
    Ele.element.remove()
    wrapper.destroy()
  })
  it('设置pc', () => {
    const wrapper = mount(Col, {
      propsData: {
        pc: {span:1, offset:1}
      }
    })
    const Ele = wrapper.find('.fe-col')
    document.body.append(Ele.element)
    expect(Ele.element.classList.contains('fe-offset-pc-1')).to.equal(true)
    expect(Ele.element.classList.contains('fe-col-pc-1')).to.equal(true)
    Ele.element.remove()
    wrapper.destroy()
  })
  it('设置widePc', () => {
    const wrapper = mount(Col, {
      propsData: {
        widePc: {span:1, offset:1}
      }
    })
    const Ele = wrapper.find('.fe-col')
    document.body.append(Ele.element)
    expect(Ele.element.classList.contains('fe-offset-widePc-1')).to.equal(true)
    expect(Ele.element.classList.contains('fe-col-widePc-1')).to.equal(true)
    Ele.element.remove()
    wrapper.destroy()
  })
  it('设置extraPc', () => {
    const wrapper = mount(Col, {
      propsData: {
        extraPc: {span:1, offset:1}
      }
    })
    const Ele = wrapper.find('.fe-col')
    document.body.append(Ele.element)
    expect(Ele.element.classList.contains('fe-offset-extraPc-1')).to.equal(true)
    expect(Ele.element.classList.contains('fe-col-extraPc-1')).to.equal(true)
    Ele.element.remove()
    wrapper.destroy()
  })
})