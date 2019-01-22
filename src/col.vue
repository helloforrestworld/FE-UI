<template>
  <div class="fe-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'fe-col',
    props: {
      span: Number | String,
      offset: Number | String
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
        let {span, offset} = this
        return [
          span && `fe-col-${span}`,
          offset && `fe-offset-${offset}`
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
</style>