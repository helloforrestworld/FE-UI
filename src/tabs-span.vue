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
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style scoped lang="less">
@blue: #1c98ea;
.fe-tabs-span {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  &.active {
    color: @blue;
  }
}
</style>