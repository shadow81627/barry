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
        title: $t('closed.hero.title'),
        poster: '/images/bg2_screen.jpg',
        brand: $t('entry.hero.brand'),
      }"
    />

    <Navbar
      style="position: absolute;top: 0;width: 100%;z-index: 1000;background:transparent;"
      :brand="true"
    />

    <div class="container">
      <div class="row">
        <nuxt id="page-content" class="main-content" />
        <div class="col-12 pb-5">
          <div class="row">
            <a
              v-for="item in $t('mrec-tiles')"
              :key="item.alt"
              class="__card col-12 col-md-4"
              :href="item.link"
              target="_blank"
              rel="noopener"
            >
              <div class="card__item">
                <div class="card__content imagecardone">
                  <b-img-lazy :src="item.image" :alt="item.alt" />
                </div>
              </div>
            </a>
          </div>
        </div>
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
import Hero from '@/components/Layout/Hero/HeroImage';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';

export default {
  components: {
    Notification,
    Cookie,
    Hero,
    Footer,
    Navbar,
  },
  head() {
    return this.$t('head');
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
