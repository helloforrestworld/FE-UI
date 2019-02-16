<template>
  <section class="fe-aside" :style="asideStyle">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'fe-aside',
  data() {
    return {}
  },
  props: {
    width: {
      type: Number || String,
      default: 200
    }
  },
  computed: {
    asideStyle() {
      return {
        width: this.width + 'px'
      }
    }
  }
}
</script>

<style scoped lang="less">
.fe-aside {}
</style>