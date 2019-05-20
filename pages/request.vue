<template>
  <div>
    <div class="intro text-center">
      <p v-html="$t('ondemand.intro')" />
    </div>

    <div class="row py-5">
      <div class="col-md-6">
        <div class="intro">
          <h2 v-html="$t('ondemand.heading')" />
        </div>
        <p v-for="item in $t('ondemand.body')" :key="item" v-html="item" />
      </div>
      <div class="col-md-6 text-center py-2" style="background-color: #e2eaee;">
        <div v-for="(chunk, index) in chunk($t('about.card4.list'), 10)" :key="index" class="row">
          <div v-for="item in chunk" :key="item.text" class="col-sm-12">
            <b-img-lazy :src="item.image" height="42" width="42" fluid center />
            <p v-html="item.text" />
          </div>
        </div>
      </div>
    </div>

    <div class="row container-break-out-center py-5" style="padding-top: 10px;">
      <layerCard :src="$t('about.card1.image')" :alt="$t('about.card1.alt')" reverse xfull-width>
        <div class="intro">
          <h2 class="pb-4" v-html="$t('about.card1.title')" />
          <p class="sub-heading">
            {{ $t('about.card1.intro') }}
          </p>
          <p v-for="item in $t('about.card1.body')" :key="item" v-html="item" />
        </div>
      </layerCard>
    </div>

    <div v-for="section in $t('ondemand.sections')" :key="section.title">
      <h2 v-html="section.title" class="h4 text-dark" />
      <p v-for="item in section.list" :key="item" v-html="item" />
    </div>

    <!-- map section -->
    <div>
      <h2 v-html="$t('ondemand.map.title')" class="h4 text-dark" />
      <div class="row">
        <div class="col-sm-6">
          <b-img-lazy :src="$t('ondemand.map.image1')" fluid />
        </div>
        <div class="col-sm-6">
          <b-img-lazy :src="$t('ondemand.map.image2')" fluid />
        </div>
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
};
</script>
