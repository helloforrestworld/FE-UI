<template>
  <button class="fe-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')"
  >
    <fe-icon v-if="loading" name="loading" class="spinning"></fe-icon>
    <fe-icon v-else-if="icon" :name="icon"></fe-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'fe-button',
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.fe-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.8em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .fe-icon {
    order: 1;
    margin-right: .3em;
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