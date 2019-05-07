<template>
  <div id="app">
    <Navbar variant="dark" />

    <Heading heading="Explore the Reef" class="bg-dark" />

    <div class="container-fluid" style="min-height: 100vh;padding-left:10%;padding-right:10%;">
      <Pagination />
      <nuxt id="page-content" class="main-content" />
    </div>

    <Footer />

    <Notification />
  </div>
</template>

<script>
import Notification from '@/components/Layout/Notification';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import Heading from '@/components/Layout/Navbar/Heading';
import Pagination from '@/components/Layout/Navbar/Pagination';

export default {
  components: {
    Notification,
    Footer,
    Navbar,
    Heading,
    Pagination,
  },
};
</script>

<style src="@/assets/scss/app.scss" lang="scss"></style>
