import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('gua-button', Button)
Vue.component('gua-icon', Icon)
Vue.component('gua-button-group', ButtonGroup)
Vue.component('gua-input', Input)

new Vue({
  el: '#app',
  data: {}
})