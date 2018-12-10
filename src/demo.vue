<template>
  <div>hi~
    <g-button>hello</g-button>
    <g-cascader></g-cascader>
  </div>
</template>

<script>
import GButton from './button/button'
import GCascader from './cascader/cascader'
export default {
  name: 'demo',
  components: {
    GButton,
    GCascader
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
</style>
