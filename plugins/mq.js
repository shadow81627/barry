import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 768,
    lg: 1250,
    xl: Infinity,
  },
});
