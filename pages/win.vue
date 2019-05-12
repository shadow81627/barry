<template>
  <div class="[ main-content__left ] col-12 col-md-7">
    <div class="intro">
      <h2>{{ $t('entry.title') }}</h2>
      <p>
        {{ $t('entry.intro') }}
      </p>
    </div>

    <div class="prize-package">
      <p>{{ $t('entry.prize_package_title') }}</p>
      <p>{{ $t('entry.prize_package_intro') }}</p>
      <ul>
        <li v-for="item in $t('entry.prize_package_list')" :key="item" v-html="item" />
      </ul>
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
