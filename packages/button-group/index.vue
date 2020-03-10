<template>
  <div class="fe-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeButtonGroup',
  mounted () {
    for (const node of this.$el.children) {
      const nodeName = node.nodeName.toLowerCase()
      const nodeClass = node.className
      if (nodeName !== 'button' || nodeClass.indexOf('fe-button') === -1) {
        console.warn('fe-button-group子元素只能是fe-button')
      }
    }
  }
}
</script>
