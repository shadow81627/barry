<template>
  <div class="col-12 p-0">
    <Post
      image="/images/blog/blog-hero.jpg"
      heading="6 tips to plan your ultimate Great Barrier Reef holiday"
      :dark="false"
      info-position="absolute"
      text-align="left"
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
};
</script>
