<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'fe-col',
    props: {
      span: Number | String
    }
  }
</script>

<style scoped lang="less">
  .col {
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid salmon;
  }
  .col-loop(@len, @i:1) when (@i <= @len) {
    .col-@{i} {
      width: (@i / 24px) * 100%;
    }
    .col-loop(@len, (@i + 1));
  }
  .col-loop(24, 1);
</style>