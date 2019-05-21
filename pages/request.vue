<template>
  <div>
    <div class="intro text-center" style="padding-top: 20px;">
      <p v-html="$t('ondemand.intro')" />
    </div>

    <div class="row py-5 special-padding-mobile">
      <div class="col-md-6 offset-md-1">
        <div class="intro">
          <h2 v-html="$t('ondemand.title')" />
        </div>
        <p v-for="item in $t('ondemand.body')" :key="item" v-html="item" />
      </div>
      <div class="col-1">
        <!-- spacing col -->
      </div>
      <div class="col-md-4 text-center p-5" style="background-color: #e2eaee;">
        <h2 class="h4 text-dark" v-html="$t('ondemand.sections')[0].title" />
        <div
          v-for="(chunk, index) in chunk($t('ondemand.sections')[0].list, 10)"
          :key="index"
          class="row"
        >
          <div v-for="item in chunk" :key="item.text" class="col-sm-12 p-2">
            <b-img-lazy v-if="item.image" :src="item.image" height="43" width="43" fluid center />
            <p v-html="item.text" />
          </div>
        </div>
      </div>
    </div>

    <div class="row container-break-out-center py-5" style="padding-top: 10px;">
      <layerCard
        :src="$t('ondemand.sections')[1].image"
        :alt="$t('ondemand.sections')[1].alt"
        reverse
        :full-width="this.$mq === 'xs' || this.$mq === 'sm'"
        text-align="left"
      >
        <div class="intro">
          <h2 class="pb-4" v-html="$t('ondemand.sections')[1].title" />
          <p v-for="item in $t('ondemand.sections')[1].list" :key="item" v-html="item" />
        </div>
      </layerCard>
    </div>

    <!-- <div v-for="section in $t('ondemand.sections')" :key="section.title" class="row">
      <h2 class="h4 text-dark" v-html="section.title" />
      <p v-for="item in section.list" :key="item" v-html="item" />
    </div> -->

    <div class="row">
      <h2 class="h4 text-dark col-12" v-html="$t('ondemand.sections')[2].title" />
    </div>

    <div class="row">
      <div class="col-sm-6">
        <ul>
          <li
            v-for="item in $t('ondemand.sections')[2].list.slice(
              0,
              Math.floor($t('ondemand.sections')[2].list.length / 2),
            )"
            :key="item"
            v-html="item"
          />
        </ul>
      </div>
      <div class="col-sm-6">
        <ul>
          <li
            v-for="item in $t('ondemand.sections')[2].list.slice(
              Math.floor($t('ondemand.sections')[2].list.length / 2),
              $t('ondemand.sections')[2].list.length,
            )"
            :key="item"
            v-html="item"
          />
        </ul>
      </div>
    </div>

    <!-- map section -->
    <div class="row pt-5">
      <h2 class="h4 text-dark col-12" v-html="$t('ondemand.map.title')" />
    </div>

    <div class="row pb-5">
      <div class="col-sm-6">
        <b-img-lazy :src="$t('ondemand.map.image1')" fluid />
      </div>
      <div class="w-100 d-block d-sm-none" style="padding-bottom: 15px;" />
      <div class="col-sm-6">
        <b-img-lazy :src="$t('ondemand.map.image2')" fluid />
      </div>
    </div>
    <!-- disclaimer -->
    <small v-for="item in $t('ondemand.disclaimer')" :key="item" v-html="item" />
  </div>
</template>

<script>
import utils from '@/assets/js/utils';

// import TwoByOne from '@/components/TwoByOne';
import LayerCard from '@/components/LayerCard';
export default {
  components: {
    // TwoByOne,
    LayerCard,
  },
  layout: 'ondemand',
  methods: {
    chunk: utils.chunk,
  },
  head() {
    return {
      ...this.$t('ondemand.head'),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://scuberqueensland.com/request',
        },
      ],
    };
  },
};
</script>
