import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  // Bootstrap 4 break points
  // https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints
  breakpoints: {
    xs: 575.98,
    sm: 767.98,
    md: 991.98,
    lg: 1199.98,
    xl: Infinity,
  },
});
