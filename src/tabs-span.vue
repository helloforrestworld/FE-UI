<template>
  <div class="fe-tabs-span" :class="classes" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = this.name === name
    })
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style scoped lang="less">
.fe-tabs-span {
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 1em;
  &.active {
    background: red;
  }
}
</style>