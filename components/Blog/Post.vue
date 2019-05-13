<template>
  <b-link :id="heading" :href="link" target="_blank" class="mb-5">
    <img
      class="img-fluid mx-auto d-block w-100"
      alt="How to go camping in the tropics and survive"
      :src="image"
    />

    <div class="row mb-2">
      <div
        class="col"
        :class="{ 'position-absolute': infoPosition === 'absolute' }"
        style="bottom: 1rem;"
      >
        <Info v-bind="{ heading, description, link, dark, textAlign }" />
      </div>
    </div>
  </b-link>
</template>

<script>
import Info from './Info';
export default {
  components: {
    Info,
  },
  props: {
    image: {
      type: String,
      default: 'https://cdn-blog.queensland.com/wp-content/uploads/2018/09/134971-56-335x256.jpg',
    },
    heading: { type: String, default: 'deal1' },
    description: { type: String, default: 'I am deal1' },
    link: { type: String, default: 'https://example.com/deals/1' },
    dark: { type: Boolean, default: true },
    infoPosition: { type: String, default: null },
    textAlign: { type: String, default: 'center' },
  },
};
</script>
