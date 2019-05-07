<template>
  <b-form-input
    v-bind="$props"
    :name="name || id"
    class="form-control"
    :state="state"
    :class="{ 'input--invalid': invalid }"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    id: { type: String, required: true },
    name: { type: String },
    type: { type: String, default: 'text' },
    state: { type: Boolean, default: null },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    value: {},
    placeholder: { type: String },
    invalid: { type: Boolean, default: false },
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
  },
};
</script>
