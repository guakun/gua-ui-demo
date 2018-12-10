<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
      :class="{[`position-${position}`]: true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'GuluPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      visible: false,
    }
  },
  mounted () {
    if (this.trigger == 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  beforeDestroy () {
    if (this.trigger == 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    positionContent () {
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      const { height: height2 } = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {
          top: top + window.scrollY,
          left: window.scrollX + left,
        },
        bottom: {
          top: window.scrollY + height + top,
          left: window.scrollX + left,
        },
        left: {
          top: window.scrollY + (height - height2) / 2 + top,
          left: window.scrollX + left,
        },
        right: {
          top: window.scrollY + (height - height2) / 2 + top,
          left: window.scrollX + left + width,
        },
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
    },
    onClickDocument (e) {
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) { return }
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
      ) { return }
      this.close()
    },
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close () {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0 , 0, 0, 0.5));
    background: #fff;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &:before, &::after {
      content: '';
      display: block;
      position: absolute;
      border: 10px solid transparent;
      width: 0; height: 0;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &:before, &::after {
        left: 10px;
        border-bottom: none;
      }
      &:before {
        border-top-color: $border-color;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &:before, &::after {
        left: 10px;
        border-top: none;
      }
      &:before {
        border-bottom-color: $border-color;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &:before, &::after {
        top: 50%;
        transform: translateY(-50%);
        border-right: none;
      }
      &:before {
        border-left-color: $border-color;
        left: 100%;
      }
      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &:before, &::after {
        transform: translateY(-50%);
        top: 50%;
        border-left: none;
      }
      &:before {
        border-right-color: $border-color;
        right: 100%;
      }
      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }

  }
</style>
