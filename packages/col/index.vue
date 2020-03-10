<template>
  <div class="fe-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const validator = value => {
  const keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}

export default {
  name: 'FeCol',
  props: {
    span: [Number, String],
    offset: [Number, String],
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    },
    extraPc: {
      type: Object,
      validator
    }
  },
  data () {
    return {
      gutter: 0
    }
  },

  methods: {
    createClasses (obj, str) {
      const array = []
      if (!obj) return array
      if (obj.span) { array.push(`fe-col-${str}${obj.span}`) }
      if (obj.offset) { array.push(`fe-offset-${str}${obj.offset}`) }
      return array
    }
  },

  computed: {
    colStyle () {
      const { gutter } = this
      return {
        paddingLeft: gutter + 'px'
      }
    },
    colClass () {
      const { span, offset, ipad, narrowPc, pc, widePc, extraPc } = this
      const createClasses = this.createClasses
      return [
        ...createClasses({ span, offset }, ''),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrowPc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'widePc-'),
        ...createClasses(extraPc, 'extraPc-')
      ]
    }
  }
}
</script>
