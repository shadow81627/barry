<template>
  <div>
    <div
      class="card__content blogpost__description bg-light text-dark shadow text-uppercase text-left"
    >
      <h2 class="article__title article--billboard__title text-dark h3">
        <span>Why you need to do the Noosa Everglades, stat</span>
      </h2>
    </div>
    <div class="col-12 pb-5 pl-5 pt-2">
      <a href="https://blog.queensland.com/2019/04/13/noosa-everglades/">
        <span class="small-link read-more-label" style="color: white;">Read Full Story »</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: { type: String },
  },
};
</script>

<style>
.billboard__category {
  font-weight: bold;
  line-height: 1.5;
  padding: 6px 24px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: white;
}
</style>
