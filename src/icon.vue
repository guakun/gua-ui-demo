<template>
  <svg class="gua-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  props: ['name']
}
</script>

<style lang="scss">
  .gua-icon { width: 1em; height: 1em; }
</style>
