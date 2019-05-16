<template>
  <div
    class="card__content blogpost__description shadow px-2 text-uppercase"
    :class="wrapperClass"
    :style="{ 'text-align': textAlign }"
  >
    <p :class="headingClass">{{ heading }}</p>
  </div>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: 'deal1' },
    description: { type: String, default: 'I am deal1' },
    link: { type: String, default: 'https://example.com/deals/1' },
    disabled: { type: Boolean, default: false },
    dark: { type: Boolean },
    textAlign: { type: String, default: 'center' },
    featured: { type: Boolean, default: false },
  },
  computed: {
    wrapperClass() {
      return {
        'bg-dark': this.dark,
        'text-light': this.dark,
        'text-dark': !this.dark,
        'bg-light': !this.dark,
        'p-2': !this.featured,
        'col-12': this.featured,
        'col-md-10': this.featured,
        'col-lg-8': this.featured,
        'mx-3': !this.featured,
      };
    },
    headingClass() {
      return {
        h3: this.featured,
      };
    },
  },
};
</script>
