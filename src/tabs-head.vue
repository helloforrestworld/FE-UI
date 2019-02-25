<template>
  <div class="fe-tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.fe-tabs-head {
  display: flex;
}
</style>