<template>
  <div class="demo">
    <gua-pager :total-page="10" :current-page.sync="currentPage"></gua-pager>
  </div>
</template>

<script>
  import GuaPager from './pager'

  export default {
    name: 'demo',
    components: {GuaPager},
    data() {
      return {
        selected: ['culture'],
        currentPage: 20
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
