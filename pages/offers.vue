<template>
  <Section v-if="sections" :sections="sections" />
</template>

<script>
import utils from '@/assets/js/utils';

import Section from '@/components/Deal/Section';

export default {
  layout: 'deals',
  components: {
    Section,
  },
  data: function() {
    return {
      sections: this.$t('deals.sections'),
    };
  },
  computed: {
    sortDisabledDeals: function() {
      return this.sections;
    },
  },
  methods: {
    chunk: utils.chunk,
  },
  head() {
    return {
      ...this.$t('deals.head'),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://scuberqueensland.com/explore',
        },
      ],
    };
  },
};
</script>

<style>
@media only screen and (max-width: 429px) {
  .deal-column.deal-column {
    padding: 0px;
  }

  .deal__description.deal__description {
    margin: 0px !important;
  }
}
</style>
