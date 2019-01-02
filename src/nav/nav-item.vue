<template>
  <div class="gua-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuaNavItem',
  inject: ['root'],
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
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.gua-nav-item {
  padding: 10px 20px;
  &.selected {
    position: relative;
    &:after {
      content: '';
      position: absolute; bottom: 0;left: 0; width: 100%;
      border-bottom: 2px solid $blue;
    }
  }
}
.gua-sub-nav .gua-nav-item {
  &.selected {
    color: $color;
    &:after {
      display: none;
    }
  }
}
</style>
