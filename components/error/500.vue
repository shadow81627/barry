<template>
  <div class="container">
    <h1>An unexpected error has occurred</h1>
    <p>
      <span>Please <a href="javascript:location.reload();">try again</a>, or email </span>
      <a href="mailto:dev@xcommedia.com.au?subject=Technical%20issue">
        dev@xcommedia.com.au
      </a>
      <span> with the words "<strong>Technical issue</strong>" in the subject line.</span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
