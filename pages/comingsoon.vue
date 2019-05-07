<template>
  <div class="[ main-content__left ] scrollTo col-12 col-md-7">
    <div class="intro">
      <h2>{{ $t('comingsoon.title') }}</h2>
    </div>
    <no-ssr>
      <vac :start-time="new Date().getTime() + 1000" :end-time="new Date().getTime() + 20000">
        <span slot="preheat" slot-scope="{ startTime }">{{
          `Event start time: ${new Date(startTime)}`
        }}</span>
        <div slot="process" slot-scope="{ timeObj }">
          <div>Days: {{ timeObj.d }}</div>
          <div>Minutes: {{ timeObj.m }}</div>
          <div>Seconds: {{ timeObj.s }}</div>
        </div>
        <span slot="finish">
          <a class="btn btn-primary" :href="localePath('entry')">Go Go Go!!!</a>
        </span>
      </vac>
    </no-ssr>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 3rem;
}
</style>

<script>
export default {
  layout: 'default',
};
</script>
