<template>
  <span class="flip-clock__piece">
    <span class="flip-clock__card flip-card">
      <b class="flip-card__top">{{ current }}</b>
      <b class="flip-card__bottom" :data-value="current"></b>
      <b class="flip-card__back" :data-value="previous"></b>
      <b class="flip-card__back-bottom" :data-value="previous"></b>
    </span>
    <span class="flip-clock__slot">{{ label }}</span>
  </span>
</template>

<script>
export default {
  props: {
    label: { type: String, default: null },
    value: { type: Number, required: true, default: 0 },
  },
  data: () => ({
    current: 0,
    previous: 0,
  }),
  watch: {
    value() {
      this.flip();
    },
  },
  created() {
    this.previous = this.value;
    this.current = this.value;
    this.flip();
  },
  methods: {
    pad(value, length = 2, pad = '0') {
      return Number(String(value).padStart(length, pad));
    },
    flip(value = this.value) {
      let val = value;
      this.show = true;

      val = val < 0 ? 0 : val;

      if (val !== this.current) {
        this.previous = this.current;
        this.current = val;

        this.$el.classList.remove('flip');
        this.$el.classList.add('flip');
      }
    },
  },
};
</script>

<style></style>
