<template>
  <div class="fe-tabs-panel" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeTabsPanel',
  props: {
    name: {
      type: [Number, String],
      required: true
    }
  },
  inject: ['eventBus'],
  created () {
    this.eventBus.$on('update:selected', (name) => {
      this.active = this.name === name
    })
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return {
        active: this.active
      }
    }
  }
}
</script>
