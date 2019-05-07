<template>
  <div class="[ main-content__left ] col-12 col-md-7">
    <div class="intro">
      <h2 v-html="$t('thanks.title')" />
      <div v-html="$t('thanks.intro')" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'entry',
  head() {
    return { title: this.$t('landing.title') };
  },
};
</script>
