<template>
  <div class="fe-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  const validator = (value => {
    const keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if(!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  })

  export default {
    name: 'fe-col',
    props: {
      span: Number | String,
      offset: Number | String,
      phone: {
        type: Object,
        validator
      },
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
      }
    },
    data() {
      return {
        gutter: 0
      }
    },

    methods: {
      createClasses(obj, str) {
        let array = []
        if (!obj) return array
        if (obj.span) { array.push(`fe-col-${str}${obj.span}`) }
        if (obj.offset) { array.push(`fe-offset-${str}${obj.offset}`) }
        return array
      }
    },

    computed: {
      colStyle() {
        let {gutter} = this
        return {
          paddingLeft: gutter + 'px'
        }
      },
      colClass() {
        let {span, offset, ipad, narrowPc, pc, widePc, extraPc} = this
        const createClasses = this.createClasses
        return [
          ...createClasses({span, offset}, ''),
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

<style scoped lang="less">
  // 单行网格数
  @span: 24;
  .fe-col {
    min-height: 36px;
  }
  // 批量生成 .fe-col-1 ~~ .fe-col-24
  .col-loop(@len, @i:1) when (@i <= @len) {
    .fe-col-@{i} {
      width: (@i / 24px) * 100%;
    }
    .col-loop(@len, (@i + 1));
  }
  .col-loop(@span, 1);
  // 批量生成 .fe-offset-1 ~~ .fe-offset-24
  .offset-loop(@len, @i:1) when (@i <= @len) {
    .fe-offset-@{i} {
      margin-left: (@i / 24px) * 100%;
    }
    .offset-loop(@len, (@i + 1));
  }
  .offset-loop(@span, 1);

  @media (min-width: 577px) {
    .col-loop(@len, @i:1) when (@i <= @len) {
      .fe-col-ipad-@{i} {
        width: (@i / 24px) * 100%;
      }
      .col-loop(@len, (@i + 1));
    }
    .col-loop(@span, 1);
    .offset-loop(@len, @i:1) when (@i <= @len) {
      .fe-offset-ipad-@{i} {
        margin-left: (@i / 24px) * 100%;
      }
      .offset-loop(@len, (@i + 1));
    }
    .offset-loop(@span, 1);
  }

  @media (min-width: 759px) {
    .col-loop(@len, @i:1) when (@i <= @len) {
      .fe-col-narrowPc-@{i} {
        width: (@i / 24px) * 100%;
      }
      .col-loop(@len, (@i + 1));
    }
    .col-loop(@span, 1);
    .offset-loop(@len, @i:1) when (@i <= @len) {
      .fe-offset-narrowPc-@{i} {
        margin-left: (@i / 24px) * 100%;
      }
      .offset-loop(@len, (@i + 1));
    }
    .offset-loop(@span, 1);
  }

  @media (min-width: 993px) {
    .col-loop(@len, @i:1) when (@i <= @len) {
      .fe-col-pc-@{i} {
        width: (@i / 24px) * 100%;
      }
      .col-loop(@len, (@i + 1));
    }
    .col-loop(@span, 1);
    .offset-loop(@len, @i:1) when (@i <= @len) {
      .fe-offset-pc-@{i} {
        margin-left: (@i / 24px) * 100%;
      }
      .offset-loop(@len, (@i + 1));
    }
    .offset-loop(@span, 1);
  }

  @media (min-width: 1201px) {
    .col-loop(@len, @i:1) when (@i <= @len) {
      .fe-col-widePc-@{i} {
        width: (@i / 24px) * 100%;
      }
      .col-loop(@len, (@i + 1));
    }
    .col-loop(@span, 1);
    .offset-loop(@len, @i:1) when (@i <= @len) {
      .fe-offset-widePc-@{i} {
        margin-left: (@i / 24px) * 100%;
      }
      .offset-loop(@len, (@i + 1));
    }
    .offset-loop(@span, 1);
  }

  @media (min-width: 1601px) {
    .col-loop(@len, @i:1) when (@i <= @len) {
      .fe-col-extraPc-@{i} {
        width: (@i / 24px) * 100%;
      }
      .col-loop(@len, (@i + 1));
    }
    .col-loop(@span, 1);
    .offset-loop(@len, @i:1) when (@i <= @len) {
      .fe-offset-extraPc-@{i} {
        margin-left: (@i / 24px) * 100%;
      }
      .offset-loop(@len, (@i + 1));
    }
    .offset-loop(@span, 1);
  }
</style>