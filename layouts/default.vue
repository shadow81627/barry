<template>
  <div id="app">
    <Navbar class="bg-primary" />

    <div class="container" style="min-height: 100vh;">
      <nuxt id="page-content" class="main-content" />
    </div>

    <Footer />

    <Notification />
  </div>
</template>

<script>
import Notification from '@/components/Layout/Notification';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';

export default {
  components: {
    Notification,
    Footer,
    Navbar,
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
