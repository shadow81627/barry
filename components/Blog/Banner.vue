<template>
  <div class="col-12 xp-0">
    <Post
      v-bind="{ image, heading, link }"
      :dark="true"
      :info-position="$mq === 'xs' || $mq === 'sm' || $mq === 'md' ? null : 'absolute'"
      :text-align="$mq === 'xs' || $mq === 'sm' || $mq === 'md' ? null : 'right'"
      featured
      :alt="alt"
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
    alt: { type: String },
    heading: { type: String },
    description: { type: String },
    price: { type: String },
    link: { type: String },
    disabled: { type: Boolean, default: false },
  },
};
</script>
