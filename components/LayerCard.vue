<template>
  <div class="col-12 mb-5">
    <div class="row">
      <div class="layer-card__bg mt-5" :class="backgroundClass" />
    </div>

    <div class="row">
      <img class="layer-card__bg layer-card__bg--image p-0" :class="imageClass" :src="src" />
    </div>
    <div class="row">
      <div class="my-5" :class="cardClass">
        <div class="card card-body rounded-0 text-center shadow p-5 my-5">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: false },
    src: { type: String },
  },
  computed: {
    cardClass() {
      return {
        'offset-lg-6': !this.reverse && !this.fullWidth,
        'offset-md-4': !this.reverse && !this.fullWidth,
        'offset-md-1': this.reverse && !this.fullWidth,
        'col-lg-5': !this.fullWidth,
        'col-md-7': !this.fullWidth,
        'col-12': this.fullWidth,
      };
    },
    imageClass() {
      return {
        'offset-md-2': this.reverse && !this.fullWidth,
        'col-md-10': !this.fullWidth,
        'col-12': this.fullWidth,
        'position-relative': this.fullWidth,
      };
    },
    backgroundClass() {
      return {
        'offset-md-4': !this.reverse && !this.fullWidth,
        'col-md-8': !this.fullWidth,
        'col-12': this.fullWidth,
      };
    },
  },
};
</script>

<style>
.layer-card__bg {
  position: absolute;
  top: 0px;
  z-index: -1;
  height: 100%;
  background-color: #e2eaee;
}

.layer-card__bg--image {
  background-size: cover;
}
</style>
