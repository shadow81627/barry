<template>
  <div class="mb-4">
    <h1 class="text-center text-light p-4 text-uppercase display-4 font-weight-bold">
      {{ heading }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    heading: { type: String, required: true },
  },
};
</script>
