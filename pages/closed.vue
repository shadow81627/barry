<template>
  <div v-in-viewport="-800" class="[ main-content__left ] scrollTo col-12 col-md-7">
    <div class="intro">
      <h2 v-html="$t('closed.title')" />
    </div>
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
};
</script>
