<template>
  <div class="[ main-content__left ] col-12 col-md-7">
    <div class="intro">
      <h2 v-html="$t('confirmation.title')" />
    </div>

    <div>
      <p>
        Thanks for entering the competition to experience the Great Barrier Reef with scUber!
      </p>
      <p>
        <a
          :href="
            `https://www.queensland.com/${
              $i18n.locales.find(i => i.code === this.$i18n.locale).iso
            }/plan-your-trip/travel-tools/enews-subscribe`
          "
          target="_blank"
          >Subscribe</a
        >
        for exclusive offers, holiday deals and local tips from Queensland delivered straight to
        your inbox.
      </p>
      <p>Planning your perfect next Great Barrier Reef holiday?</p>
      <p>
        Find out more about the ways to experience this World Heritage-listed wonder below.
      </p>
    </div>

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
