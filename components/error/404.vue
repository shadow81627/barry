<template>
  <div class="container">
    <h1>Page not found</h1>
    <nuxt-link to="/">
      Home
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
