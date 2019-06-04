<template>
  <b-select v-model="locale" class="lang" tabindex="-1" aria-label="language">
    <option :value="currentLocale.code">{{ currentLocale.name }}</option>
    <option
      v-for="locale in $i18n.locales.filter(i => i.code !== $i18n.locale)"
      :key="locale.code"
      :value="locale.code"
      >{{ locale.name }}</option
    >
  </b-select>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locales.find(i => i.code === this.$i18n.locale);
    },
    locale: {
      get() {
        return this.$i18n.locales.find(i => i.code === this.$i18n.locale).code;
      },
      set(value) {
        this.$router.push(this.switchLocalePath(value));
      },
    },
  },
};
</script>

<style>
.lang.lang {
  border-radius: 10rem;
}
</style>
