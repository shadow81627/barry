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

    <HeroLong
      v-bind="{
        overlay: false,
        poster: '/images/bg2_screen.jpg',
        link: {
          path: $t('about.hero.link.path'),
          text: $t('about.hero.link.text'),
        },
      }"
      data-setup="{}"
    />

    <Navbar
      :brand="true"
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
import HeroLong from '@/components/Layout/Hero/HeroLong';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import Pagination from '@/components/Layout/Navbar/Pagination';

export default {
  components: {
    Notification,
    HeroLong,
    Footer,
    Navbar,
    Pagination,
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
