<template>
  <div class="card__content rounded col-12 p-0 price-height">
    <div class="d-flex flex-row-reverse p-2">
      <span
        class="deal__price rounded-circle bg-primary text-center text-light m-2"
        v-html="price"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: { type: String },
    disabled: { type: Boolean, default: false },
  },
};
</script>

<style>
.deal__price {
  height: 6rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.price-height {
  height: 300px;
}

@media only screen and (max-width: 576px) {
  .price-height {
    height: 200px;
  }
}
</style>
