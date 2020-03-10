<template>
  <button
    class="fe-button"
    :class="{[`fe-icon--${iconPosition}`]: true}"
    @click="$emit('click')"
  >
    <i
      v-if="loading"
      class="fe-button__spinning fe-icon i-loading"
    ></i>
    <i
      v-else-if="icon"
      :class="['fe-icon', 'i-' + icon]"
    >
    </i>
    <div class="fe-button__content">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'FeButton',
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
