<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
        type: String | Number,
        required: true
      }
    },
    data() { // 2 不需要用户传值，自身维护值
      return {
        active: false
      }
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = this.name === name
        })
      }
    },
    methods: {
      onClick() {
        if (this.disabled) { return }
        if (this.eventBus) {
          this.eventBus.$emit('update:selected', this.name, this)
        }
        this.$emit('click', this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>
