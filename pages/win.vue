<template>
  <div class="[ main-content__left ] col-12 col-md-7 entry-left">
    <h2 class="h4 text-dark">{{ $t('entry.title') }}</h2>
    <div class="intro">
      <p>
        {{ $t('entry.intro') }}
      </p>
    </div>

    <div class="prize-package">
      <h2 class="h4 text-primary">{{ $t('entry.prize_package_title') }}</h2>
      <ul class="color-list">
        <li v-for="item in $t('entry.prize_package_list')" :key="item" v-html="item" />
      </ul>
    </div>
    <div v-if="disabled">
      <h2>{{ $t('entry.form.disabled') }}</h2>
    </div>
    <EntryForm v-else />
    <p v-for="item in $t('entry.body')" :key="item" class="pb-2" v-html="item" />
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
  data() {
    return {
      disabled: process.env.DISABLE_FORM === 'TRUE',
    };
  },
  head() {
    return {
      ...this.$t('entry.head'),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://scuberqueensland.com/win',
        },
      ],
    };
  },
};
</script>

<style>
@media all and (max-width: 768px) {
  .entry-left {
    padding-bottom: 0rem !important;
  }
}
</style>
