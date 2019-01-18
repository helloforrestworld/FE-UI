<template>
  <div class="fe-wrapper" :class="{'error': error}">
    <input :disabled="disabled" :value="value" type="text" placeholder="" placeholder-class=""/>
    <template v-if="error">
      <fe-icon name="error" class="error-icon"></fe-icon>
      <span class="error-msg">{{error}}</span>
    </template>
  </div>
</template>

<script>
import FeIcon from './icon'
export default {
  name: 'fe-input',
  components: { FeIcon },
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: String
  }
}
</script>

<style lang="less" scoped>
  @height: 32px;
  @border-color: #999;
  @border-color-hover: #666;
  @border-color-focus: #666;
  @border-color-disable: #bbb;
  @border-radius: 4px;
  @font-size: 14px;
  @box-shadow-color: rgba(0, 0, 0, 0.3);
  @red: #F1453d;

  .fe-wrapper {
    display: inline-flex;
    align-items: center;
    font-size: @font-size;
    > *:not(:last-child) {
      margin-right: 0.5em;
    }
    > input {
      height: 32px;
      padding: 0 8px;
      border: 1px solid @border-color;
      border-radius: @border-radius;
      font-size: @font-size;
      &:hover {
        border-color: @border-color-hover;
      }
      &:focus {
        box-shadow: inset 1px 1px 3px @box-shadow-color, inset -1px -1px 3px @box-shadow-color;
        outline: none;
      }
      &[disabled] {
        border-color: @border-color-disable;
        color: @border-color-disable;
        cursor: not-allowed;
      }
    }
    &.error {
      > input {
        border-color: @red;
      }
      > .error-msg {
        color: @red;
      }
      > .error-icon {
        fill: @red;
      }
    }
  }
</style>
