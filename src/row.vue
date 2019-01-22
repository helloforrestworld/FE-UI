<template>
  <div class="row" :style="{marginLeft: -gutter + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      gutter: String | Number
    },
    mounted() {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="less">
  .row {
    display: flex;
  }
</style>