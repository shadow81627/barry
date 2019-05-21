<template>
  <div v-in-viewport="-800" class="[ main-content__left ] scrollTo col-12 col-md-7">
    <div class="intro">
      <h2 v-html="$t('unsubscribed.title')" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      ...this.$t('unsubscribed.meta'),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://scuberqueensland.com/unsubscribe',
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 3rem;
}
</style>
