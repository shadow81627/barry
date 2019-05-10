<template>
  <div class="nuxt-error [ main-content__left ] col-12 col-md-7">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '@/components/error/404.vue';
import error500 from '@/components/error/500.vue';

export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      console.log(this.error);
      if (this.error.statusCode === 404) {
        return error404;
      }
      // catch everything else
      return error500;
    },
  },
};
</script>
