<template>
  <div class="gua-sub-nav" :class="{active}" v-click-outside="close">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="gua-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from '../click-outside'

export default {
  name: 'GuaSubNav',
  inject: ['root'],
  directives: { ClickOutside },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    active () {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    }
  },
  methods: {
    onClick () {
      this.open = !this.open
    },
    updateNamePath () {
      this.active = true
      this.root.namePath.unshift(this.name)
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath()
      } else {
      }
    },
    close () {
      this.open = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.gua-sub-nav {
  position: relative;
  &.active {
    &:after {
      content: '';
      position: absolute; bottom: 0;left: 0; width: 100%;
      border-bottom: 2px solid $blue;
    }
  }
  > span {
    padding: 10px 20px; display: block;
  }
  &-popover {
    background: #fff;
    position: absolute; top: 100%; left: 0; white-space: nowrap;
    margin-top: 4px;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: $border-radius;
    color: $light-color; font-size: $font-size;
    min-width: 8em;
  }
}
.gua-sub-nav .gua-sub-nav .gua-sub-nav-popover {
  top: 0; left: 100%; margin-left: 5px;
}
</style>
