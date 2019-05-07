<template>
  <div>
    <b-form-checkbox
      v-for="option in options"
      :key="option.value || option"
      v-model="checked"
      :value="option.value || option"
      :name="name || id"
      :options="options"
      :state="state"
      :required="required"
      @input="$emit('input', checked)"
      ><span v-html="option.text || option"
    /></b-form-checkbox>
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
  data() {
    return {
      checked: [],
    };
  },
};
</script>
