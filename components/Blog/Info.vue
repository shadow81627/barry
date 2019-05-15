<template>
  <div
    class="card__content blogpost__description mx-3 shadow px-2 text-uppercase"
    :class="{ 'bg-dark': dark, 'text-light': dark, 'bg-light': !dark, 'p-2': dark }"
    :style="{ 'text-align': textAlign }"
  >
    <p>{{ heading }}</p>
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
    textAlign: { type: String, default: 'center' },
  },
};
</script>
