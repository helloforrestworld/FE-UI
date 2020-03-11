<template>
  <div class="fe-tabs-head">
    <slot></slot>
    <div class="fe-tabs-head__line" ref="line"></div>
    <div class="fe-tabs-head__actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeTabsHead',
  inject: ['eventBus'],
  mounted () {
    this.eventBus.$on('update:selected', (name, vm) => {
      const width = vm.$el.offsetWidth
      const left = vm.$el.offsetLeft
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>
