<template>
  <button class="gua-button" :class="{[`icon-${iconPosition}`]: true}"
          @click="$emit('click')">
    <gua-icon v-if="icon && !loading" :name="icon" class="icon"></gua-icon>
    <gua-icon v-if="loading" name="loading" class="loading icon"></gua-icon>
    <div class="g-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import GuaIcon from '../icon'

export default {
  components: {
    GuaIcon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'var';

@keyframes spin {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
.gua-button { font-size: $font-size; height: $button-height; padding: 0 1em; font-family: inherit;
  border-radius: $border-radius; border: 1px solid $border-color; background: $button-bg;
  display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;
  &:hover { border-color: $border-color-hover; }
  &:active { background: $button-active-bg; }
  &:focus { outline: none; }
  > .icon { order: 1; margin-right: .3em; }
  > .g-button-content { order: 2;}
  &.icon-right { >.content { order: 1; } > .icon { order: 2; margin-left: .3em; margin-right: 0; } }
  .loading { animation: spin .7s infinite linear; fill: $border-color; }
}
</style>