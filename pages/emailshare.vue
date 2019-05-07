<template>
  <div class="[ main-content__left ] col-12 col-md-7">
    <div class="intro">
      <h2 v-html="$t('entry.title')" />
      <p>
        <strong>{{ $t('entry.intro') }}</strong>
      </p>
    </div>

    <div class="prize-package">
      <p>{{ $t('entry.prize-package') }}</p>
    </div>

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
