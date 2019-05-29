<template>
  <div class="[ main-content__left ] scrollTo col-12 text-center">
    <div class="intro">
      <h2 v-html="$t('closed.title')" />
    </div>
    <p v-for="item in $t('closed.body')" :key="item" v-html="item" />
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 3rem;
}
</style>

<script>
export default {
  layout: 'close',
  head() {
    return {
      ...this.$t('closed.head'),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://scuberqueensland.com/close',
        },
      ],
    };
  },
};
</script>
