<template>
  <div class="cascader-item">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gua-cascader-items :items="rightItems"></gua-cascader-items>
    </div>
  </div>
</template>

<script>
 const cascaderItems = {
  name: "GuaCascaderItems",
  components: {
    GuaCascaderItems: cascaderItems
  },
  props: {
    items: {
      type: Array
    }
  },
  data () {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems () {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      }
      return null
    }
  }
}

export default cascaderItems
</script>

<style lang="scss" scoped>
.cascader-item {
  display: flex; align-items: flex-start; justify-content: flex-start;
  .left { border: 1px solid red; }
  .right { margin-top: -1px; }
}
</style>
