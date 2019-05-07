<template>
  <div class="col-sm-12">
    <!-- Fail -->
    <span
      v-show="!valid && display"
      class="validation fail invalid-feedback help is-danger"
      :class="{ 'd-block': !valid && display }"
    >
      {{ validation.fail }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'FormFieldMessage',
  props: {
    // used to check if valid
    id: { type: String },
    // only show message if dirty
    dirty: { type: Boolean },
    // messages to display
    validation: {
      type: Object,
      default() {
        return { pass: 'Great!', fail: "Something doesn't look right..." };
      },
    },
  },
  computed: {
    valid() {
      const errors = this.$store.getters.getFormValidationById(this.id);

      return !errors;
    },
    display() {
      return this.dirty || this.$store.state.formSubmitted;
    },
    // messages() {
    //   return this.$store.state.messages[this.id];
    // },
  },
};
</script>
