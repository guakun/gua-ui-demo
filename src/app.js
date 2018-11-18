import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('gua-button', Button)
Vue.component('gua-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})