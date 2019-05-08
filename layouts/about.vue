<template>
  <div id="app">
    <Hero
      v-bind="{
        overlay: false,
        poster: '/images/bg2_screen.jpg',
        link: {
          path: $t('about.hero.link.path'),
          text: $t('about.hero.link.text'),
        },
      }"
    />

    <Navbar
      :brand="false"
      style="position: absolute;top: 0;width: 100%;z-index: 1000;background:transparent;"
    />

    <div class="container" style="min-height: 100vh;">
      <Pagination />
      <nuxt id="page-content" class="main-content" />
    </div>

    <Footer />

    <Notification />
  </div>
</template>

<script>
import Notification from '@/components/Layout/Notification';
import Hero from '@/components/Layout/Hero';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import Pagination from '@/components/Layout/Navbar/Pagination';

export default {
  components: {
    Notification,
    Hero,
    Footer,
    Navbar,
    Pagination,
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
