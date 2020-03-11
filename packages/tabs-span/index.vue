<template>
  <div class="fe-tabs-span" :class="classes" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeTabsSpan',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      this.active = this.name === name
    })
  },
  computed: {
    classes () {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  methods: {
    onClick () {
      if (this.disabled) return
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>
