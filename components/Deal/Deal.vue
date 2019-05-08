<template>
  <div :id="heading" style="margin-bottom: 4rem">
    <div class="position-relative">
      <img class="deal__image shadow" :src="image" />

      <Price :price="price" :disabled="disabled" />

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
</style>
