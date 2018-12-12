<template>
  <div class="demo">
    <p>{{selected && selected[0] && selected[0].name || '空' }}</p>
    <p>{{selected && selected[1] && selected[1].name || '空' }}</p>
    <p>{{selected && selected[2] && selected[2].name || '空' }}</p>
    <g-cascader :source="source" popover-height="170px" :selected.sync="selected"
      @update:selected="xxx"></g-cascader>
  </div>
</template>

<script>
import GCascader from './cascader/cascader'
import db from '../tests/fixtures/db'

function ajax1 (parent_id = 0, success, fail) {
  let result = db.filter((item) => item.parent_id === parent_id)
  console.log(success)
  let id = setTimeout(() => {
    success(result)
  }, 3000)
  return id
}

function ajax2 (parent_id = 0) {
  return new Promise((resolve, reject) => {
    let result = db.filter((item) => item.parent_id === parent_id)
    resolve(result)
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
    // ajax1(0, (result) => {
    //   this.source = result
    // })
    ajax2(0).then(result => {
      this.source = result
    })
    ajax2(1).then(result => {
      console.log(result)
    })
  },
  methods: {
    xxx () {
      ajax
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
