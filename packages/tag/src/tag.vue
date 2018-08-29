<template>
  <transition name="fe-zoom-in-center">
    <div class="fe__tag" :class="'fe__tag--'+color">
      <span class="fe__tag--desc">
        <slot></slot>
      </span>
      <i class="fe-icon-close2 fe__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FeTag',
  props: {
    closable: Boolean,
    color: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      isclosed: false
    }
  },
  methods: {
    hiddenTag () {
      this.isclosed = true
      this.$emit('close')
    }
  }
}
</script>
