<template>
  <div class="gua-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="gua-sticky" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuaSticky",
    props: {
      distance: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        sticky: false,
        height: undefined,
        width: undefined,
        left: undefined,
        top: undefined,
        timerId: null
      }
    },
    computed: {
      classes() {
        return {
          sticky: this.sticky
        }
      }
    },
    mounted() {
      // js 只做两件事: 请求数据， 操作 dom
      this.windowScrollHandler = this._windowScrollHandler.bind(this)
      window.addEventListener('scroll', this.windowScrollHandler)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.windowScrollHandler)
    },
    methods: {
      offsetTop() {
        let {top, height} = this.$refs.wrapper.getBoundingClientRect()
        return {top: top + window.scrollY, height} // 距离文档顶部的位置
      },
      _windowScrollHandler() {
        let x = () => {
          let {top} = this.offsetTop()
          console.log(window.scrollY)
          if (window.scrollY > top - this.distance) {
            let {height, left, width} = this.$refs.wrapper.getBoundingClientRect()
            this.height = height + 'px'
            this.left = left + 'px'
            this.width = width + 'px'
            this.top = this.distance + 'px'
            this.sticky = true
          } else {
             this.height = undefined
            this.left = undefined
            this.width = undefined
            this.top = undefined
            this.sticky = false
          }
        }
        // if (this.timerId) {
        //   console.log('砸掉闹钟')
        //   window.clearTimeout(this.timerId) }
        // this.timerId = setTimeout(x, 200)
        x()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gua-sticky {
    &.sticky {
      background-color: red;
      position: fixed; top: 0; left: 0;
      width: 100%;
    }
  }
</style>
