<template>
  <div class="gua-table-wrapper">
    <table class="gua-table" :class="{bordered, compact, striped}">
      <thead>
      <tr>
        <th><input type="checkbox" @change="onChangeAllItems" ref="allChecked"/></th>
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
    watch: {
      selectedItems() {
        if (this.selectedItems.length === this.dataSource.length) {
          this.$refs.allChecked.indeterminate =  false
          this.$refs.allChecked.checked =  true
        } else if (this.selectedItems.length === 0) {
          this.$refs.allChecked.indeterminate =  false
          this.$refs.allChecked.checked =  false
        } else {
          this.$refs.allChecked.indeterminate =  true
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
