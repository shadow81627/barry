<template>
  <a :id="heading" :href="link" target="_blank" class="mb-5 text-decoration-none" rel="noopener">
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
  </a>
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
    image: { type: String },
    heading: { type: String },
    description: { type: String },
    price: { type: String },
    link: { type: String },
    disabled: { type: Boolean, default: false },
  },
};
</script>

<style>
.deal__image {
  background-size: cover;
  position: absolute;
  width: 100%;
  left: 0;
  object-fit: cover;

  height: 50%;
  top: 0%;
}

@media only screen and (min-width: 576px) {
  /* This media query sucks, it feels backwards */
  .sold-out-container {
    margin-left: 6rem;
    margin-right: 6rem;
  }

  .sold-out {
    font-size: 2.5rem;
  }

  .deal__image {
    height: 85%;
    bottom: 15%;
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
