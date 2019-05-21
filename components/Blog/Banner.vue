<template>
  <div class="col-12 xp-0">
    <Post
      v-bind="{ image, heading, link }"
      :dark="true"
      :info-position="this.$mq === 'sm' || this.$mq === 'md' ? null : 'absolute'"
      :text-align="this.$mq === 'sm' || this.$mq === 'md' ? null : 'right'"
      featured
    />
  </div>
</template>

<script>
import Post from './Post';
export default {
  components: {
    Post,
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
