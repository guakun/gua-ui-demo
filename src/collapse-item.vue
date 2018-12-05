<template>
  <div class="collapse-item">
    <div class="title" @click="open=!open">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuaCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style scoped lang="scss">
  $gray: #ddd;
  $border-radius: 4px;
  .collapse-item {
    > .title { border: 1px solid $gray; margin: -1px -1px 0 -1px; min-height: 32px; display: flex; align-items: center;
      padding: 0 10px; }
    &:first-child {
      > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
    }
    &:last-child { > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
    }
    > .content { padding: 8px; }
  }
</style>