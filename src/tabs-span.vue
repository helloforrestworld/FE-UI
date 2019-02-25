<template>
  <div class="fe-tabs-span">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
.fe-tabs-span {
}
</style>