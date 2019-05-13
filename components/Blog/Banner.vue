<template>
  <div class="billboard--article-group mb-5">
    <article class="col-12 article article--billboard">
      <img
        class="banner-image img-fluid d-lg-none d-md-block col-12 col-md-10 xposition-absolute p-0"
        style="min-height: 100%;"
        src="https://blog.queensland.com/wp-content/uploads/2017/01/visitnoosas-noosa-everglades-via-photobohemian-4-1050x600.jpg"
      />
      <img
        class="banner-image img-fluid d-none d-lg-block col-12 col-md-10 position-absolute p-0"
        style="min-height: 100%;"
        src="https://blog.queensland.com/wp-content/uploads/2017/01/visitnoosas-noosa-everglades-via-photobohemian-4-1050x600.jpg"
      />
      <div class="h-100 w-100" style="bottom: 0rem;">
        <BannerHeader class="col-lg-6 col-12 pl-0 position-absolute" style="bottom: 0rem;" />

        <div class="offset-8 col-4 d-none d-lg-block pt-4">
          <Post
            image="/images/blog/6 tips to plan.jpg"
            heading="Surprising things you didn’t know about Lady Elliot Island"
            :dark="false"
            info-position="absolute"
            text-align="left"
          />
        </div>
        <div class="offset-8 col-4 d-none d-lg-block pt-4">
          <Post
            image="/images/blog/6 tips to plan.jpg"
            heading="How to see the Great Barrier Reef without getting wet"
            :dark="false"
            info-position="absolute"
            text-align="left"
          />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import BannerHeader from './BannerHeader';
import Post from './Post';
export default {
  components: {
    BannerHeader,
    Post,
  },
};
</script>
