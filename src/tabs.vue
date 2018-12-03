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
    this.eventBus.$emit('update:selected', this.selected)
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
