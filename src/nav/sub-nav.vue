<template>
  <div class="gua-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="gua-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuaSubNav',
  data () {
    return {
      open: false
    }
  },
  methods: {
    onClick () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.gua-sub-nav {
  position: relative;
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
