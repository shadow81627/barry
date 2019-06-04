<template>
  <div>
    <!-- card1 -->
    <div class="row container-break-out-center pb-5" style="padding-top: 10px;">
      <layerCard
        :src="$t('about.card1.image')"
        :alt="$t('about.card1.alt')"
        reverse
        :full-width="this.$mq === 'xs' || this.$mq === 'sm'"
      >
        <div class="intro">
          <h2 class="pb-4" v-html="$t('about.card1.title')" />
          <p class="sub-heading">
            {{ $t('about.card1.intro') }}
          </p>
          <p v-for="item in $t('about.card1.body')" :key="item" v-html="item" />
        </div>
      </layerCard>
    </div>

    <!-- card2 -->
    <TwoByOne class="py-5">
      <template #column-1>
        <div class="w-100">
          <nuxt-link :to="{ path: localePath('close') }">
            <b-img-lazy
              :src="$t('about.card2.image')"
              :alt="$t('about.card2.alt')"
              width="420"
              height="420"
              fluid
              center
            />
          </nuxt-link>
        </div>
      </template>
      <template #column-2>
        <div class="p-1">
          <div class="intro">
            <p class="pb-2 sub-heading" v-html="$t('about.card2.intro')" />
            <!-- <p v-for="item in $t('about.card2.body')" :key="item" class="pb-2" v-html="item" /> -->
          </div>
          <nuxt-link
            :to="{ path: localePath('close') }"
            class="[ btn ] btn-dark [ hero__cta ] shadow"
            >{{ $t('about.card2.cta') }}</nuxt-link
          >
        </div>
      </template>
    </TwoByOne>

    <!-- card3 -->
    <TwoByOne class="py-5" reverse>
      <template #column-1>
        <div class="w-100">
          <nuxt-link :to="localePath($t('about.card3.image-link.path'))">
            <b-img-lazy
              :src="$t('about.card3.image')"
              :alt="$t('about.card3.alt')"
              width="420"
              height="420"
              fluid
              center
            />
          </nuxt-link>
        </div>
      </template>
      <template #column-2>
        <div class="p-1">
          <div class="intro">
            <h2>{{ $t('about.card3.title') }}</h2>
            <p v-for="item in $t('about.card3.body')" :key="item" class="pb-2" v-html="item" />
          </div>
        </div>
      </template>
    </TwoByOne>

    <!-- card4 -->
    <div class="row container-break-out-center py-5">
      <LayerCard :src="$t('about.card4.image')" :alt="$t('about.card4.alt')" full-width>
        <h2>{{ $t('about.card4.title') }}</h2>
        <p v-for="item in $t('about.card4.body')" :key="item" v-html="item" />
        <div class="intro">
          <p class="sub-heading" v-html="$t('about.card4.intro')" />
        </div>

        <div v-for="(chunk, index) in chunk($t('about.card4.list'), 10)" :key="index" class="row">
          <div v-for="item in chunk" :key="item.text" class="col-lg-4 col-md-6 col-sm-12">
            <b-img-lazy :src="item.image" :alt="item.alt" height="43" width="43" fluid />
            <p v-html="item.text" />
          </div>
        </div>
        <div>
          <nuxt-link
            :to="localePath($t('about.card4.link.path'))"
            class="[ btn ] btn-dark [ hero__cta ] shadow mt-4"
          >
            {{ $t('about.card4.link.text') }}
          </nuxt-link>
        </div>
      </LayerCard>
    </div>

    <!-- card5 -->
    <TwoByOne class="py-5">
      <template #column-1>
        <div class="w-100">
          <a :href="$t('about.card5.image-link.href')" target="_blank" rel="noopener">
            <b-img-lazy
              :src="$t('about.card5.image')"
              :alt="$t('about.card5.alt')"
              width="420"
              height="420"
              fluid
              center
            />
          </a>
        </div>
      </template>
      <template #column-2>
        <div class="p-1">
          <div class="intro">
            <h2 v-html="$t('about.card5.title')" />
            <p v-for="item in $t('about.card5.body')" :key="item" class="pb-2" v-html="item" />
          </div>
          <!-- <a
            :href="$t('about.card5.link.href')"
            class="[ btn ] btn-dark [ hero__cta ] shadow"
            target="blank"
          >
            {{ $t('about.card5.link.text') }}
          </a> -->
        </div>
      </template>
    </TwoByOne>
  </div>
</template>

<script>
import utils from '@/assets/js/utils';

import TwoByOne from '@/components/TwoByOne';
import LayerCard from '@/components/LayerCard';
export default {
  layout: 'about',
  components: {
    TwoByOne,
    LayerCard,
  },
  methods: {
    chunk: utils.chunk,
  },
  head() {
    return {
      ...this.$t('about.head'),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://scuberqueensland.com/',
        },
      ],
    };
  },
};
</script>
