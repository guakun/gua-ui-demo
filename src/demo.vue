<template>
    <div>hi~
        <g-button>hello</g-button>
    </div>
</template>

<script>
import GButton from './button'
export default {
    name: 'demo',
    components: {
        GButton
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
