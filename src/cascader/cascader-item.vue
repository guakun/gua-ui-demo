<template>
  <div class="x">
    <div class="name">
      {{sourceItem.name}}
      <gua-cascader-item
        v-if="sourceItem.children"
        v-for="(item, index) in sourceItem.children"
        :sourceItem="item"
        :key="index"
      ></gua-cascader-item>
    </div>
  </div>
</template>

<script>
 const cascaderItem = {
  name: "GuaCascaderItem",
  components: {
    GuaCascaderItem: cascaderItem
  },
  props: {
    sourceItem: {
      type: Object
    }
  }
}

export default cascaderItem
</script>

<style lang="scss" scoped>
.cascader-item {
  border: 1px solid red;
  margin: 10px;
}
</style>
