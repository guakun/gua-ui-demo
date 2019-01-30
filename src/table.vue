<template>
  <div class="gua-table-wrapper" ref="wrapper">
    <div :style="{height, overflow: 'overlay'}" ref="tableWrapper">
      <table class="gua-table" :class="{bordered, compact, striped}" ref="table">
        <thead>
        <tr>
          <th v-if="expandField" :style="{width: '50px'}" class="gua-table-center"></th>
          <th v-if="checkable" :style="{width: '50px'}" class="gua-table-center">
            <input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected"/>
          </th>
          <th :style="{width: '50px'}" v-if="numberVisible" class="gua-table-center">#</th>
          <th :style="{width: `${column.width}px`}" v-for="column in columns" :key="column.field">
            <div class="gua-table-header">
              {{column.text}}
              <span class="gua-table-sorter" v-if="column.field in orderBy" @click="changeOrderBy(column.field)">
                <gua-icon name="up" :class="{'active': orderBy[column.field]==='asc'}"></gua-icon>
                <gua-icon name="down" :class="{'active': orderBy[column.field]==='desc'}"></gua-icon>
              </span>
            </div>
          </th>
          <th v-if="$scopedSlots.default" ref="actionsHeader"></th>
        </tr>
        </thead>
        <tbody>
        <template v-for="item,index in dataSource">
          <tr :key="item.id">
            <td v-if="expandField" :style="{width: '50px'}" class="gua-table-center">
              <gua-icon @click="expandItem(item.id)" class="gua-table-expandIcon" name="right"/>
            </td>
            <td v-if="checkable" :style="{width: '50px'}" class="gua-table-center">
              <input type="checkbox" @change="onChangeItem(item, index, $event)"
                     :checked="inSelectedItems(item)"/>
            </td>
            <td :style="{width: '50px'}" v-if="numberVisible" class="gua-table-center">{{index+1}}</td>
            <template v-for="column in columns">
              <td :style="{width: `${column.width}px`}" :key="column.field">{{item[column.field]}}</td>
            </template>
            <td v-if="$scopedSlots.default">
              <div ref="actions" style="display: inline-block;">
                <slot :item="item"></slot>
              </div>
            </td>
          </tr>
          <tr v-if="inExpandedIds(item.id)" :key="`${item.id}-expand`">
            <td :colspan="columns.length + expandedCellColSpan">
              {{item[expandField] || '空'}}
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div v-if="loading" class="gua-table-loading">
      <gua-icon name="loading"></gua-icon>
    </div>
  </div>
</template>

