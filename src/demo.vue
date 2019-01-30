<template>
  <div>
    {{selected}}
    <div class="demo">
      <gua-table :columns="columns" :data-source="dataSource" :selected-items.sync="selected" bordered
                 :order-by.sync="orderBy" @update:orderBy="x" :loading="loading" :height="400"
                 expand-field="description" checkable>
        <template slot-scope="{item}">
          <button @click="edit(item)">编辑</button>
          <button @click="view(item)">查看</button>
          <button @click="view(item)">删除</button>
        </template>
      </gua-table>
    </div>
    <div class="demo">
      <gua-table :columns="columns" :data-source="dataSource" bordered :striped="false" compact></gua-table>
    </div>
    <div class="demo">
      <gua-pager :total-page="10" :current-page.sync="currentPage"></gua-pager>
    </div>
  </div>

</template>

<script>
  import GuaPager from './pager'
  import GuaTable from './table'

  export default {
    name: 'demo',
    components: {GuaPager, GuaTable},
    data() {
      return {
        selected: [],
        currentPage: 20,
        columns: [
          {text: '姓名', field: 'name', width: 100},
          {text: '分数', field: 'score'},
        ],
        orderBy: { // true - 开启排序, 但是不确定 asc desc
          name: 'asc',
          score: 'desc'
        },
        dataSource: [
          {id: 1, name: 'guagua', score: 100},
          {id: 2, name: 'lulu', score: 100},
          {id: 3, name: 'yiyi', score: 98},
          {id: 4, name: 'yinyin', score: 97, description: 'sjjclmxcynyn'},
          {id: 5, name: '方方', score: 100},
          {id: 6, name: '圆圆', score: 100},
          {id: 7, name: '美国队长', score: 98},
          {id: 8, name: '冬兵', score: 97},
          {id: 9, name: '死侍', score: 100},
          {id: 10, name: '毒液', score: 100},
          {id: 11, name: '钢铁侠', score: 98},
          {id: 12, name: '大黄蜂', score: 97},
          {id: 13, name: '擎天柱', score: 100},
          {id: 14, name: '蜘蛛侠', score: 100},
          {id: 15, name: '蝙蝠侠', score: 98},
          {id: 16, name: '超人', score: 97, description: 'dczvqdxcicrf'},
        ],
        loading: false
      }
    },
    methods: {
      x() {
        console.log('x') // /api/users?score='desc'
        console.log(this.orderBy)
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 700)
      },
      edit(item) {
        alert(`开始编辑${JSON.stringify(item)}`)
      },
      view(item) {
        alert(`开始查看${JSON.stringify(item)}`)
      }
    }
  }
</script>

<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-size: var(--font-size);
    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", "STHeitiSC-Light", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  html {
    --font-size: 20x;
  }

  .demo {
    margin: 20px;
  }
</style>
