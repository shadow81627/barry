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

    <Hero
      v-bind="{
        title: $t('entry.hero.title'),
        poster: '/images/bg2_screen.jpg',
        brand: $t('entry.hero.brand'),
        cta: $t('entry.hero.cta'),
        blurb: $t('entry.hero.blurb'),
      }"
    />

    <Navbar style="position: absolute;top: 0;width: 100%;z-index: 1000;background:transparent;" />

    <div class="container">
      <div class="row">
        <nuxt id="page-content" class="main-content" />
        <main-content-right class="col-12 col-md-4 col-md-offset-1" />
      </div>
    </div>

    <Footer />

    <Notification />
  </div>
</template>

<script>
import Notification from '@/components/Layout/Notification';
import Hero from '@/components/Layout/Hero';
import MainContentRight from '@/components/Layout/MainContentRight.vue';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';

export default {
  components: {
    Notification,
    Hero,
    MainContentRight,
    Footer,
    Navbar,
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
