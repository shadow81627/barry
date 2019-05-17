<template>
  <div>
    <div v-for="section in sections" :key="section.intro">
      <div :key="section.intro" class="row">
        <div class="col-12 text-center">
          <div class="mx-auto" style="max-width: 400px;">
            <img :src="section.image" class="img-fluid d-block" />
          </div>
          <p class="pb-4" v-html="section.intro" />
        </div>
      </div>

      <div v-for="(chunk, index) in chunk(section.deals, 2)" :key="index" class="row">
        <div v-for="deal in chunk" :key="deal.heading" class="col-md-6 col-sm-12 deal-column">
          <Deal v-bind="deal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '@/assets/js/utils';

import Deal from '@/components/Deal/Deal';

export default {
  components: {
    Deal,
  },
  props: {
    sections: { type: Array },
  },
  methods: {
    chunk: utils.chunk,
  },
};
</script>
