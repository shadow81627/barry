<template>
  <div id="entry-form" class="entry-form confirmed">
    <div class="blog-header" />
    <div class="row">
      <div class="col-12">
        <span style="text-align:center">
          <h2 v-html="$t('confirmation.title')" />
          <p v-for="item in $t('confirmation.body')" :key="item" v-html="item" />
        </span>
      </div>
    </div>

    <div class="[ social ] row">
      <div class="col-4">
        <button type="button" class="social__item" @click="shareFacebook">
          <i class="fa fa-facebook" aria-hidden="true" />
        </button>
      </div>
      <div class="col-4">
        <a
          :href="
            'https://twitter.com/intent/tweet?text=☀️ Experience the best of what Queensland has to offer this summer with a $5,000 holiday 🌴 http://mve.me/PYnx3rl'
          "
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
      class="blog-link row my-4"
      style="position: relative;"
      :style="
        `background-image: url(/images/SC_2016_Rainbow_Beach_Carlo_Sandblow_3_Katie_Purling_JOINT_COPYRIGHT.jpg); min-height: 200px;`
      "
    >
      <div class="text-center">
        <h3>{{ $t('confirmation.blog.title') }}</h3>
        <p v-for="item in $t('confirmation.blog.body')" :key="item" v-html="item" />

        <div class="row d-flex justify-content-center">
          <div
            v-for="item in $t('confirmation.blog.posts')"
            :key="item"
            class="col m-2"
            :style="`background-image: url(${item.image});`"
          >
            <nuxt-link
              :to="localePath('deals')"
              target="_blank"
              class="[ btn btn-dark ] btn-blog"
              role="button"
            >
              <span>{{ item.heading }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import EventBus from '@/assets/js/EventBus.js';

export default {
  data() {
    return {
      entrant: this.$root.entrant,
      friends: [],
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
          href: 'https://teq-summer-feels-stage.xcomhosted.com/', // FIXME: Fix before Go-Live
          display: 'popup',
        },
        response => {
          // FB shared successfully
          if (response && !response.error_message) {
            // Store twitter Facebook record
            const url = `${process.env.API_BASE_URL}/${process.env.API_KEY}/api/event`;
            axios
              .post(
                url,
                qs.stringify({
                  secret: process.env.API_SECRET,
                  hash: this.entrant.hash,
                  event: 'facebook',
                }),
              )
              .then(response => {
                if (!response.data.success) {
                  EventBus.$emit('notification', {
                    type: 'error',
                    message: 'Error processing event data.',
                  });
                }
              });
          } else {
            // event.$emit('notification', {type: 'error', message: 'Error sharing via Facebook.'});
          }
        },
      );
    },
    shareTwitter(obj) {
      // Store twitter share record
      const url = process.env.API_BASE_URL + '/' + process.env.API_KEY + '/api/event';

      axios
        .post(
          url,
          qs.stringify({
            secret: process.env.API_SECRET,
            hash: this.entrant.hash,
            event: 'twitter',
          }),
        )
        .then(response => {
          if (!response.data.success) {
            EventBus.$emit('notification', {
              type: 'error',
              message: 'Error processing event data.',
            });
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.blog-link {
  background-color: white;
  padding: 50px 20px 50px 20px;
}
</style>
