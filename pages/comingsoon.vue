<template>
  <b-row>
    <b-col>
      <div class="text" style="padding-top: 100px;">
        <h1>Coming soon</h1>
        <p>
          A world-first experience is launching May 23!
          <a
            href="https://www.queensland.com/Plan-Your-Trip/Travel-Tools/eNews-Subscribe"
            rel="noopener"
            >Register now</a
          >
          to be the first to hear.
        </p>
        <a
          href="https://www.queensland.com/Plan-Your-Trip/Travel-Tools/eNews-Subscribe"
          class="[ btn ] btn-light [ hero__cta ] shadow"
          style="background: #1cb2a9;border-radius: 0px;"
        >
          Register now
        </a>
      </div>
    </b-col>
    <b-col cols="12" md="6">
      <Countdown></Countdown>
    </b-col>
  </b-row>
</template>

<script>
import Countdown from '~/components/Countdown.vue';
export default {
  components: { Countdown },
  layout: 'comingsoon',
  head() {
    return { ...this.$t('comingsoon.head') };
  },
};
</script>

<style>
h1 {
  text-transform: uppercase;
  font-family: 'StagSans', Roboto, sans-serif;
  color: #1cb2a9;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.text {
  text-align: center;
  margin-bottom: 2rem;
}
a {
  color: #1cb2a9;
  text-decoration: none;
}
.btn {
  border-radius: 0;
  color: white;
  text-transform: uppercase;
  padding-left: 3rem;
  padding-right: 3rem;
}
.btn-light {
  color: white;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}
.btn.hero__cta {
  font-size: 1.2rem;
}
.main-content-center {
  min-height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
}
.flip-clock {
  text-align: center;
  -webkit-perspective: 600px;
  perspective: 600px;
  margin: 0 auto;
}
.flip-clock *,
.flip-clock *:before,
.flip-clock *:after {
  box-sizing: border-box;
}
.flip-clock__piece {
  display: inline-block;
  margin: 0 0.2vw;
}
@media (min-width: 1000px) {
  .flip-clock__piece {
    margin: 0 5px;
  }
}
.flip-clock__slot {
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  color: #fff;
}
.flip-card {
  display: block;
  position: relative;
  padding-bottom: 0.72em;
  font-size: 2.25rem;
  line-height: 0.95;
}
@media (min-width: 1000px) {
  .flip-clock__slot {
    font-size: 1.2rem;
  }
  .flip-card {
    font-size: 3rem;
  }
}
/*////////////////////////////////////////*/
.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
  display: block;
  height: 0.72em;
  color: #ccc;
  background: #222;
  padding: 0.23em 0.25em 0.4em;
  border-radius: 0.15em 0.15em 0 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  width: 1.8em;
}
.flip-card__bottom,
.flip-card__back-bottom {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: solid 1px #000;
  background: #393939;
  border-radius: 0 0 0.15em 0.15em;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}
.flip-card__back-bottom {
  z-index: 1;
}
.flip-card__bottom::after,
.flip-card__back-bottom::after {
  display: block;
  margin-top: -0.72em;
}
.flip-card__back::before,
.flip-card__bottom::after,
.flip-card__back-bottom::after {
  content: attr(data-value);
}
.flip-card__back {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0%;
  pointer-events: none;
}
.flip-card__back::before {
  position: relative;
  overflow: hidden;
  z-index: -1;
}
.flip .flip-card__back::before {
  z-index: 1;
  -webkit-animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
  animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
.flip .flip-card__bottom {
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);
  animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);
}
@-webkit-keyframes flipTop {
  0% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    z-index: 2;
  }
  0%,
  99% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
}
@keyframes flipTop {
  0% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    z-index: 2;
  }
  0%,
  99% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
}
@-webkit-keyframes flipBottom {
  0%,
  50% {
    z-index: -1;
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    z-index: 5;
  }
}
@keyframes flipBottom {
  0%,
  50% {
    z-index: -1;
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    z-index: 5;
  }
}
</style>
