<template>
  <div class="main-content__right">
    <a
      v-for="item in $t('mrec-tiles')"
      :key="item.alt"
      class="__card"
      :href="item.link"
      target="_blank"
      rel="noopener"
    >
      <div class="card__item">
        <div class="card__content imagecardone">
          <b-img-lazy :src="item.image" :alt="item.alt" />
        </div>
      </div>
    </a>
  </div>
</template>
