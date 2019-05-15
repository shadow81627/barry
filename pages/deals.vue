<template>
  <div>
    <div class="row">
      <div class="col-12 text-center">
        <div class="mx-auto" style="max-width: 400px;">
          <img :src="$t('deals.partner_logo')" class="img-fluid d-block" />
        </div>
        <p class="pb-4">{{ $t('deals.deals_intro') }}</p>
        <h2 v-if="deals.length === 0">{{ $t('deals.no-deals') }}</h2>
      </div>
    </div>

    <div v-for="(chunk, index) in chunk(sortDisabledDeals, 2)" :key="index" class="row">
      <div v-for="deal in chunk" :key="deal.heading" class="col-md-6 col-sm-12">
        <Deal v-bind="deal" />
      </div>
    </div>
  </div>
</template>

<script>
import utils from '@/assets/js/utils';

import Deal from '@/components/Deal/Deal';

export default {
  layout: 'deals',
  components: {
    Deal,
  },
  data: function() {
    return {
      deals: this.$t('deals.deals'),
    };
  },
  computed: {
    sortDisabledDeals: function() {
      return this.deals;
      // return [...this.deals].sort(function(x, y) {
      //   // true values first
      //   return x === y ? 0 : x ? -1 : 1;
      //   // false values first
      //   // return x === y ? 0 : x ? 1 : -1;
      // });
    },
  },
  methods: {
    chunk: utils.chunk,
  },
};
</script>
