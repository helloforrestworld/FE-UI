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
    computed: {
      colStyle() {
        let {gutter} = this
        return {
          paddingLeft: gutter + 'px'
        }
      },
      colClass() {
        let {span, offset, phone, ipad, narrowPc, pc, widePc} = this
        return [
          span && `fe-col-${span}`,
          offset && `fe-offset-${offset}`,
          ...(phone ? [span && `fe-col-phone-${phone.span}`]: []),
          ...(phone ? [offset && `fe-col-phone-${phone.offset}`]: []),
          ...(ipad ? [span && `fe-col-ipad-${ipad.span}`]: []),
          ...(ipad ? [offset && `fe-col-ipad-${ipad.offset}`]: []),
          ...(narrowPc ? [span && `fe-col-narrowPc-${narrowPc.span}`]: []),
          ...(narrowPc ? [offset && `fe-col-narrowPc-${narrowPc.offset}`]: []),
          ...(pc ? [span && `fe-col-pc-${pc.span}`]: []),
          ...(pc ? [offset && `fe-col-pc-${pc.offset}`]: []),
          ...(widePc ? [span && `fe-col-widePc-${widePc.span}`]: []),
          ...(widePc ? [offset && `fe-col-widePc-${widePc.offset}`]: [])
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

  @media (max-width: 576px) {
    .col-loop(@len, @i:1) when (@i <= @len) {
      .fe-col-phone-@{i} {
        width: (@i / 24px) * 100%;
      }
      .col-loop(@len, (@i + 1));
    }
    .col-loop(@span, 1);
    .offset-loop(@len, @i:1) when (@i <= @len) {
      .fe-offset-phone-@{i} {
        margin-left: (@i / 24px) * 100%;
      }
      .offset-loop(@len, (@i + 1));
    }
    .offset-loop(@span, 1);
  }

  @media (min-width: 577px) and (max-width: 758px) {
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

  @media (min-width: 759px) and (max-width: 992px) {
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

  @media (min-width: 993px) and (max-width: 1200px) {
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
</style>