<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        {{item.name}}
        <gua-icon class="icon" v-if="item.children" name="right"></gua-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gua-cascader-items :items="rightItems" :height="height" :level="level + 1"
        :selected="selected" @update:selected="onUpdateSelected"></gua-cascader-items>
    </div>
  </div>
</template>

<script>
import GuaIcon from '../icon'

const cascaderItems = {
  name: "GuaCascaderItems",
  components: {
    GuaCascaderItems: cascaderItems,
    GuaIcon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItems () {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children
      }
      return null
    }
  },
  methods: {
    onClickLabel (item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}

export default cascaderItems
</script>

<style lang="scss" scoped>
@import "var";
.cascader-item {
  display: flex; align-items: flex-start; justify-content: flex-start;
  height: 100px;
  .left { height: 100%; padding: .3em 0; overflow: auto; }
  .right { height: 100%; border-left: 1px solid $border-color-light; }
  .label { padding: .3em 1em; display: flex; align-items: center; cursor: pointer;
    .icon {
      margin-left: 1em; transform: scale(.5); fill: $border-color-light;
    }
  }
}
</style>
