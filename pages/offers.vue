<template>
  <Section v-if="sections" :sections="sections" />
</template>

<script>
import utils from '@/assets/js/utils';

import Section from '@/components/Deal/Section';

import axios from 'axios';

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
  mounted() {
    // check local storage for locale
    const storedLocale = localStorage.getItem('geoIpLocale');
    // Check stored locale

    // Set locale route if not found in storage
    if (storedLocale) {
      // don't do anything if we have already set local storage locale
    } else if (this.$i18n.locale === 'en-au') {
      // only geo ip set locale if locale is default (AU)
      // Get locale
      let locale = 'en-au';
      // Make call to api here
      const url = `${process.env.API_BASE_URL}/api/geoip`;
      axios
        .post(url, { secret: process.env.API_SECRET })
        .then(response => {
          const countryMap = {
            AU: 'en-au',
            NZ: 'en-nz',
            GB: 'en-gb',
            IE: 'en-gb',
            US: 'en-us',
            UM: 'en-us',
            CA: 'en-ca',
            FR: 'fr-fr',
          };
          console.log(response.data.country_iso);
          locale = countryMap[response.data.country_iso]
            ? countryMap[response.data.country_iso]
            : 'en-au';
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });

      console.log(locale);

      // Set in local storage
      // localStorage.setItem('geoIpLocale', locale);
      this.$router.push(this.switchLocalePath(locale));
    }
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
