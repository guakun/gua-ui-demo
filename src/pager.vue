<template>
  <div class="gua-pager" :class="{hide: hideIfOnePage && totalPage <= 1}">
    <span class="gua-pager-nav prev" :class="{disabled: currentPage===1}"
          @click="onClickPage(currentPage-1)">
      <gua-icon name="left"></gua-icon>
    </span>
    <template v-for="page in pages" class="gua-pager-item">
      <template v-if="page===currentPage">
        <span class="gua-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page==='...'">
        <gua-icon class="gua-pager-separator" name="dots">?</gua-icon>
      </template>
      <template v-else>
        <span class="gua-pager-item other" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="gua-pager-nav next" :class="{disabled: currentPage===totalPage}"
          @click="onClickPage(currentPage+1)">
      <gua-icon name="right"></gua-icon>
    </span>
  </div>
</template>

<script>
  import GuaIcon from './icon'

  export default {
    name: "GuaPager",
    components: {
      GuaIcon
    },
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      pages() {
        return unique([1, this.totalPage,
          this.currentPage,
          this.currentPage - 1, this.currentPage - 2,
          this.currentPage + 1, this.currentPage + 2]
          .filter(n => n >= 1 && n <= this.totalPage)
          .sort((a, b) => a - b))
          .reduce((prev, current, index, array) => {
            prev.push(current)
            array[index + 1] && array[index + 1] - array[index] > 1 && prev.push('...')
            return prev
          }, [])
      }
    },
    methods: {
      onClickPage(n) {
        if (n >= 1 && n <= this.totalPage) {
          this.$emit('update:currentPage', n)
        }
      }
    }
  }

  function unique(array) {
    const object = []
    array.map(number => {
      object[number] = true
    })
    return Object.keys(object).map(s => parseInt(s, 10))
  }
</script>

<style lang="scss" scoped>
  @import "var";

  $width: 20px;
  $height: 20px;
  $font-size: 12px;
  .gua-pager {
    &.hide {display: none;}
    display: flex; justify-content: flex-start; align-items: center; user-select: none;
    &-separator {
      width: $width;
      font-size: $font-size;
    }
    &-item {
      min-width: $width; height: $height; font-size: $font-size;
      border: 1px solid $gray; border-radius: $border-radius; padding: 0 4px; display: inline-flex;
      justify-content: center; align-items: center; margin: 0 4px; cursor: pointer;
      &.current, &:hover { border-color: $blue; }
      &.current { cursor: default; }
    }
    &-nav {
      display: inline-flex; height: $height; width: $width; border-radius: $border-radius; font-size: $font-size;
      justify-content: center; align-items: center; margin: 0 4px; background: $gray;
      &.disabled {
        svg {
          fill: darken($gray, 20%);
        }
      }
    }
  }
</style>
