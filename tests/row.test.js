import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'
chai.use(sinonChai)

describe('row.vue', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })

  it('设置align', () => {
    const wrapper = mount(Row, {
      propsData: {
        align: 'center'
      }
    })
    const Ele = wrapper.find('.fe-row')
    document.body.append(Ele.element)
    expect(getComputedStyle(Ele.element).justifyContent).to.equal('center')
    Ele.element.remove()
    wrapper.destroy()
  })

  it('设置gutter', (done) => {
    let div = document.createElement('div')
    div.setAttribute('id', 'row-div')
    document.body.append(div)
    Vue.component('fe-row', Row)
    Vue.component('fe-col', Col)
    div.innerHTML = `
      <fe-row :gutter="20">
        <fe-col></fe-col>
        <fe-col></fe-col>
      </fe-row>
    `
    let vm = new Vue({
      el: div
    })

    setTimeout(() => {
      const row = vm.$el.querySelector('.fe-row')
      const cols = vm.$el.querySelectorAll('.fe-col')

      expect(getComputedStyle(row).marginLeft).to.equal('-20px')
      expect(getComputedStyle(cols[0]).paddingLeft).to.equal('20px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.equal('20px')
      done()
    }, 0)
  })
})