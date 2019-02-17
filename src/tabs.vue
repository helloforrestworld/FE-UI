<template>
  <div class="fe-tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  methods: {
    tabItem() {
      this.$emit('update:selected', '')
    }
  }
}
</script>

<style scoped lang="less">
.fe-tabs {
}
</style>