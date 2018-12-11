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
        popoverVisible: false,
        level1Selected: null,
        level2Selected: null
      }
    },
    computed: {
      level2Items () {
        if (this.level1Selected) {
          return this.level1Selected.children
        }
        return []
      },
      level3Items () {
        if (this.level2Selected) {
          return this.level2Selected.children
        }
        return []
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
      .label {
        white-space: nowrap; cursor: pointer;
      }
    }
    
  }
</style>