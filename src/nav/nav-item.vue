<template>
  <div class="gua-nav-item" :class="{selected, vertical}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuaNavItem',
  inject: ['root', 'vertical'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created () {
    this.root.addItem(this)
  },
  data () {
    return {
      selected: false
    }
  },
  methods: {
    onClick () {
      this.root.namePath = []
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath()
      } else {
      }
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.gua-nav-item {
  padding: 10px 20px;
  &:not(.vertical) {
    &.selected {
      position: relative;
      &:after {
        content: '';
        position: absolute; bottom: 0;left: 0; width: 100%;
        border-bottom: 2px solid $blue;
      }
    }
  }
  &.vertical {
    &.selected {
      color: $blue;
    }
  }
}
a {
  color: inherit;
  text-decoration: none;
}
.gua-sub-nav .gua-nav-item:not(.vertical) {
  &.selected {
    color: $color; background: $grey;
    &:after {
      display: none;
    }
  }
}
</style>
