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
        title: $t('entry.hero.title'),
        poster: '/images/bg2_screen.jpg',
        brand: $t('entry.hero.brand'),
        cta: $t('entry.hero.cta'),
      }"
      playerresize="win"
      :data-setup="
        JSON.stringify({
          fluid: true,
          xchildren: { loadingSpinner: false },
          html5: {
            hls: {
              overrideNative: true,
            },
          },
        })
      "
    >
      <source src="/video/win.m3u8" type="application/x-mpegURL" />
      <source
        src="/video/WIN_Mobile_Placeholder.mp4"
        type="video/mp4"
        media="all and (max-width: 480px)"
      />
      <source src="/video/WIN_Desktop_Placeholder.mp4" type="video/mp4" />
    </HeroLong>

    <Navbar
      style="position: absolute;top: 0;width: 100%;z-index: 1000;background:transparent;"
      :brand="true"
    />

    <div class="container">
      <div class="row">
        <nuxt id="page-content" class="main-content" />
        <main-content-right class="col-12 col-md-4 ml-md-auto" />
      </div>
    </div>

    <Footer />

    <Notification />
    <Cookie />
  </div>
</template>

<script>
import Notification from '@/components/Layout/Notification';
import Cookie from '@/components/Layout/Cookie';
import HeroLong from '@/components/Layout/Hero/HeroLong';
import MainContentRight from '@/components/Layout/MainContentRight.vue';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';

export default {
  components: {
    Notification,
    Cookie,
    HeroLong,
    MainContentRight,
    Footer,
    Navbar,
  },
  head() {
    return this.$t('head');
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
