<template>
  <div class="[ main-content__left ] col-12 col-md-7">
    <EntryConfirmed />
  </div>
</template>

<script>
import EntryConfirmed from '@/components/EntryConfirmed';

export default {
  layout: 'entry',
  components: {
    EntryConfirmed,
  },
  head() {
    return { title: this.$t('landing.title') };
  },
};
</script>
