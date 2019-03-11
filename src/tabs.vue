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
      // this.tabItem(name)
    })
  },

  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  },

  methods: {
    tabItem(name) {
      this.$emit('update:selected', name)
    }
  }
}
</script>

<style scoped lang="less">
.fe-tabs {

}
</style>