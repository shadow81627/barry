<template>
  <div class="[ main-content__left ] col-12 col-md-7">
    <EmailShare />
  </div>
</template>

<script>
import EmailShare from '@/components/EmailShare';

export default {
  layout: 'entry',
  components: {
    EmailShare,
  },
  head() {
    return { title: this.$t('entry.title') };
  },
};
</script>
