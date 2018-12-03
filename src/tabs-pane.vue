<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuaTabsPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String|Number,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return {
        active: this.active
      }
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      this.active = this.name === name
    })
  }
}
</script>

<style lang="scss" scoped>
  .tabs-pane {
    &.active {
      background: #cd0000;
    }
  }
</style>
