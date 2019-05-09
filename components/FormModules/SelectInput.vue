<template>
  <b-select
    v-bind="{ id, disabled }"
    :name="name || id"
    :value="value"
    :state="state"
    class="form-control"
    @input="$emit('input', $event)"
  >
    <option value="" disabled selected>
      {{ placeholder }}
    </option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value || option"
      :disabled="option.disabled"
    >
      {{ option.text || option }}
    </option>
  </b-select>
</template>

<script>
import BaseInput from '@/components/FormModules/BaseInput.vue';

export default {
  extends: BaseInput,
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: 'Please select one',
    },
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [1, 2, 3, 4],
    },
  },
};
</script>
