<template>
  <b-form-group v-show="type !== 'hidden'" :id="`${id}-form-group`">
    <slot>
      <componenet
        :is="inputType"
        v-model.lazy="fieldValue"
        class="rounded-0"
        v-bind="{
          id,
          required,
          type,
          placeholder,
          options,
          invalid: !valid && (dirty || this.$store.state.formSubmitted),
          state: dirty || this.$store.state.formSubmitted ? valid : null,
          disabled,
        }"
        :aria-describedby="`${id}-live-feedback`"
        @input="$emit('input', $event)"
      />
    </slot>

    <b-form-invalid-feedback :id="`${id}-live-feedback`">
      Please enter your {{ placeholder }}
    </b-form-invalid-feedback>

    <b-form-valid-feedback>That is a nice {{ placeholder }}</b-form-valid-feedback>
  </b-form-group>
</template>

<script>
import { mapActions } from 'vuex';

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
    value: {},
    placeholder: { type: String },
    display: Object,
    disabled: Boolean,
    required: { type: Boolean },
    type: { type: String, default: 'text' },
    label: { type: String },
    options: Array,
  },
  data() {
    return {
      // if dirty true then form has been touched, validation messages can now display
      dirty: false,
    };
  },
  methods: {
    ...mapActions(['validate']),
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
    valid() {
      const errors = this.$store.getters.getFormValidationById(this.id);

      return !errors;
    },
    fieldValue: {
      get() {
        return this.value || this.$store.state.currentFormData[this.id];
        // return this.value || this.$store.getters.getFormDataById(this.id);
      },
      set(value) {
        // Set field to be dirty, now errors can display
        this.dirty = true;

        // this.$store.state.currentFormData[this.id] = value;
        // Save formdata
        this.$store.commit({
          type: 'setFormDataById',
          id: this.id,
          value,
        });

        // Call validate from vuex
        this.validate();
      },
    },
    inputType() {
      // List of supported input types
      const typeMap = {
        text: 'BaseInput',
        email: 'BaseInput',
        select: 'SelectInput',
        submit: 'SubmitInput',
        radio: 'RadioListInput',
        checkbox: 'CheckboxListInput',
        textarea: 'b-form-textarea',
        'entry-text': 'entry-text',
      };

      // special input component found
      if (typeMap[this.type]) {
        return typeMap[this.type];
      }

      // No special input component
      return 'BaseInput';
    },
  },
};
</script>
