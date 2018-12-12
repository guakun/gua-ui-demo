<template>
  <div class="demo">
    <p>{{selected && selected[0] && selected[0].name || '空' }}</p>
    <p>{{selected && selected[1] && selected[1].name || '空' }}</p>
    <p>{{selected && selected[2] && selected[2].name || '空' }}</p>
    <g-cascader :source.sync="source" popover-height="170px" :selected.sync="selected"
      ></g-cascader>
  </div>
</template>

<script>
import GCascader from './cascader/cascader'
import db from '../tests/fixtures/db'

function ajax (parent_id = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parent_id)
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 20)
  })
}

export default {
  name: 'demo',
  components: {
    GCascader
  },
  data () {
    return {
      selected: [],
      source: []
    }
  },
  created () {
    this.source = [
        {
          name: '浙江',
          children: [
            { name: '杭州', children: [
              { name: '西湖' },
              { name: '拱墅' },
              { name: '滨江' },
            ]},
            { name: '义乌', children: [
              {name: '义乌区1'},
              {name: '义乌区2'},
              {name: '义乌区3'},
            ]},
            { name: '宁波' },
          ]
        },
        {
          name: '山东',
          children: [
            { name: '济南' },
            { name: '青岛' },
            { name: '潍坊' },
          ]
        },
        {
          name: '北京',
          children: [
            { name: '大兴' },
            { name: '五道口' },
            { name: 'soho' },
          ]
        },
        { name: '广州' }
      ]
  },
  methods: {
    loadData ( {id}, updateSource) {
      ajax(id).then(result => {
        updateSource(result)
      })
    },
    xxx () {
      ajax(this.selected[0].id).then(result => {
        let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
        this.$set(lastLevelSelected, 'children', result)
      })
    }
  }
}
</script>

<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-size: var(--font-size);
    font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","STHeitiSC-Light","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  html {
    --font-size: 14px;
  }

  .demo {
    padding: 70px;
  }
</style>
