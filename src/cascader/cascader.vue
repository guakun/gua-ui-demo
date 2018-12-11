<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>

<script>
  import CascaderItems from './cascader-items'
  export default {
    name: "GuaCascader",
    components: {
      CascaderItems,
    },
    props: {
      source: {
        type: Array
      }
    },
    data () {
      return {
        popoverVisible: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader {
    .trigger {
      border: 1px solid red;
      height: 32px; width: 100px;
    }
    .popover {
      border: 2px solid green;
      height: 700px;
      position: relative; display: flex;
    }
  }
</style>