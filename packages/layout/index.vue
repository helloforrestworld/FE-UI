<template>
  <section class="fe-layout" :class="layoutClass">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'FeLayout',
  data () {
    return {
      layoutClass: {
        'fe-layout--hasAside': false
      }
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      console.log(vm.$options.name)
      if (vm.$options.name === 'FeAside') {
        this.layoutClass['fe-layout--hasAside'] = true
      }
    })
  }
}
</script>
