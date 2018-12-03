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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

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
Vue.component('gua-tabs', Tabs)
Vue.component('gua-tabs-head', TabsHead)
Vue.component('gua-tabs-body', TabsBody)
Vue.component('gua-tabs-item', TabsItem)
Vue.component('gua-tabs-pane', TabsPane)

Vue.use(plugin)

new Vue({
  el: '#app',
  data () {
    return {
      selectedTab: 'javascript'
    }
  },
  created () {
  },
  methods: {
  }
})