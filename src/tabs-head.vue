<template>
  <div class="fe-tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', name => {})
  }
}
</script>
<style scoped lang="less">
.fe-tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  & > .actions-wrapper {
    margin-left: auto;
  }
}
</style>