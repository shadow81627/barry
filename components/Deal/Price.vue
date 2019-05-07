<template>
  <div class="card__content rounded col-12 p-0" style="height: 300px;">
    <div class="d-flex flex-row-reverse p-2">
      <span v-if="!disabled" class="deal__price rounded-circle bg-primary text-center text-light">{{
        price
      }}</span>
      <span v-else class="deal__price rounded-circle bg-danger text-center text-light"
        >SOLD OUT</span
      >
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
</style>
