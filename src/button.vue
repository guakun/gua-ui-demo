<template>
  <button class="gua-button" :class="{[`icon-${iconPosition}`]: true}">
    <gua-icon v-if="icon" :name="icon" class="icon"></gua-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
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
<style lang="scss">
.gua-button { font-size: var(--font-size); height: var(--button-height); padding: 0 1em; font-family: inherit;
  border-radius: var(--border-radius); border: 1px solid var(--border-color); background: var(--button-bg);
  display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;
  &:hover { border-color: var(--border-color-hover); }
  &:active { background: var(--button-active-bg); }
  &:focus { outline: none; }
  > .icon { order: 1; margin-right: .3em; }
  > .content { order: 2; }
  &.icon-right { >.content { order: 1; } > .icon { order: 2; margin-left: .3em; margin-right: 0; } }
}
</style>