<template>
  <div class="container">
    <h1>{{ $t('error.404.heading') }}</h1>
    <p v-for="item in $t('error.404.body')" :key="item" v-html="item" />
    <nuxt-link :to="localePath($t('error.404.cta.path'))">
      {{ $t('error.404.cta.text') }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
