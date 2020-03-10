<template>
  <button
    class="fe-button"
    :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')"
  >
    <fe-icon
      v-if="loading"
      name="loading"
      class="spinning"
    ></fe-icon>
    <fe-icon
      v-else-if="icon"
      :name="icon"
    ></fe-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from './icon'

export default {
  name: 'fe-button',
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    feIcon: Icon
  }
}
</script>

<style lang="less" scoped>
@button-height: 32px;
@font-size: 14px;
@button-bg: white;
@button-active-bg: #eee;
@border-radius: 4px;
@color: #333;
@border-color: #999;
@border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fe-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: @font-size;
  height: @button-height;
  padding: 0 0.8em;
  border-radius: @border-radius;
  border: 1px solid @border-color;
  background: @button-bg;
  &:hover {
    border-color: @border-color-hover;
  }
  &:active {
    background-color: @button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .fe-icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .fe-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
  .spinning {
    animation: spin 1.5s infinite linear;
  }
}
</style>