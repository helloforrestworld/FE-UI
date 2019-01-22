<template>
  <div class="fe-row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      gutter: String | Number,
      align: String
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
      },
      rowClass() {
        let {align} = this
        return [
          `align-${align}`
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .fe-row {
    display: flex;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: center;
    }
    &.align-center {
      justify-content: flex-end;
    }
  }
</style>