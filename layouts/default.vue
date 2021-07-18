<template>
  <div id="app">
    <Navbar variant="dark" />

    <div class="container" style="min-height: 100vh;">
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

export default {
  components: {
    Notification,
    Footer,
    Navbar,
    Cookie,
  },
  head() {
    return this.$t('head');
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
