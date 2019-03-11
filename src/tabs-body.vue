<template>
  <div class="fe-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log('tabs-body says:' + name + 'has been selected')
    })
  }
}
</script>

<style scoped lang="less">
.fe-tabs-body {
}
</style>