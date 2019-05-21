<template>
  <div class="[ main-content__left ] col-12 col-md-8 offset-md-2 p-0">
    <EmailShare />
  </div>
</template>

<script>
import EmailShare from '@/components/EmailShare';

export default {
  // layout: 'entry',
  components: {
    EmailShare,
  },
  head() {
    return {
      ...this.$t('emailshare.meta'),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://scuberqueensland.com/emailsahre',
        },
      ],
    };
  },
};
</script>
