<template>
  <div class="gua-sub-nav" :class="{active}" v-click-outside="close">
    <span class="gua-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="gua-sub-nav-icon" :class="{open}">
        <gua-icon name="right"></gua-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition @enter="enter"
                  @after-enter="afterEnter"
                  @leave="leave"
                  @after-leave="afterLeave"
      >
        <div class="gua-sub-nav-popover" v-show="open" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="gua-sub-nav-popover" v-show="open" :class="{vertical}">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
  import ClickOutside from '../click-outside'
  import GuaIcon from '../icon'

  export default {
    name: 'GuaSubNav',
    inject: ['root', 'vertical'],
    directives: {ClickOutside},
    components: {GuaIcon},
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        open: false
      }
    },
    computed: {
      active() {
        return this.root.namePath.indexOf(this.name) >= 0
      }
    },
    methods: {
      enter(el, done) {
        el.style.height = 'auto'
        let {height} = el.getBoundingClientRect()
        el.style.height = 0
        el.getBoundingClientRect()
        el.style.height = `${height}px`
        // 合并
        el.addEventListener('transitionend', () => {
          done()
        })
      },
      afterEnter(el) {
        el.style.height = 'auto'
      },
      leave(el, done) {
        let {height} = el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.getBoundingClientRect()
        el.style.height = 0
        // 可能会存在浏览器兼容性问题
        el.addEventListener('transitionend', () => {
          done()
        })
      },
      afterLeave(el) {
        el.style.height = 'auto'
      },
      onClick() {
        this.open = !this.open
      },
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        } else {
        }
      },
      close() {
        this.open = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

  .gua-sub-nav {
    position: relative;
    &.active {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid $blue;
      }
    }
    &-label {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-icon {
      display: none;
    }
    &-popover {
      background: #fff;
      position: absolute;
      top: 100%;
      left: 0;
      white-space: nowrap;
      margin-top: 4px;
      box-shadow: 0 0 3px fade_out(black, 0.8);
      border-radius: $border-radius;
      color: $light-color;
      font-size: $font-size;
      min-width: 8em;
      transition: height 300ms;
      &.vertical {
        position: static;
        border-radius: 0;
        border: 0 none;
        box-shadow: none;
        overflow: hidden;
      }
    }
  }

  .gua-sub-nav .gua-sub-nav {
    &.active {
      &:after {
        display: none;
      }
    }
    .gua-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
    .gua-sub-nav-icon {
      display: inline-flex;
      margin-left: 1em;
      > svg {
        fill: $light-color;
      }
      transition: transform 300ms;
      &.open {
        transform: rotate(180deg);
      }
    }
  }
</style>
