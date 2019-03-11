<template>
  <div class="fe-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1
      }
    }
  },

  data() {
    return {
      eventBus: new Vue()
    }
  },

  provide() {
    return {
      eventBus: this.eventBus
    }
  },

  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log('tabs says:' + name + 'has been selected')
    })
  },

  methods: {
    tabItem() {
      this.$emit('update:selected', 'xxx')
    }
  }
}
</script>

<style scoped lang="less">
.fe-tabs {
}
</style>