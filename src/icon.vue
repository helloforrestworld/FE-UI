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

<style scoped lang="less">
.fe-icon {
  width: 1em;
  height: 1em;
}
</style>