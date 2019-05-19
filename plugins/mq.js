import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  },
});
