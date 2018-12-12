<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      {{ result ||'&nbsp;' }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items :items="source" class="popover" :height="popoverHeight" :selected="selected"
        @update:selected="onUpdateSelected" :load-data="loadData"></cascader-items>
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
      },
      popoverHeight: {
        type: String
      },
      selected: {
        type: Array,
        default: () => []
      },
      loadData: {
        type: Function
      }
    },
    data () {
      return {
        popoverVisible: false
      }
    },
    computed: {
      result () {
        return this.selected.map(item => item.name).join('/')
      }
    },
    methods: {
      onUpdateSelected (newSelected) {
        this.$emit('update:selected', newSelected)
        let lastItem = newSelected[newSelected.length - 1]
        let simplest = (children, id) => {
          return children.filter(item => item.id === id)[0]
        }
        let complex = (children, id) => {
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren, id)
          if (found) {
            return found
          } else {
            found = simplest(hasChildren, id)
            if (found) { return found }
            else {
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if (found) {
                  return found
                }
              }
              return undefined
            }
          }
        }
        let updateSource = (result) => {
          let copy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(copy, lastItem.id)
          toUpdate.children = result
          this.$emit('update:source', copy)
        }
        if (!lastItem.isLeaf) {
          this.loadData && this.loadData(lastItem, updateSource)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader {
    position: relative;
    .trigger {
      border: 1px solid $border-color;
      border-radius: $border-radius;
      height: $input-height; width: 100px;
      display: inline-flex; align-items: center;  padding: 0 1em;
      min-width: 10em;
    }
    .popover-wrapper {
      position: absolute; top: 100%; left: 0; margin-top: 4px;
      @extend .box-shadow;
      background: #fff;
      display: flex;
    }
  }
</style>