<template>
  <div class="fe-tabs-span" @click="xxx">
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
  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log('tabs-span says:' + name + 'has been selected')
    })
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
}
</style>