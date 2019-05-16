<template>
  <footer class="bg-dark text-light pt-4 pb-4">
    <div class="container">
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-12">
          <img
            class="img-fluid d-block mx-auto"
            src="@/assets/images/QA_ScUber_WR.png"
            alt="Tourism and Events Queensland | Queensland Government"
          />
        </div>

        <div class="col-12 py-4"><LangSelect class="col-md-4 col-sm-6 col-12" /></div>

        <div v-for="link in $t('footer.links')" :key="link.text" class="col-12 py-2 d-sm-none">
          <a
            :href="link.href"
            target="_blank"
            class="btn btn-outline-light col-md-4 col-sm-6 col-12"
          >
            {{ link.text }}
          </a>
        </div>

        <div class="col-12 footer-links d-none d-sm-block">
          <a v-for="link in $t('footer.links')" :key="link.text" :href="link.href" target="_blank">
            {{ link.text }}
          </a>
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
footer a {
  color: #fff !important;
  text-decoration: none;
}

.footer-links a::before {
  content: ' | ';
}

.footer-links a:first-child::before {
  content: '';
}
</style>
