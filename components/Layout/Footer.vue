<template>
  <footer class="bg-dark text-light pt-4 pb-4">
    <div class="container">
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-12">
          <img
            class="img-fluid d-block mx-auto"
            src="https://cdn2.queensland.com/Content/Images/logos/teq-qldgov-logo-2017.png?d=20170822T145058"
            alt="Tourism and Events Queensland | Queensland Government"
          />
        </div>

        <div class="col-12 py-4"><LangSelect class="mw-25" /></div>

        <div class="col-12">
          <a href="https://queensland.com" target="_blank">Queensland.com</a> |
          <a href="https://uber.com" target="_blank">Unber.com</a> |
          <a href="#" target="_blank">Privacy</a> |
          <a href="#" target="_blank">Terms and Conditions</a> |
          <a href="#" target="_blank">Media Centre</a> |
          <a href="#" target="_blank">Generic Enquiries</a>
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
</style>
