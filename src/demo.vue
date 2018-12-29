<template>
  <div class="demo">
    <gua-nav :selected.sync="selected">
      <gua-nav-item name="home">首页</gua-nav-item>
      <gua-nav-item name="about">关于</gua-nav-item>
      <gua-nav-item name="hire">招聘</gua-nav-item>
    </gua-nav>
  </div>
</template>

<script>
import GuaNav from './nav/nav'
import GuaNavItem from './nav/nav-item'
import GuaSubNav from './nav/sub-nav'

export default {
  name: 'demo',
  components: { GuaNav, GuaNavItem, GuaSubNav },
  data () {
    return {
      selected: ['home']
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
