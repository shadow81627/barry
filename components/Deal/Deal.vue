<template>
  <div :id="heading" style="margin-bottom: 4rem">
    <div v-if="disabled" class="row">
      <div class="col text-center sold-out-container" style="z-index: 1000; top: 200px;">
        <h3 class="sold-out bg-light px-2 mx-auto text-dark">SOLD OUT</h3>
      </div>
    </div>
    <div class="position-relative" :class="{ disabled: disabled }">
      <img class="deal__image shadow" :src="image" />

      <Price :price="price" />

      <Info v-bind="{ heading, description, link }" />
    </div>
  </div>
</template>

<script>
import Price from './Price';
import Info from './Info';
export default {
  components: {
    Price,
    Info,
  },
  props: {
    image: {
      type: String,
      default: '/images/SC_2016_Rainbow_Beach_Carlo_Sandblow_3_Katie_Purling_JOINT_COPYRIGHT.jpg',
    },
    heading: { type: String, default: 'deal1' },
    description: { type: String, default: 'I am deal1' },
    price: { type: String, default: '$100' },
    link: { type: String, default: 'https://example.com/deals/1' },
    disabled: { type: Boolean, default: false },
  },
};
</script>

<style>
.deal__image {
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 85%;
  left: 0;
  bottom: 15%;
}

@media only screen and (min-width: 576px) {
  .sold-out-container {
    margin-left: 6rem;
    margin-right: 6rem;
  }

  .sold-out {
    font-size: 2.5rem;
  }
}

.sold-out {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
}

.disabled {
  opacity: 0.4;
}
</style>
