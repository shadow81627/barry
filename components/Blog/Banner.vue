<template>
  <div class="billboard--article-group mb-5">
    <article class="col-12 article article--billboard">
      <img
        class="img-fluid d-block"
        src="https://blog.queensland.com/wp-content/uploads/2017/01/visitnoosas-noosa-everglades-via-photobohemian-4-1050x600.jpg"
      />
      <BannerHeader style="position: absolute; bottom: 0rem;" v-bind="{ category: 'Featured' }" />

      <!-- <FeatureArticle class="col-6" style="position: absolute; top: 4rem; right: 0rem;" /> -->
    </article>

    <!-- <Post
      class="col-6"
      src="https://cdn-blog.queensland.com/wp-content/uploads/2017/10/lady-elliot-island-aerial-203x157.jpg"
      heading="Surprising things you didn’t know about Lady Elliot Island"
    /> -->
  </div>
</template>

<script>
import BannerHeader from './BannerHeader';
// import FeatureArticle from './FeatureArticle';
// import Post from './Post';
export default {
  components: {
    BannerHeader,
    // FeatureArticle,
    // Post,
  },
};
</script>
