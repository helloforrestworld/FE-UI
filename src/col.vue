<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]" :style="{paddingLeft: gutter + 'px'}">
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
    }
  }
</script>

<style scoped lang="less">
  .col {
    min-height: 36px;
  }
  .col-loop(@len, @i:1) when (@i <= @len) {
    .col-@{i} {
      width: (@i / 24px) * 100%;
    }
    .col-loop(@len, (@i + 1));
  }
  .col-loop(24, 1);

  .offset-loop(@len, @i:1) when (@i <= @len) {
    .offset-@{i} {
      margin-left: (@i / 24px) * 100%;
    }
    .offset-loop(@len, (@i + 1));
  }
  .offset-loop(24, 1);
</style>