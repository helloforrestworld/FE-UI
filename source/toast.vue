<template>
  <div class="fe-toast-wrapper" :class="toastClass">
    <div class="fe-toast" ref="wrapper">
      <div class="fe-message" v-if="enableHtml" v-html="$slots.default[0]"></div>
      <div class="fe-message" v-else>{{$slots.default[0]}}</div>
      <div class="fe-toast-line" ref="line"></div>
      <span class="fe-toast-close" v-if="this.showClose" @click="handleCloseClick">
        {{closeBtn.text}}
      </span>
    </div>
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
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) !== -1
      }
    }
  },
  mounted() {
    this.updateStyle()
    this.initAutoClose()
  },
  computed: {
    toastClass() {
      return {
        [`position-${this.position}`] : true
      }
    }
  },
  methods: {
    initAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.duration)
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px'
      })
    },
    handleCloseClick() {
      this.close()
      typeof this.closeBtn.callback === 'function' && this.closeBtn.callback()
    },
    close() {
      this.$el.remove()
      this.$destroy()
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
@keyframes slide-top {
  0% {transform: translateY(-100%);}
  100% {transform: translateY(0);}
}
@keyframes slide-bottom {
  0% {transform: translateY(100%);}
  100% {transform: translateY(0);}
}
@keyframes fade-in {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.fe-toast-wrapper {
  position: fixed;
  left: 50%;
  @animation-duration: 0.3s;
  &.position-top {
    top: 0;
    transform: translateX(-50%);
    .fe-toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-top @animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    .fe-toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-bottom @animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .fe-toast {
      animation: fade-in @animation-duration;
    }
  }
}
.fe-toast {
  min-height: @toast-height;color: @toast-font-color;font-size: @toast-font-size;line-height: @toast-line-height;background: @toast-bg;box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);border-radius: 4px;display: flex;align-items: center;padding: 0 16px;
  .fe-message {padding: 6px 0;}
  .fe-toast-line {flex-shrink: 0;margin-left: 16px;width: 1px;background: #666;}
  .fe-toast-close {flex-shrink: 0;cursor: pointer;position: relative;margin-left: 16px;}
}
</style>