<template>
  <div id="entry-form" class="entry-form confirmed p-0">
    <div class="row pt-5">
      <div class="col-12">
        <span style="text-align:center">
          <h2 class="confirm-title" v-html="$t('confirmation.title')" />
          <p v-for="item in $t('confirmation.body')" :key="item" class="mx-5" v-html="item" />
        </span>
      </div>
    </div>

    <div class="[ social ] row" style="margin-bottom: -40px;">
      <div class="col-4">
        <button type="button" class="social__item" @click="shareFacebook">
          <i class="fa fa-facebook" aria-hidden="true" />
        </button>
      </div>
      <div class="col-4">
        <a
          :href="`https://twitter.com/intent/tweet?text=${$t('confirmation.twitter.text')}`"
          class="social__item"
          target="_blank"
        >
          <i class="fa fa-twitter" aria-hidden="true" />
        </a>
      </div>
      <div class="col-4">
        <nuxt-link class="social__item" :to="localePath('emailshare')">
          <i class="fa fa-envelope-o" aria-hidden="true" />
        </nuxt-link>
      </div>
    </div>
    <div
      class="xblog-header w-100 h-100 py-5"
      :style="`background-image: url(/images/sharebg-image.jpg); background-size: cover;`"
    >
      <div class="blog-link row" style="position: relative;">
        <div class="text-center">
          <h3>{{ $t('confirmation.blog.title') }}</h3>
          <p v-for="item in $t('confirmation.blog.body')" :key="item" v-html="item" />

          <div class="row d-flex justify-content-center">
            <div
              v-for="deal in $t('confirmation.blog.posts')"
              :key="deal.heading"
              class="col-md-6  confirmation-blog-post"
            >
              <BlogPost v-bind="deal" />
            </div>
            <nuxt-link
              :to="{ path: localePath('explore') }"
              class="[ btn ] btn-dark [ hero__cta ] shadow"
              >{{ $t('confirmation.blog.link.text') }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/assets/js/EventBus.js';

import BlogPost from '@/components/Blog/Post';

export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      entrant: this.$root.entrant,
      friends: [],
      appUrl: process.env.APP_URL,
    };
  },
  created() {
    // Twitter callback
    if (typeof twttr !== 'undefined') {
      twttr.ready(twttr => {
        // Listening to tweet intent events
        twttr.events.bind('tweet', event => {
          this.shareTwitter(event.target);
        });
      });
    }
  },
  methods: {
    shareFacebook() {
      FB.ui(
        {
          method: 'share',
          mobile_iframe: true,
          href: this.appUrl,
          display: 'popup',
        },
        response => {
          // FB shared successfully
          if (response && !response.error_message) {
            // Store twitter Facebook record
            EventBus.$emit('notification', {
              type: 'success',
              message: 'Facebook share successful.',
            });
          } else {
            EventBus.$emit('notification', {
              type: 'error',
              message: 'Error sharing via Facebook.',
            });
          }
        },
      );
    },
    shareTwitter(obj) {
      // share itent set heading
      // EventBus.$emit('notification', {
      //   type: 'success',
      //   message: 'Twitter share successful.',
      // });
    },
  },
};
</script>

<style scoped lang="scss">
.blog-link {
  background-color: white;
  padding: 20px 20px 20px 20px;
  margin: 40px;
}

.confirmation-blog-posts .card__content {
  font-weight: 400;
  font-size: 1.1rem;

  p {
    margin-bottom: 0px;
    color: purple;
  }
}
</style>
