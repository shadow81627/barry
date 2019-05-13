<template>
  <div>
    <!-- card1 -->
    <div class="row py-5">
      <layerCard :src="$t('about.card1.image')" :alt="$t('about.card1.alt')" reverse>
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
        <div
          class="text-center p-5"
          style="background-image: url('/images/fader5.png');background-size: cover;"
        >
          <h2 class="display-3 text-light">
            {{ $t('about.card2.title') }}
          </h2>
        </div>
      </template>
      <template #column-2>
        <div class="intro">
          <p class="pb-2 sub-heading" v-html="$t('about.card2.intro')" />
          <p v-for="item in $t('about.card2.body')" :key="item" class="pb-2" v-html="item" />
        </div>
        <nuxt-link
          :to="{ path: localePath('entry'), hash: '#page-content' }"
          class="[ btn ] btn-dark [ hero__cta ] shadow"
          >{{ $t('about.card2.cta') }}</nuxt-link
        >
      </template>
    </TwoByOne>

    <!-- card3 -->
    <TwoByOne class="py-5" reverse>
      <template #column-1>
        <div
          class="text-center p-5"
          style="background-image: url('/images/fader5.png');background-size: cover;"
        >
          <h2 class="display-3 text-light">
            {{ $t('about.card3.title') }}
          </h2>
        </div>
      </template>
      <template #column-2>
        <div class="intro">
          <p v-for="item in $t('about.card3.body')" :key="item" class="pb-2" v-html="item" />
        </div>
      </template>
    </TwoByOne>

    <!-- card4 -->
    <div class="row py-5">
      <LayerCard src="/images/Layer783.png" full-width>
        <h2>{{ $t('about.card4.title') }}</h2>
        <p v-for="item in $t('about.card4.body')" :key="item" v-html="item" />
        <div class="intro">
          <p class="sub-heading" v-html="$t('about.card4.intro')" />
        </div>

        <div v-for="(chunk, index) in chunk($t('about.card4.list'), 3)" :key="index" class="row">
          <div v-for="item in chunk" :key="item.text" class="col-lg-4 col-md-6 col-sm-12">
            <img :src="item.image" height="42" width="42" />
            <p v-html="item.text" />
          </div>
        </div>
      </LayerCard>
    </div>

    <!-- card5 -->
    <TwoByOne class="py-5">
      <template #column-1>
        <div
          class="text-center p-5"
          style="background-image: url('/images/fader5.png');background-size: cover;"
        >
          <h2 class="display-3 text-light">
            {{ $t('about.card2.title') }}
          </h2>
        </div>
      </template>
      <template #column-2>
        <div class="intro">
          <h2 v-html="$t('about.card5.title')" />
          <p v-for="item in $t('about.card5.body')" :key="item" class="pb-2" v-html="item" />
        </div>
        <nuxt-link :to="localePath('blog')" class="[ btn ] btn-dark [ hero__cta ] shadow">
          {{ $t('about.card5.cta') }}
        </nuxt-link>
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
};
</script>
