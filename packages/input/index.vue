<template>
  <div class="fe-input" :class="{'fe-input--error': error}">
    <input
      :disabled="disabled"
      :value="value"
      type="text"
      :placeholder="placeholder"
      @change="$emit('change', $event.target.value, $event)"
      @input="$emit('input', $event.target.value, $event)"
      @blur="$emit('blur', $event.target.value, $event)"
      @focus="$emit('focus', $event.target.value, $event)"
    />
    <template v-if="error">
      <i class="fe-input__error-icon fe-icon i-error "></i>
      <span class="fe-input__error-msg">{{error}}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FeInput',
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: String,
    placeholder: String
  }
}
</script>
