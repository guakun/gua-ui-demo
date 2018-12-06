<template>
  <div class="button-demos">
    <g-button>默认按钮</g-button>  
    <g-button icon="settings">默认按钮</g-button>  
    <g-button icon="settings" loading>默认按钮</g-button>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>

<script>
import Button from '../../../src/button'

export default {
  components: {
    gButton: Button
  },
  data () {
    return {
      content: `
        <g-button>默认按钮</g-button>  
        <g-button icon="settings">默认按钮</g-button>  
        <g-button icon="settings" loading>默认按钮</g-button>
      `
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