<script>
  import GuaIcon from './icon'

  export default {
    name: "GuaTable",
    components: {
      GuaIcon
    },
    props: {
      columns: {
        type: Array,
        required: true
      },
      dataSource: {
        type: Array,
        required: true,
        validator(array) {
          return array.filter(item => item.id === undefined).length <= 0
        }
      },
      numberVisible: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      compact: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: true
      },
      selectedItems: {
        type: Array,
        default: () => []
      },
      orderBy: {
        type: Object,
        default: () => ({})
      },
      loading: {
        type: Boolean,
        default: false
      },
      height: {
        type: Number
      },
      expandField: {
        type: String
      },
      checkable: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        expandedIds: []
      }
    },
    computed: {
      areAllItemsSelected() {
        // 如何判断两个数组含有的 id 是一样的
        // this.dataSource = [{id: 1}, {id: 2}]
        // this.selectedItems = [{id: 2}, {id: 1}]
        const a = this.dataSource.map(item => item.id).sort()
        const b = this.selectedItems.map(item => item.id).sort()
        if (a.length !== b.length) {
          return false
        }
        let equal = true
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            equal = false
            break
          }
        }
        return equal
      },
      expandedCellColSpan() {
        let result = 0
        if (this.checkable) { result += 1 }
        if (this.expandField) { result += 1 }
        return result
      }
    },
    mounted() {
      let table2 = this.$refs.table.cloneNode(false)
      this.table2 = table2
      table2.classList.add('gua-table-copy')
      let tHead = this.$refs.table.children[0]
      let {height} = tHead.getBoundingClientRect()
      this.$refs.tableWrapper.style.marginTop = `${height}px`
      this.$refs.tableWrapper.style.height = `${this.height - height}px`
      table2.appendChild(tHead)
      this.$refs.wrapper.appendChild(table2)


      if(this.$scopedSlots.default) {
        let div = this.$refs.actions[0]
        let {width} = div.getBoundingClientRect()
        let parent = div.parentNode
        let styles = getComputedStyle(parent)
        let paddingLeft = styles.getPropertyValue('padding-left')
        let paddingRight = styles.getPropertyValue('padding-right')
        let borderLeft = styles.getPropertyValue('border-left-width')
        let borderRight = styles.getPropertyValue('border-right-width')
        let width2 = `${width + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + 22}px`
        this.$refs.actionsHeader.style.width = width2
        this.$refs.actions.map(div => {
          div.parentNode.style.width = width2
        })
      }
    },
    beforeDestroy() {
      this.table2.remove()
    },
    watch: {
      selectedItems() {
        if (this.selectedItems.length === this.dataSource.length) {
          this.$refs.allChecked.indeterminate = false
        } else if (this.selectedItems.length === 0) {
          this.$refs.allChecked.indeterminate = false
        } else {
          this.$refs.allChecked.indeterminate = true
        }
      }
    },
    methods: {
      changeOrderBy(key) {
        let copy = JSON.parse(JSON.stringify(this.orderBy))
        let oldValue = copy[key]
        if (oldValue === 'asc') {
          copy[key] = 'desc'
        } else if (oldValue === 'desc') {
          copy[key] = true
        } else {
          copy[key] = 'asc'
        }
        this.$emit('update:orderBy', copy)
      },
      inSelectedItems(item) {
        return this.selectedItems.filter((i) => i.id === item.id).length > 0
      },
      onChangeItem(item, index, e) {
        let selected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copy.push(item)
        } else {
          copy = copy.filter(i => i.id !== item.id)
        }
        this.$emit('update:selectedItems', copy)
      },
      onChangeAllItems(e) {
        let selected = e.target.checked
        this.$emit('update:selectedItems', selected ? this.dataSource : [])
      },
      expandItem(id) {
        if (this.inExpandedIds(id)) {
          this.expandedIds.splice(this.expandedIds.indexOf(id), 1)
        } else {
          this.expandedIds.push(id)
        }
      },
      inExpandedIds(id) {
        return this.expandedIds.indexOf(id) >= 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

  $gray: darken($gray, 20%);

  .gua-table {
    width: 100%; border-collapse: collapse; border-spacing: 0; border-bottom: 1px solid $gray;
    &.bordered { border: 1px solid $gray;
      td, th { border: 1px solid $gray; }
    }
    &.compact {
      td, th { padding: 4px; }
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) { background: white; }
          &:nth-child(even) { background: lighten($gray, 20%); }
        }
      }
    }
    th, td { border-bottom: 1px solid $gray; text-align: left; padding: 8px; }
    &-header { display: flex; align-items: center;}
    &-sorter { display: inline-flex; flex-direction: column; margin: 0 2px; cursor: pointer;
      svg { width: 10px; height: 10px; fill: $gray;
        &.active { fill: red; }
        &:first-child { position: relative; bottom: -1px; }
        &:nth-child(2) { position: relative; top: -1px; }
      }
    }
    &-wrapper { position: relative; padding-top: .1px; }
    &-copy { position: absolute; top: 0; left: 0; width: 100%; background-color: white; }
    &-loading {
      background: rgba(255, 255, 255, .8);
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
      svg { width: 50px; height: 50px; @include spin; }
    }
    &-expandIcon { width: 10px; height: 10px; }
    & &-center { text-align: center; }
  }
</style>
