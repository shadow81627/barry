<template>
  <div class="col-12">
    <div
      class="card__content deal__description bg-light mx-2 shadow px-4 pt-4"
      style="border-bottom: 4px solid black;"
    >
      <h2 class="h4 text-uppercase text-dark" v-html="heading" />
      <div class="deal__description--body text-dark" v-html="description" />
      <div class="w-100 py-3">
        <a
          :href="link"
          target="_blank"
          class="deal__link text-primary text-center text-uppercase"
          rel="noopener"
        >
          {{ $t('deals.cta_view_deal') }} >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: { type: String },
    description: { type: String },
    price: { type: String },
    link: { type: String },
    disabled: { type: Boolean, default: false },
  },
};
</script>

<style>
.deal__description {
  text-align: center;
  padding-top: 2rem;
  padding-top: 1rem;
}

.deal__description--body {
  line-height: 1.4;
  font-size: 0.9rem;
}
</style>
