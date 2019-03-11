<template>
  <div class="fe-tabs-panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log('tabs-panel says:' + name + 'has been selected')
    })
  }
}
</script>

<style scoped lang="less">
.fe-tabs-panel {
}
</style>