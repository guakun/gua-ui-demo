<template>
  <div class="gua-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuaNavItem',
  props: {
    name: {
      type: String,
      required: true
    }
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
.gua-nav-item {
  padding: 10px 20px;
  &.selected {
    background: red;
  }
}
</style>
