<template>
  <div class="fe-toast-wrapper" :class="toastClass">
    <div class="fe-toast" ref="wrapper">
      <div class="fe-toast__message" v-if="enableHtml" v-html="$slots.default[0]"></div>
      <div class="fe-toast__message" v-else>{{$slots.default[0]}}</div>
      <div class="fe-toast__line" v-if="showClose" ref="line"></div>
      <span class="fe-toast__close" v-if="showClose" @click="handleCloseClick">
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
      default () {
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
      validator (value) {
        return ['top', 'middle', 'bottom'].indexOf(value) !== -1
      }
    }
  },
  mounted () {
    this.updateStyle()
    this.initAutoClose()
  },
  computed: {
    toastClass () {
      return {
        [`fe-toast--position-${this.position}`]: true
      }
    }
  },
  methods: {
    initAutoClose () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.duration)
      }
    },
    updateStyle () {
      this.$nextTick(() => {
        this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px'
      })
    },
    handleCloseClick () {
      this.close()
      typeof this.closeBtn.callback === 'function' && this.closeBtn.callback()
    },
    close () {
      this.$el.remove()
      this.$destroy()
    }
  }
}
</script>
