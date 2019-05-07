<template>
  <button v-bind="$props" type="submit" class="[ btn btn--green ] [ entry-form__cta ]">
    <span v-if="!loading">{{ value || 'Submit' }}</span>
    <i v-else class="fa fa-circle-o-notch fa-spin fa-fw" />
  </button>
</template>

<script>
import BaseInput from '@/components/FormModules/BaseInput.vue';

export default {
  extends: BaseInput,
  inheritAttrs: false,
  props: {
    id: { type: String, required: false },
    loading: { type: Boolean, default: false },
  },
};
</script>
