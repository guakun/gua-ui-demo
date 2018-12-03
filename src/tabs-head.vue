<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line" v-if="x"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuaTabsHead',
  inject: ['eventBus'],
  data () {
    return {
      x: false
    }
  },
  mounted () {
    this.eventBus.$on('update:selected', (name, vm) => {
      this.x = true
      // 新增一个 [更新UI任务] 到任务队列里面
      console.log(this.x)
      this.$nextTick(() => {
        let { width, height, top, left } = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px` // 没有加速
        // this.$refs.line.style.transform = `translateX(${left}px)` // 有加速
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  .tabs-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: $tab-height;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      border-radius: 6px;
      transition: all 550ms;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>
