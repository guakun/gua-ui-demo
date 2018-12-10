<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="(item, index) in source" :key="index" class="item">
        <cascader-item :sourceItem="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './cascader-item'
  export default {
    name: "GuaCascader",
    components: {
      CascaderItem,
    },
    props: {
      source: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader { border: 1px solid red; }
</style>