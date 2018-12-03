<template>
  <div class="tabs-header">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'GuaTabsHeader'
}
</script>

<style lang="scss" scoped>
  .tabs-head {}
</style>
