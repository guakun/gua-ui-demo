<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <gua-icon class="icon loading" name="loading"></gua-icon>
          </template>
          <template v-else>
            <gua-icon class="icon next" v-if="rightArrowVisible(item)" name="right"></gua-icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gua-cascader-items :items="rightItems" :height="height" :level="level + 1"
        :selected="selected" @update:selected="onUpdateSelected" :load-data="loadData"
        :loading-item="loadingItem"></gua-cascader-items>
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
    },
    loadingItem: {
      type: Object,
      default: () => ({})
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
  .label { padding: .5em 1em; display: flex; align-items: center; cursor: pointer; white-space: nowrap;
    &:hover { background: $grey; }
    .name { margin-right: 2em; user-select: none; }
    > .icons { margin-left: auto; fill: $border-color;
     .icon{
        &.loading { transform: scale(.9); animation: spin .7s infinite linear; }
        &.next { transform: scale(.5); }
      } 
    }
  }
}
</style>
