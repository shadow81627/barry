<template>
  <div class="[ main-content__left ] col-12 col-md-7">
    <div class="intro">
      <p>
        <strong>{{ $t('entry.intro') }}</strong>
      </p>
    </div>

    <div class="prize-package">
      <p v-for="item in $t('entry.prize_package')" :key="item" v-html="item" />
    </div>

    <EntryForm />
  </div>
</template>

<script>
import EntryForm from '@/components/EntryForm';

export default {
  layout: 'entry',
  middleware: ['competition-state'],
  components: {
    EntryForm,
  },
  head() {
    return { title: this.$t('entry.title') };
  },
};
</script>
