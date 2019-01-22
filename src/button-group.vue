<template>
  <div class="fe-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let nodeName = node.nodeName.toLowerCase()
      let nodeClass = node.className
      if (nodeName !== 'button' || nodeClass.indexOf('fe-button') === -1) {
        console.warn(`fe-button-group子元素只能是fe-button`)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @button-height: 32px;
  @font-size: 14px;
  @button-bg: white;
  @button-active-bg: #eee;
  @border-radius: 4px;
  @color: #333;
  @border-color: #999;
  @border-color-hover: #666;
  .fe-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .fe-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: @border-radius;
        border-bottom-left-radius: @border-radius;
      }
      &:last-child {
        border-top-right-radius: @border-radius;
        border-bottom-right-radius: @border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>