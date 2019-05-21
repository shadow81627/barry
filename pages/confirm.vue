<template>
  <div class="[ main-content__left ] col-12 col-md-8 offset-md-2 p-0">
    <EntryConfirmed />
  </div>
</template>

<script>
import EntryConfirmed from '@/components/EntryConfirmed';

export default {
  // layout: 'entry',
  components: {
    EntryConfirmed,
  },
  data() {
    return {
      appId: process.env.FACEBOOK_APP_ID,
      version: process.env.FACEBOOK_API_VERSION,
    };
  },
  head() {
    return {
      ...this.$t('confirmation.head'),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://scuberqueensland.com',
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css',
        },
      ],
    };
  },
  mounted() {
    try {
      FB.init({
        appId: this.appId,
        autoLogAppEvents: true,
        xfbml: true,
        version: this.version,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
