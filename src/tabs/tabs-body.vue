<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuaTabsBody',
  inject: ['eventBus'],
  created () {
  }
}
</script>

<style lang="scss" scoped>
  .tabs-body {
    padding: 1em;
  }
</style>
