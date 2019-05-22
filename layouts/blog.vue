<template>
  <div id="app">
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WV2SB2T"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe
    ></noscript>

    <Navbar variant="dark" />

    <Heading :heading="$t('blog.heading')" class="bg-dark" />

    <div class="container" style="min-height: 100vh;">
      <Pagination />
      <nuxt id="page-content" class="main-content" />
    </div>

    <Footer />

    <Notification />
    <Cookie />
  </div>
</template>

<script>
import Notification from '@/components/Layout/Notification';
import Cookie from '@/components/Layout/Cookie';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import Heading from '@/components/Layout/Navbar/Heading';
import Pagination from '@/components/Layout/Navbar/Pagination';

export default {
  components: {
    Notification,
    Cookie,
    Footer,
    Navbar,
    Heading,
    Pagination,
  },
  head() {
    return this.$t('head');
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
