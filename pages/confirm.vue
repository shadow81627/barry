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
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css',
        },
      ],
    };
  },
};
</script>
