<template>
  <div class="flip-clock" @click="update">
    <Tracker
      v-for="{ label } in trackers"
      :key="label"
      :date="date"
      :value="time[label]"
      :label="label"
    ></Tracker>
  </div>
</template>

<script>
import * as dayjs from 'dayjs';
import Tracker from './Tracker.vue';
export default {
  components: {
    Tracker,
  },
  props: { date: { type: String, required: true } },

  data: () => ({
    i: 0,
    trackers: [{ label: 'Days' }, { label: 'Hours' }, { label: 'Minutes' }, { label: 'Seconds' }],
    now: dayjs(new Date()),
  }),

  computed: {
    countdown() {
      return dayjs(this.date ?? this.tomorrow, 'YYYY-MM-DD HH:mm:ss');
    },
    diff() {
      return this.countdown.diff(this.now);
    },
    seconds() {
      return Math.floor((this.diff / 1000) % 60);
    },
    minutes() {
      return Math.floor((this.diff / 1000 / 60) % 60);
    },
    hours() {
      return Math.floor((this.diff / (1000 * 60 * 60)) % 24);
    },
    days() {
      return Math.floor(this.diff / (1000 * 60 * 60 * 24));
    },
    time() {
      // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
      return {
        Days: this.days,
        Hours: this.hours,
        Minutes: this.minutes,
        Seconds: this.seconds,
        Total: this.diff,
      };
    },
    tomorrow() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    },
  },

  beforeDestroy() {
    if (window.cancelAnimationFrame) {
      cancelAnimationFrame(this.frame);
    }
  },
  created() {
    this.update();
  },

  methods: {
    update() {
      if (global.requestAnimationFrame) {
        this.frame = requestAnimationFrame(this.update.bind(this));
      }
      if (this.i++ % 10) {
        return;
      }
      this.now = dayjs(new Date());
      return this.time;
    },
  },
};
</script>

<style></style>
