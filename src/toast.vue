<template>
  <div class="fe-toast">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
@toast-height: 40px;
@toast-font-size: 14px;
@toast-line-height: 1.8;
@toast-font-color: #fff;
@toast-bg: rgba(0, 0, 0, 0.75);
.fe-toast {
  height: @toast-height;
  color: @toast-font-color;
  font-size: @toast-font-size;
  line-height: @toast-line-height;
  background: @toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  padding: 0 16px;
}
</style>