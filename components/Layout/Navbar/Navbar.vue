<template>
  <b-navbar toggleable :type="type" :variant="color" class="main-nav">
    <b-navbar-brand v-if="brand || menuOpen" href="/">
      <slot name="brand">
        <span class="text-primary h1">sc</span
        ><span class="text-light h1" :class="{ 'text-dark': menuOpen }">Uber</span>
      </slot>
    </b-navbar-brand>

    <MenuButton class="ml-auto" />

    <b-collapse id="nav-collapse" is-nav class="menu-collapse">
      <b-navbar-nav class="fullpage-nav-list bg-light min-vh-100 text-center pt-5">
        <b-nav-item
          v-for="link in $t('navigation')"
          :key="link.value"
          :to="localePath(link.value)"
          class="py-1"
        >
          {{ link.text }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import MenuButton from './MenuButton';
export default {
  components: {
    MenuButton,
  },
  props: {
    brand: { type: Boolean, default: true },
    variant: { type: String, default: 'faded' },
    dark: { type: Boolean, default: false },
  },
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    color: function() {
      if (this.menuOpen) {
        // Set nav variant to white when menu open
        return 'light';
      }
      return this.variant;
    },
    type: function() {
      return (this.dark || this.variant === 'dark') && !this.menuOpen ? 'dark' : 'light';
    },
  },
  mounted() {
    // Menu collapse state event listener. used to set nav color
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      this.menuOpen = isJustShown;
    });
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.navbar-nav.fullpage-nav-list .nav-item .nav-link {
  font-size: 3rem;
  color: $dark;
  border-bottom: 1px;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1rem;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

/* active link underline */
.navbar-nav.fullpage-nav-list .nav-item .nav-link.nuxt-link-exact-active::after {
  content: '';
  background: $green;
  position: absolute;
  width: 100%;
  height: 2px;
  display: block;

  /* distance from link */
  bottom: 5px;

  /* letter spacing offset */
  left: -1rem;
}

@media only screen and (max-width: 600px) {
  .navbar-nav.fullpage-nav-list .nav-item .nav-link {
    font-size: 1.2rem;
  }
}
</style>
