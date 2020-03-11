<template>
  <div class="fe-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'FeTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1
      }
    }
  },

  data () {
    return {
      eventBus: new Vue()
    }
  },

  provide () {
    return {
      eventBus: this.eventBus
    }
  },

  created () {
    this.eventBus.$on('update:selected', (name) => {
      this.tabItem(name)
    })
  },

  mounted () {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'FeTabsHead') {
        vm.$children.forEach(childVm => {
          if (childVm.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
    })
  },

  methods: {
    tabItem (name) {
      this.$emit('update:selected', name)
    }
  }
}
</script>
