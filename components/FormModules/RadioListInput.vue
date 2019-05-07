<template>
  <div>
    <b-form-radio
      v-for="option in options"
      :key="option.value || option"
      v-model="checked"
      :value="option.value || option"
      :name="name"
      :state="state"
      :options="options"
      @input="$emit('input', checked)"
      ><span v-html="option.text || option"
    /></b-form-radio>
  </div>
</template>

<script>
import BaseInput from '@/components/FormModules/BaseInput.vue';

export default {
  extends: BaseInput,
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
    },
  },
};
</script>
