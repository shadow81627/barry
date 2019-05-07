<template>
  <b-nav-item-dropdown class="lang badge badge-pill badge-grey p-0">
    <template slot="button-content">
      <span class="current-lang">{{ currentLocale().name }}</span>
    </template>
    <b-dropdown-item-button
      v-for="locale in $i18n.locales.filter(i => i.code !== $i18n.locale)"
      :key="locale.code"
    >
      <nuxt-link :to="switchLocalePath(locale.code)">
        <span style="color:black;">{{ locale.name }}</span>
      </nuxt-link>
    </b-dropdown-item-button>
  </b-nav-item-dropdown>
</template>

<script>
const images = require.context('@/assets/images/flags', false, /\.png$/);

export default {
  methods: {
    currentLocale() {
      return this.$i18n.locales.find(i => i.code === this.$i18n.locale);
    },
    flagUrl(flag) {
      let image = '';
      try {
        image = images(`./${flag}.png`);
      } catch (e) {
        console.log(e);
      }

      return image;
    },
  },
};
</script>

<style>
.lang .current-lang {
  color: black;
}

.badge-grey {
  color: #212529;
  background-color: #f8f9fa;
  opacity: 0.9;
}

.lang .dropdown-toggle::after {
  vertical-align: 0;
  font-size: 1.25rem;
  color: grey;
}
</style>
