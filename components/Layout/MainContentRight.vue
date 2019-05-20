<template>
  <div class="main-content__right">
    <div v-for="item in $t('mrec-tiles')" :key="item.alt" class="__card">
      <div class="card__item">
        <div class="card__content imagecardone">
          <b-img-lazy :src="item.image" :alt="item.alt" />
        </div>
      </div>
    </div>
  </div>
</template>
