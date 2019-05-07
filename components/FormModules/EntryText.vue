<template>
  <div
    class="form-label-group form-control h-100 mb-3"
    :class="{ 'is-invalid': isInvalid, 'is-valid': isValid }"
  >
    <label :for="id"
      >Why should you experience the wonder of the Great Barrier Reef with ScUber?</label
    >
    <b-form-textarea
      :name="name || id"
      class="form-control"
      placeholder=" "
      trim
      required
      spellcheck
      @input="$emit('input', $event)"
    />
    <div class="text-right">
      <b-form-text id="overlay" class="word-count"
        >{{
          this.$store.state.currentFormData.entry_text.length === 0
            ? $n(0)
            : this.$store.state.currentFormData.entry_text.trim().split(' ').length
        }}
        / {{ $n(25) }} {{ $t('entry.form.word_count') }}</b-form-text
      >
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/FormModules/BaseInput.vue';
export default {
  extends: BaseInput,
  inheritAttrs: false,
  computed: {
    isInvalid() {
      return (
        typeof this.state !== 'undefined' &&
        this.state != null &&
        !(
          this.$store.state.currentFormData.entry_text.trim().split(' ').length <= 25 &&
          this.$store.state.currentFormData.entry_text.trim().length > 0
        )
      );
    },
    isValid() {
      return (
        typeof this.state !== 'undefined' &&
        this.state != null &&
        this.$store.state.currentFormData.entry_text.trim().split(' ').length <= 25 &&
        this.$store.state.currentFormData.entry_text.trim().length > 0
      );
    },
  },
};
</script>

<style scoped>
.form-control {
  border-radius: 0 !important;
}

/* .form-control:focus-within {
  border-color: #ff0000;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
} */

textarea {
  border: none;
  box-shadow: none !important;
  min-height: 2rem;
}

label {
  color: #777;
}
</style>
