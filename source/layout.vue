<template>
  <section class="fe-layout" :class="layoutClass">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'fe-layout',
  data() {
    return {
      layoutClass: {
        hasAside: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'fe-aside') {
        this.layoutClass.hasAside = true
      }
    })
  }
}
</script>

<style scoped lang="less">
.fe-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasAside {
    flex-direction: row;
  }
}
</style>