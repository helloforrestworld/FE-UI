<template>
  <div class="fe-toast">
    <slot></slot>
    <div class="fe-toast-line"></div>
    <span class="fe-toast-close" v-if="this.showClose" @click="handleCloseClick">
      {{closeBtn.text}}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 5000
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeBtn: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: () => {}
        }
      }
    }
  },
  mounted() {
    console.log(this.$props)
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.duration)
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    },
    handleCloseClick() {
      this.close()
      this.closeBtn.callback()
    }
  }
}
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
  .fe-toast-line {
    margin: 0 6px;
    height: 100%;
    width: 1px;
    background: #666;
  }
  .fe-toast-close {
    cursor: pointer;
    position: relative;
    padding-left: 10px;
  }
}
</style>