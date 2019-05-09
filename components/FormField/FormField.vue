<template>
  <b-form-group v-show="type !== 'hidden'" :id="`${id}-form-group`">
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
        }"
        :aria-describedby="`${id}-live-feedback`"
        @input="$emit('input', $event)"
      />
    </slot>

    <b-form-valid-feedback>{{ validFeedback }}</b-form-valid-feedback>

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
