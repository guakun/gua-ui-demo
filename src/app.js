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

new Vue({
  el: '#app',
  data: {},
  methods: {
    inputChange (e) {
      console.log(e.target.value)
    }
  }
})