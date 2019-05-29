<template>
  <div class="text-center">
    <!-- <h2>{{ $t('blog.explore_title') }}</h2> -->
    <b-img :src="$t('blog.image')" :alt="$t('blog.alt')" center fluid />
    <p v-for="item in $t('blog.intro')" :key="item" v-html="item" />
    <div class="row">
      <BlogPostBanner class="mb-4" v-bind="deals[0]" />
    </div>

    <div class="row">
      <div class="col-12 text-center">
        <h2 v-if="deals.length === 0">No posts</h2>
      </div>
    </div>

    <div v-for="(chunk, index) in chunk(deals.slice(1), 10)" :key="index" class="row">
      <div v-for="deal in chunk" :key="deal.heading" class="col-lg-4 col-md-6 col-sm-12">
        <BlogPost v-bind="deal" />
      </div>
    </div>
  </div>
</template>

<script>
import utils from '@/assets/js/utils';

import BlogPost from '@/components/Blog/Post';
import BlogPostBanner from '@/components/Blog/Banner';

export default {
  layout: 'blog',
  components: {
    BlogPost,
    BlogPostBanner,
  },
  data: function() {
    return {
      deals: this.$t('blog.posts'),
    };
  },
  methods: {
    chunk: utils.chunk,
  },
  head() {
    return {
      ...this.$t('blog.head'),
    };
  },
};
</script>
