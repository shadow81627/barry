<template>
  <a :id="heading" :href="link" target="_blank" class="mb-5 text-decoration-none" rel="noopener">
    <b-img-lazy
      class="img-fluid mx-auto d-block w-100"
      alt="How to go camping in the tropics and survive"
      :src="image"
      fluid
    />

    <div class="row mb-2">
      <div
        class="col"
        :class="{ 'position-absolute': infoPosition === 'absolute' }"
        :style="bottom"
      >
        <Info v-bind="{ heading, description, link, dark, textAlign, featured }" />
      </div>
    </div>
  </a>
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
    featured: { type: Boolean, default: false },
  },
  computed: {
    bottom() {
      return this.featured ? 'bottom: 3rem;' : 'bottom: 1rem;';
    },
  },
};
</script>
