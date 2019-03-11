<template>
  <div class="fe-tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log('tabs-head says:' + name + 'has been selected')
    })
  }
}
</script>
<style scoped lang="less">
.fe-tabs-head { display: flex; }
</style>