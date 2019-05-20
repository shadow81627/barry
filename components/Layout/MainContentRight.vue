<template>
  <div class="main-content__right">
    <div class="__card" v-for="item in $t('mrec-tiles')" :key="item.alt">
      <div class="card__item">
        <div class="card__content imagecardone">
          <b-img-lazy :src="item.image" :alt="item.alt" />
        </div>
      </div>
    </div>
  </div>
</template>
