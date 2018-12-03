<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" @click="onClickClose" class="close">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
// Vue.component('xxx', {
//   name: '',
//   template: ''
// })
// 构造组件的选项
// 我不想两个 toast 中的相同选项相互影响
// 使用函数可以每次传个新选项
export default {
  name: 'GuaToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default() {
        return { text: '关闭', callback: undefined }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles () {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          `${this.$refs.wrapper.getBoundingClientRect().height}px`
      }) // trciky
    },
    execAutoClose () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    onClickClose () {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this) // 当前 toast 实例
      }
    },
    log () {
      console.log('测试')
    },
    close () {
      this.$el.remove()
      this.$destroy()
    }
  }
}
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba( 0, 0, 0, .75);
  .toast {
    font-size: $font-size; line-height: 1.8; min-height: $toast-min-height; border-radius: 4px;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex; align-items: center;
    background: $toast-bg; color: white; padding: 0 16px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    .message { padding: 8px 0; }
    .close { padding-left: 16px; flex-shrink: 0; cursor: pointer; }
    .line { height: 100%; border-left: 1px solid #666; margin-left: 16px; }
  }
</style>
