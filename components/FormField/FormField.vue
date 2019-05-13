<template>
  <b-form-group v-show="type !== 'hidden'" :id="`${id}-form-group`">
    <label :for="id" :class="{ 'sr-only': !label }">{{ placeholder }}</label>
    <slot>
      <componenet
        :is="inputType"
        class="rounded-0"
        v-bind="{
          id,
          required,
          type,
          placeholder,
          options,
          state,
          disabled,
          maxlength,
          pattern,
        }"
        :aria-describedby="`${id}-description ${id}-valid-feedback ${id}-invalid-feedback`"
        trim
        @input="$emit('input', $event)"
      />
    </slot>

    <slot name="description">
      <b-form-text :id="`${id}-description`">{{ description }}</b-form-text>
    </slot>

    <slot name="valid">
      <b-form-valid-feedback :id="`${id}-valid-feedback`">{{
        validFeedback
      }}</b-form-valid-feedback>
    </slot>

    <b-form-invalid-feedback :id="`${id}-invalid-feedback`">
      {{ invalidFeedback }}
    </b-form-invalid-feedback>
  </b-form-group>
</template>

<script>
import FormLabel from '@/components/FormField/FormFieldLabel.vue';
import FormFieldMessage from '@/components/FormField/FormFieldMessage.vue';

// All input types
import FormFieldInputs from '@/components/FormModules';

export default {
  components: {
    FormLabel,
    FormFieldMessage,
    ...FormFieldInputs,
  },
  props: {
    id: { type: String, required: true },
    description: { type: String },
    validFeedback: { type: String, default: 'Looks Good!' },
    invalidFeedback: { type: String, default: "Something doesn't look right..." },
    value: {},
    placeholder: { type: String },
    display: Object,
    disabled: Boolean,
    required: { type: Boolean },
    type: { type: String, default: 'text' },
    label: { type: String },
    options: Array,
    state: { type: Boolean, default: null },
    maxlength: { type: Number, default: null },
    pattern: { type: String },
  },
  computed: {
    inputListeners() {
      // Allow other events to be bound
      const vm = this;
      return Object.assign({}, this.$listeners, {
        input(event) {
          vm.$emit('input', event.target.value);
        },
      });
    },
    inputType() {
      // List of supported input types
      const typeMap = {
        text: 'b-form-input',
        email: 'b-form-input',
        select: 'SelectInput',
        checkbox: 'b-form-checkbox',
        textarea: 'b-form-textarea',
      };

      // special input component found
      if (typeMap[this.type]) {
        return typeMap[this.type];
      }

      // No special input component
      return 'b-form-input';
    },
  },
};
</script>
