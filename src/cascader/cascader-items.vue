<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <gua-icon class="icon" v-if="rightArrowVisible(item)" name="right"></gua-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gua-cascader-items :items="rightItems" :height="height" :level="level + 1"
        :selected="selected" @update:selected="onUpdateSelected" :loadData="loadData"></gua-cascader-items>
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
    },
    loadData: {
      type: Function
    }
  },
  computed: {
    rightItems () {
      if (this.selected[this.level]) {
        let selected = this.items.filter(item => item.name === this.selected[this.level].name)
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
      }
      return null
    },
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
    },
    rightArrowVisible (item)  {
      return this.loadData ? !item.isLeaf : item.children 
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
  .label { padding: .5em 1em; display: flex; align-items: center; cursor: pointer;
    &:hover { background: $grey; }
    .name { margin-right: 2em; user-select: none; }
    .icon {
      margin-left: auto; transform: scale(.5); fill: $border-color;
    }
  }
}
</style>
