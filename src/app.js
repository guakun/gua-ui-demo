import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('gua-button', Button)
Vue.component('gua-icon', Icon)
Vue.component('gua-button-group', ButtonGroup)
Vue.component('gua-input', Input)
Vue.component('gua-row', Row)
Vue.component('gua-col', Col)
Vue.component('gua-layout', Layout)
Vue.component('gua-header', Header)
Vue.component('gua-sider', Sider)
Vue.component('gua-content', Content)
Vue.component('gua-footer', Footer)
Vue.component('gua-toast', Toast)

Vue.use(plugin)

new Vue({
  el: '#app',
  data: {},
  created () {
  },
  methods: {
    showToast1 () { this.showToast('top') },
    showToast2 () { this.showToast('middle') },
    showToast3 () { this.showToast('bottom') },
    showToast (position) {
      this.$toast(`你的余额还剩${parseInt(Math.random() * 100)}。 请及时充值。`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback () {
            console.log('他说他充值了')
          }
        },
        autoClose: false
      })
    }
  }
})