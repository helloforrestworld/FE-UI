<template>
  <div class="fe-row" :style="rowStyle">
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
    },
    computed: {
      rowStyle() {
        let {gutter} = this
        return {
          marginLeft: -gutter + 'px'
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .fe-row {
    display: flex;
  }
</style>