<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'GuaTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  mounted () {
    this.checkChildren()
    this.selectTab()
  },
  methods: {
    checkChildren () {
      if (this.$children.length === 0) {
        console && console.warn && console.warn('tabs 的子组件应该是 tabs-head 和 tabs-body 但你没有子组件')
      }
    },
    selectTab () {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'GuaTabsHead') {
          vm.$children.forEach(childVm => {
            if (childVm.$options.name === 'GuaTabsItem' && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs {}
</style>
