<template>
  <div class="col-12" style="bottom: -4rem;">
    <div class="card__content deal__description bg-light mx-2 shadow">
      <h2 class="text-uppercase text-dark">{{ heading }}</h2>
      <div>{{ description }}</div>
    </div>
    <div class="col-12" style="bottom: 25px;">
      <div class="d-flex justify-content-center p-2">
        <a
          :href="`#${heading}`"
          class="deal__link rounded-circle bg-primary text-center text-light shadow"
        >
          <i class="fa fa-arrow-right" />
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
.deal__link {
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deal__description {
  text-align: center;
  padding: 2rem;
}
</style>
