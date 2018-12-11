<template>
  <div class="demo">
    <g-cascader :source="source"></g-cascader>
  </div>
</template>

<script>
import GCascader from './cascader/cascader'

export default {
  name: 'demo',
  components: {
    GCascader
  },
  data () {
    return {
      source: [
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
