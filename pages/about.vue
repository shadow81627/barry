<template>
  <div>
    <div class="row py-5">
      <layerCard src="/images/Layer919.png" reverse>
        <div class="intro">
          <h2 class="pb-4" v-html="$t('about.card1_title')" />
          <p class="sub-heading">
            {{ $t('about.card1_intro') }}
          </p>
          <p>
            {{ $t('about.card1_body_line1') }}
          </p>
          <p>
            {{ $t('about.card1_body_line2') }}
          </p>
          <p>
            {{ $t('about.card1_body_line3') }}
          </p>
          <p>
            {{ $t('about.card1_body_line4') }}
          </p>
        </div>
      </layerCard>
    </div>

    <TwoByOne class="py-5">
      <template #column-1>
        <div
          class="text-center p-5"
          style="background-image: url('/images/fader5.png');background-size: cover;"
        >
          <h2 class="display-3 text-light">
            {{ $t('about.card2_title') }}
          </h2>
        </div>
      </template>
      <template #column-2>
        <p class="pb-2" style="font-size:1.5rem;" v-html="$t('about.card2_intro')" />
        <p class="pb-2" v-html="$t('about.card2_body_line1')" />

        <nuxt-link
          :to="{ path: localePath('entry'), hash: '#page-content' }"
          class="[ btn ] btn-dark [ hero__cta ] shadow"
          >{{ $t('about.card2_cta') }}</nuxt-link
        >
      </template>
    </TwoByOne>

    <div class="row py-5">
      <LayerCard src="/images/Layer783.png">
        <h2>{{ $t('about.card4_title') }}</h2>
        <p v-html="$t('about.card4_body_line1')" />
        <p v-html="$t('about.card4_body_line2')" />
      </LayerCard>
    </div>

    <TwoByOne class="py-5">
      <template #column-1>
        <img class="image-fluid mx-auto d-block mw-100" src="/images/GBRcopy.png" />
      </template>
      <template #column-2>
        <p style="font-size: 1.25rem;" v-html="$t('about.card4_intro')" />

        <div class="row">
          <div class="col-6">
            <img src="/images/10icon.png" height="42" width="42" />
            <p v-html="$t('about.card4_list1')" />
          </div>
          <div class="col-6">
            <img src="/images/70MIconcopy.png" height="42" width="42" />
            <p v-html="$t('about.card4_list2')" />
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <img src="/images/MoonIconcopy.png" height="42" width="42" />
            <p v-html="$t('about.card4_list3')" />
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <img src="/images/2300KMIconcopy.png" height="42" width="42" />
            <p v-html="$t('about.card4_list4')" />
          </div>
          <div class="col-6">
            <img src="/images/ECOIconcopy.png" height="42" width="42" />
            <p v-html="$t('about.card4_list5')" />
          </div>
        </div>
      </template>
    </TwoByOne>

    <div class="row">
      <div class="col-12 text-center">
        <nuxt-link :to="localePath('blog')" class="[ btn ] btn-dark [ hero__cta ] shadow">
          {{ $t('about.card5_cta') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import TwoByOne from '@/components/TwoByOne';
import LayerCard from '@/components/LayerCard';
export default {
  layout: 'about',
  components: {
    TwoByOne,
    LayerCard,
  },
};
</script>
