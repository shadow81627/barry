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

    <!-- <Navbar class="bg-dark" /> -->

    <div class="container" style="min-height: 100vh;">
      <nuxt id="page-content" class="main-content" />
    </div>

    <!-- <Footer /> -->

    <Notification />
  </div>
</template>

<script>
import Notification from '@/components/Layout/Notification';
// import Footer from '@/components/Layout/Footer';
// import Navbar from '@/components/Layout/Navbar';

export default {
  components: {
    Notification,
    // Footer,
    // Navbar,
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
