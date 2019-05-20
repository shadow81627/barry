<template>
  <div v-in-viewport="-800" class="[ main-content__left ] scrollTo col-12 col-md-7">
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
  layout: 'default',
  head() {
    return {
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
