<template>
  <div class="demo">
    <g-popover>
      <template><g-button>点我</g-button></template>
      <template slot="content">弹出内容 </template>
    </g-popover>
    <p>{{selected && selected[0] && selected[0].name || '空' }}</p>
    <p>{{selected && selected[1] && selected[1].name || '空' }}</p>
    <p>{{selected && selected[2] && selected[2].name || '空' }}</p>
    <g-cascader :source.sync="source" popover-height="170px" :selected.sync="selected"
      :load-data=loadData></g-cascader>
    <div style="margin-top: 20px;">
      <g-cascader :source.sync="source" popover-height="170px" :selected.sync="selected"
        :load-data=loadData></g-cascader>
    </div>
  </div>
</template>

<script>
import db from '../tests/fixtures/db'
import Cascader from './cascader/cascader'
import Popover from './popover'
import Button from './button/button'
import { removeListener } from './click-outside'

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
    'g-cascader': Cascader,
    'g-popover': Popover,
    'g-button': Button
  },
  data () {
    return {
      selected: [],
      source: []
    }
  },
  created () {
    ajax(0).then(result => {
      this.source = result
    })
  },
  destroyed () {
    removeListener()
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
