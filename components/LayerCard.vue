<template>
  <div class="col-12 mb-5">
    <div class="row">
      <div class="layer-card__bg mt-5 h-100" :class="backgroundClass" />
    </div>

    <div class="row">
      <b-img-lazy
        class="layer-card__bg layer-card__bg--image p-0"
        :class="imageClass"
        :src="src"
        :alt="alt"
      />
    </div>
    <div class="row">
      <div :class="cardClass">
        <div class="card card-body rounded-0 shadow p-5 my-5" :class="textClass">
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
    textAlign: { type: String, default: 'center' },
    src: { type: String },
    alt: { type: String },
  },
  computed: {
    cardClass() {
      return {
        'offset-lg-5': !this.reverse && !this.fullWidth,
        'offset-md-3': !this.reverse && !this.fullWidth,
        'offset-md-0': this.reverse && !this.fullWidth,
        'col-lg-6': !this.fullWidth,
        'col-xl-5': !this.fullWidth,
        'col-md-9': !this.fullWidth,
        'col-sm-10': this.fullWidth,
        'full-card': this.fullWidth,
        'offset-sm-1': this.fullWidth,
        'my-5': !this.fullWidth,
      };
    },
    imageClass() {
      return {
        'offset-md-2': this.reverse && !this.fullWidth,
        'col-md-10': !this.fullWidth,
        'col-12': this.fullWidth,
        'position-relative': this.fullWidth,
        'h-100': !this.fullWidth,
      };
    },
    backgroundClass() {
      return {
        'offset-md-4': !this.reverse,
        'col-md-7': true,
        'col-12': this.fullWidth,
      };
    },
    textClass() {
      return {
        'text-center': this.textAlign === 'center',
        'text-left': this.textAlign === 'left',
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
  /* JOHN */
  height: 100%;
  background-color: #e2eaee;
  object-fit: cover;
}

.layer-card__bg--image {
  background-size: cover;
}

.full-card {
  margin-top: -300px;
}

@media only screen and (max-width: 768px) {
  .full-card {
    margin-top: -100px;
  }
}
</style>
