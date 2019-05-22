<template>
  <div class="container">
    <h1>{{ $t('error.500.heading') }}</h1>
    <p v-for="item in $t('error.500.body')" :key="item" v-html="item" />
  </div>
</template>
<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
