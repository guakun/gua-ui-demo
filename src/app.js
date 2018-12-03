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
    this.$toast('<p>段落 <strong>加粗文字</strong> <a href="http://qq.com">qq</a></p>', {
      position: 'middle',
      enableHtml: true,
      closeButton: {
        text: '知道了',
        callback (toast) {
          console.log('用户说他知道了')
          toast.log()
        }
      },
      autoClose: true,
      autoCloseDelay: 100000
    })
    this.$toast('当前功能', {})
  },
  methods: {
    showToast () {
      this.$toast('当前功能不稳定, 如果遇到 bug 请关闭该功能。', {})
    }
  }
})