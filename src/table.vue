<template>
  <div class="gua-table-wrapper">
    <table class="gua-table" :class="{bordered, compact, striped}">
      <thead>
      <tr>
        <th><input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected"/></th>
        <th v-if="numberVisible">#</th>
        <th v-for="column in columns" :key="column.field">{{column.text}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item,index in dataSource" :key="item.id">
        <td>
          <input type="checkbox" @change="onChangeItem(item, index, $event)"
                 :checked="inSelectedItems(item)"/>
        </td>
        <td v-if="numberVisible">{{index+1}}</td>
        <template v-for="column in columns">
          <td :key="column.field">{{item[column.field]}}</td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "GuaTable",
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
      }
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

  $gray: darken($gray, 20%);
  .gua-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $gray;
    &.bordered {
      border: 1px solid $gray;
      td, th {
        border: 1px solid $gray;
      }
    }
    &.compact {
      td, th {
        padding: 4px;
      }
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }
          &:nth-child(even) {
            background: lighten($gray, 20%);
          }
        }
      }
    }
  }

  th, td {
    border-bottom: 1px solid $gray;
    text-align: left;
    padding: 8px;
  }

</style>
