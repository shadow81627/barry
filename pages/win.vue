<template>
  <div class="[ main-content__left ] col-12 col-md-7">
    <h2 class="h4 text-dark">{{ $t('entry.title') }}</h2>
    <div class="intro">
      <p>
        {{ $t('entry.intro') }}
      </p>
    </div>

    <div class="prize-package">
      <h2 class="h4 text-primary">{{ $t('entry.prize_package_title') }}</h2>
      <ul class="color-list" style="xpadding-inline-start: 0px;">
        <li
          v-for="item in $t('entry.prize_package_list')"
          :key="item"
          style="xpadding-left: 4rem;"
          v-html="item"
        />
      </ul>
    </div>
    <EntryForm />
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
  head() {
    return {
      title: 'Win',
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
