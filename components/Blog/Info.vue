<template>
  <div>
    <div
      class="card__content blogpost__description mx-2 shadow"
      :class="{ 'bg-dark': dark, 'text-light': dark, 'bg-light': !dark }"
    >
      <p>{{ heading }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: 'deal1' },
    description: { type: String, default: 'I am deal1' },
    link: { type: String, default: 'https://example.com/deals/1' },
    disabled: { type: Boolean, default: false },
    dark: { type: Boolean },
  },
};
</script>

<style>
.blogpost__description {
  text-align: center;
  padding: 2rem;
}
</style>
