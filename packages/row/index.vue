<template>
  <div class="fe-row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeRow',
  props: {
    gutter: [String, Number],
    align: String
  },
  mounted () {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  },
  computed: {
    rowStyle () {
      const { gutter } = this
      return {
        marginLeft: -gutter + 'px'
      }
    },
    rowClass () {
      const { align } = this
      return [
          `fe-row--align-${align}`
      ]
    }
  }
}
</script>
