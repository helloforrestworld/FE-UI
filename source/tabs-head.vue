<template>
  <div class="fe-tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name, vm) => {
      let width = vm.$el.offsetWidth
      let left = vm.$el.offsetLeft
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>
<style scoped lang="less">
@height: 40px;
@blue: #1c98ea;
@border-color: #ddd;
.fe-tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: @height;
  position: relative;
  border-bottom: 1px solid @border-color;
  & > .actions-wrapper {
    margin-left: auto;
  }
  & > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid @blue;
    transition: all 0.3s;
  }
}
</style>