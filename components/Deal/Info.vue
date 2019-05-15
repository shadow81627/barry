<template>
  <div class="col-12">
    <div
      class="card__content deal__description bg-light mx-2 shadow px-4 pt-4"
      style="border-bottom: 4px solid black;"
    >
      <h2 class="h4 text-uppercase text-dark">{{ heading }}</h2>
      <div>{{ description }}</div>
      <div class="w-100 py-3">
        <a :href="link" target="_blank" class="deal__link text-primary text-center text-uppercase">
          view more >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: 'deal1' },
    description: { type: String, default: 'I am deal1' },
    price: { type: String, default: '$100' },
    link: { type: String, default: 'https://example.com/deals/1' },
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
</style>
