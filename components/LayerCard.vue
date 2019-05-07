<template>
  <div class="col-12 mb-5">
    <div class="row">
      <div class="layer-card__bg col-md-8 mt-5" :class="{ 'offset-md-4': !reverse }" />
    </div>

    <div class="row">
      <div
        class="layer-card__bg layer-card__bg--image col-md-10 shadow"
        :class="{ 'offset-md-2': reverse }"
        :style="{ 'background-image': `url(${src})` }"
      />
    </div>
    <div class="row">
      <div
        class="col-lg-5 col-md-7 my-5"
        :class="{ 'offset-lg-6': !reverse, 'offset-md-4': !reverse, 'offset-md-1': reverse }"
      >
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
    src: { type: String },
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
