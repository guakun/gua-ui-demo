<template>
  <div class="demo">
    <gua-nav :selected.sync="selected" >
      <gua-nav-item name="home">首页</gua-nav-item>
      <gua-sub-nav name="about">
        <template slot="title">关于</template>
        <gua-nav-item name="culture">企业文化</gua-nav-item>
        <gua-nav-item name="developers">开发团队</gua-nav-item>
        <gua-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <gua-nav-item name="wechat">微信</gua-nav-item>
          <gua-nav-item name="qq">QQ</gua-nav-item>
          <gua-sub-nav name="phone">
            <template slot="title">手机</template>
            <gua-nav-item name="cb">移动</gua-nav-item>
            <gua-nav-item name="cu">联通</gua-nav-item>
            <gua-nav-item name="cn">电信</gua-nav-item>
          </gua-sub-nav>
        </gua-sub-nav>
      </gua-sub-nav>
      <gua-nav-item name="hire">招聘</gua-nav-item>
    </gua-nav>
    <gua-nav :selected.sync="selected" :vertical="true" style="margin-top: 70px; width: 200px; margin-left: 20px;">
      <gua-nav-item name="home">首页</gua-nav-item>
      <gua-sub-nav name="about">
        <template slot="title">关于</template>
        <gua-nav-item name="culture">企业文化</gua-nav-item>
        <gua-nav-item name="developers">开发团队</gua-nav-item>
        <gua-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <gua-nav-item name="wechat">微信</gua-nav-item>
          <gua-nav-item name="qq">QQ</gua-nav-item>
          <gua-sub-nav name="phone">
            <template slot="title">手机</template>
            <gua-nav-item name="cb">移动</gua-nav-item>
            <gua-nav-item name="cu">联通</gua-nav-item>
            <gua-nav-item name="cn">电信</gua-nav-item>
          </gua-sub-nav>
        </gua-sub-nav>
      </gua-sub-nav>
      <gua-nav-item name="hire">招聘</gua-nav-item>
    </gua-nav>
    <p>你好, 我是中文</p>
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
      selected: ['culture']
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

  .demo {}
</style>
