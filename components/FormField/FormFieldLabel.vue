<template>
  <div v-if="label" class="col-sm-12">
    <label :for="id">
      <span v-html="label" />
      <sup v-if="required" class="required-symbol text-danger">{{ requiredFieldSymbol }}</sup>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormLabel',
  props: {
    id: String,
    required: Boolean,
    label: String,
    requiredFieldSymbol: { type: String, default: '*' },
  },
};
</script>
