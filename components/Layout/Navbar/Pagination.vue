<template>
  <nav
    class="container-break-out-center my-4 justify-content-center pagination-wrapper d-none d-md-flex"
  >
    <div v-for="link in $t('pagination')" :key="link.value" class="col-md-auto col-6">
      <b-nav-item :to="localePath(link.value)" link-classes="p-0" active-class="active">
        <i class="fa fa-circle" aria-hidden="true" />
        {{ link.text }}
      </b-nav-item>
    </div>
  </nav>
</template>

<style scoped>
.pagination-wrapper {
  letter-spacing: 0.5rem;
  list-style: none;
}

a {
  color: #6c757d;
}

.active {
  color: black;
}
</style>
