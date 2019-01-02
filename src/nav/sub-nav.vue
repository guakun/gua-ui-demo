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
.gua-sub-nav {
  position: relative;
  > span {
    border: 1px solid lightblue;
    padding: 10px 20px; display: block;
  }
  &-popover {
    border: 1px solid black;
    position: absolute; top: 100%; left: 0; white-space: nowrap;
  }
}
.gua-sub-nav .gua-sub-nav .gua-sub-nav-popover {
  top: 0; left: 100%; margin-left: 5px;
}
</style>
