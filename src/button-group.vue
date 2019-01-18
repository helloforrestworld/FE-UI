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
.fe-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .fe-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>