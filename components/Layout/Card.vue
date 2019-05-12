<template>
  <div class="__card">
    <div class="card__item">
      <div class="card__content imagecardone">
        <!-- <img src="@/assets/images/washing-machine.png" alt="scuber" /> -->
      </div>
    </div>
    <div class="card__item">
      <div class="card__content imagecardone">
        <!-- <img src="@/assets/images/washing-machine.png" alt="scuber" /> -->
      </div>
    </div>
    <div class="card__item">
      <div class="card__content imagecard_tip" style="padding-top:2.5rem;">
        <div class="tip_container">
          <h3>{{ $t('tip.heading') }}</h3>
          <p>{{ $t('tip.description') }}</p>
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
