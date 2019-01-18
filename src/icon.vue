<template>
  <svg class="fe-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>name
export default {
  props: ['name']
}
</script>

<style lang="less" scoped>
.fe-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>