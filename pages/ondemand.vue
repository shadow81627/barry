<template>
  <div>
    <div class="intro">
      <h2 v-html="$t('ondemand.title')" />
      <p v-html="$t('ondemand.intro')" />
    </div>
    <p v-for="item in $t('ondemand.body')" :key="item" v-html="item" />
    <!-- <p v-for="item in $t('ondemand.list')" :key="item" v-html="item" /> -->
    <p v-for="item in $t('ondemand.disclaimer')" :key="item" v-html="item" />
  </div>
</template>

<script>
export default {
  layout: 'ondemand',
};
</script>
