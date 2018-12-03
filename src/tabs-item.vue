<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuaTabsItem',
  inject: ['eventBus'],
  props: { // 1 需要用户 (前端开发者) 传值 入参
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String|Number,
      required: true
    }
  },
  data () { // 2 不需要用户传值，自身维护值
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
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    border: 1px solid green;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      background: #cd0000;
    }
  }
</style>
