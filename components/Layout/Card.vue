<template>
  <div class="__card">
    <div class="card__item">
      <div class="card__content imagecardone">
        <b-img-lazy src="/images/win1-image.jpg" alt="scuber" />
      </div>
    </div>
    <div class="__card">
      <div class="card__item">
        <div class="card__content imagecardone">
          <b-img-lazy src="/images/win2-image.jpg" alt="scuber" />
        </div>
      </div>
    </div>
    <div class="__card">
      <div class="card__item">
        <div class="card__content imagecardone">
          <b-img-lazy src="/images/win3-image.jpg" alt="scuber" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card__item:first-child {
  order: 1;
}
.card__item:nth-child(1) {
  order: 2;
}

@media screen and (max-width: 991px) {
  .__card {
    display: flex;
    flex-direction: column;
  }
  .card__item:nth-child(2) {
    order: 1;
    height: 0px;
  }
}
</style>
