<template>
  <footer class="bg-dark text-light py-5">
    <div class="container">
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-12">
          <b-img-lazy
            :src="require('@/assets/images/QA_ScUber_WR.png')"
            :alt="$t('footer.alt')"
            center
            fluid
          />
        </div>

        <div class="col-12 py-4"><LangSelect class="col-md-4 col-sm-6 col-12" /></div>

        <div v-for="link in $t('footer.links')" :key="link.text" class="col-12 py-2 d-sm-none">
          <a
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="btn btn-outline-light col-md-4 col-sm-6 col-12"
          >
            {{ link.text }}
          </a>
        </div>

        <div class="col-12 footer-links d-none d-sm-block">
          <a
            v-for="link in $t('footer.links')"
            :key="link.text"
            :href="link.href"
            target="_blank"
            rel="noopener"
          >
            {{ link.text }}
          </a>
        </div>

        <div class="col-12 text-center pt-2">
          <small v-for="item in $t('footer.body')" :key="item" v-html="item" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LangSelect from '@/components/Layout/Navbar/LangSelect';
export default {
  components: { LangSelect },
};
</script>

<style>
@media all and (min-width: 575.98px) {
  footer a {
    color: #fff !important;
    text-decoration: none;
  }
}

/* fix custom .btn:hover to not be white */
.btn-outline-light:hover {
  color: #212529 !important;
}

.footer-links a::before {
  content: ' | ';
}

.footer-links a:first-child::before {
  content: '';
}
</style>
