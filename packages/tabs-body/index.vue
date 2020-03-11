<template>
  <div class="fe-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeTabsBody',
  inject: ['eventBus'],
  created () {
    this.eventBus.$on('update:selected', (name) => {
    })
  }
}
</script>
