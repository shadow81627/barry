<template>
  <!-- <div class="loading-page" v-if="loading"> -->
  <div class="loading-page">
    <div class="center-outer">
      <div class="center-inner">
        <div class="bubbles">
          <!-- <h1>Bubbling Header</h1> -->
          <!-- <div class="individual-bubble" style="left: 20 px; width: 20px; height:20px;"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  // Created for an Articles on:
  // https://www.html5andbeyond.com/bubbling-text-effect-no-canvas-required/

  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();

    //   setTimeout(() => this.$nuxt.$loading.finish(), 100000);
    // });

    // Define a blank array for the effect positions. This will be populated based on width of the title.
    const bArray = [271];
    // Define a size array, this will be used to lety bubble sizes
    const sArray = [4, 6, 8, 10, 20];

    // Push the header width values to bArray
    for (let i = 0; i < $('.bubbles').width(); i++) {
      bArray.push(i);
    }

    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function() {
      // Get a random size, defined as letiable so it can be used for both width and height
      const size = randomValue(sArray);
      // New bubble appeneded to div with it's size and left position being set inline
      // Left value is set through getting a random value from bArray
      $('.bubbles').append(
        `<div class="individual-bubble" style="left: ${Math.floor(
          Math.random() * $(document).width(),
        )}px; width: ${size}px; height: ${size}px;"></div>`,
      );

      // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
      // Callback function used to remove finsihed animations from the page
      $('.individual-bubble').animate(
        {
          bottom: '100%',
          opacity: '-=0.7',
        },
        3000,
        function() {
          $(this).remove();
        },
      );
    }, 350);
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(28, 178, 169);

  z-index: 100000;

  margin: 0;
}
/* Non essential CSS - Just for example centering */

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

.center-outer {
  display: table;
  width: 100%;
  height: 100%;
}

.center-inner {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

/* Essential CSS - Makes the effect work */

.bubbles {
  display: inline-block;
  font-family: arial;
  position: relative;
  width: 100%;
  height: 100%;
}

.bubbles h1 {
  position: relative;
  margin: 1em 0 0;
  font-family: 'Luckiest Guy', cursive;
  color: #fff;
  z-index: 2;
}

.individual-bubble {
  position: absolute;
  border-radius: 100%;
  bottom: 10px;
  background-color: #fff;
  z-index: 1;
}
</style>
