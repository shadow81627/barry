<template>
  <b-container
    v-if="!$store.state.cookieAccepted"
    tag="aside"
    class="attached-banner-interstitial"
    fluid
  >
    <b-row align-v="center">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <b-col v-html="$t('cookie.body')" />
      <b-col cols="auto">
        <b-button class="text-uppercase" type="button" variant="outline-primary" @click="accept()">
          {{ $t('cookie.cta') }}
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    accept() {
      this.$store.commit('setCookieAccepted', true);
    },
  },
};
</script>

<style>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.attached-banner-interstitial {
  align-items: center;
  animation-duration: 750ms;
  animation-iteration-count: 1;
  animation-name: slideUp;
  background-color: #000;
  bottom: 0;
  box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.15);
  color: #f0f0f0;
  display: grid;
  /* font-family: 'Roboto', sans-serif; */
  left: 0;
  overflow: hidden;
  padding: 16px;
  position: fixed;
  right: 0;
  z-index: 999;
}

.attached-banner-interstitial-main {
  align-items: center;
  display: grid;
}

@media screen and (max-width: 600px) {
  .attached-banner-interstitial-main {
    justify-items: start;
    grid-row-gap: 24px;
  }
}

@media screen and (min-width: 600px) {
  .attached-banner-interstitial-main {
    grid-column-gap: 48px;
    grid-template-columns: 1fr auto;
  }
}

.attached-banner-interstitial-main-actions {
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  justify-items: center;
}

.attached-banner-interstitial-main-actions-action {
  background-color: transparent;
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  color: #fff !important;
  cursor: pointer;
  padding: 8px 16px;
  transition: filter 500ms ease;
}

.attached-banner-interstitial-main-actions-action:focus,
.attached-banner-interstitial-main-actions-action:hover {
  background-color: #fff;
  color: #2a2a2a !important;
  outline: none;
}

.attached-banner-interstitial-main-actions-action:focus
  .attached-banner-interstitial-main-actions-action-label-title,
.attached-banner-interstitial-main-actions-action:hover
  .attached-banner-interstitial-main-actions-action-label-title {
  color: #2a2a2a;
}

.attached-banner-interstitial-main-actions-action-label-title {
  color: #ffffff;
  display: block;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 0;
}

.attached-banner-interstitial-main-content-label-description {
  font-size: 14px;
  line-height: 1.5;
}

.attached-banner-interstitial-main-content-label-title {
  display: block;
  font-size: 20px;
  line-height: 1;
}
</style>
