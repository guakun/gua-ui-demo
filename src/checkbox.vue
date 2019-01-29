<template>
  <label class="gua-checkbox-wrapper">
    <span class="gau-checkbox">
      <input type="checkbox" class="gua-checkbox-input" ref="checkbox">
      <span class="gua-checkbox-inner"></span>
    </span>
    <span>
      <slot></slot>default
    </span>
  </label>
</template>

<script>
  export default {
    name: "GuaCheckbox",
    props: {
      indeterminate: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      indeterminate(newVal) {
        this.$refs.checkbox.indeterminate = newVal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gua-checkbox-wrapper {
    border: 1px solid red;
    cursor: pointer;
    > span:last-child {
      border: 1px solid red;
      padding: 0 8px;
    }
  }
</style>
