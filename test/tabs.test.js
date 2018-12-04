const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('gua-tabs', Tabs)
Vue.component('gua-tabs-head', TabsHead)
Vue.component('gua-tabs-body', TabsBody)
Vue.component('gua-tabs-item', TabsItem)
Vue.component('gua-tabs-pane', TabsPane)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })
  it('接受 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <gua-tabs selected="javascript">
      <gua-tabs-head>
        <gua-tabs-item name="html"> html5 </gua-tabs-item>
        <gua-tabs-item name="css"> css </gua-tabs-item>
        <gua-tabs-item name="javascript"> javascript </gua-tabs-item>
      </gua-tabs-head>
      <gua-tabs-body>
        <gua-tabs-pane name="html"> html5 权威指南 </gua-tabs-pane>
        <gua-tabs-pane name="css"> CSS 世界 </gua-tabs-pane>
        <gua-tabs-pane name="javascript"> 你不知道的 javascript </gua-tabs-pane>
      </gua-tabs-body>
    </gua-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector('.tabs-item[data-name="javascript"]')
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
  it ('接受 direction 属性', () => {
  })
  // it('子组件只能是 tabs-head 和 tabs-body', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //   <gua-tabs>
  //     <div class="hi">hi</div>
  //   </gua-tabs>
  //   `
  //   expect(() => {
  //     const vm = new Vue({
  //       el: div
  //     })
  //   }).to.throw()
  // })
})
