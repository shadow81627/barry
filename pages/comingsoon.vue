<template>
  <div class="col-12">
    <div class="intro text-center">
      <h1 class="text-uppercase">{{ $t('comingsoon.title') }}</h1>
      <p v-html="$t('comingsoon.description')" />
      <a :href="$t('comingsoon.cta.link')" class="[ btn ] btn-dark [ hero__cta ] shadow">
        {{ $t('comingsoon.cta.text') }}
      </a>
    </div>
    <no-ssr>
      <vac
        :start-time="new Date().getTime() + 1000"
        :end-time="new Date().getTime() + 1000000"
        class="main-content-center"
      >
        <span slot="preheat" slot-scope="{ startTime }">{{
          `Event start time: ${new Date(startTime)}`
        }}</span>
        <div slot="process" slot-scope="{ timeObj }" class="flip-clock">
          <span class="flip-clock__piece flip">
            <span class="flip-clock__card flip-card">
              <b class="flip-card__top">{{ timeObj.d }}</b>
              <b class="flip-card__bottom" :data-value="timeObj.d" />
              <b class="flip-card__back" :data-value="timeObj.d" />
              <b class="flip-card__back-bottom" :data-value="timeObj.d" />
            </span>
            <span class="flip-clock__slot">{{ $t('comingsoon.timer.days') }}</span>
          </span>
          <span class="flip-clock__piece flip">
            <span class="flip-clock__card flip-card">
              <b class="flip-card__top">{{ timeObj.h }}</b>
              <b class="flip-card__bottom" :data-value="timeObj.h" />
              <b class="flip-card__back" :data-value="timeObj.h" />
              <b class="flip-card__back-bottom" :data-value="timeObj.h" />
            </span>
            <span class="flip-clock__slot">{{ $t('comingsoon.timer.hours') }}</span>
          </span>
          <span class="flip-clock__piece flip">
            <span class="flip-clock__card flip-card">
              <b class="flip-card__top">{{ timeObj.m }}</b>
              <b class="flip-card__bottom" :data-value="timeObj.m" />
              <b class="flip-card__back" :data-value="timeObj.m" />
              <b class="flip-card__back-bottom" :data-value="timeObj.m" />
            </span>
            <span class="flip-clock__slot">{{ $t('comingsoon.timer.minutes') }}</span>
          </span>
          <span class="flip-clock__piece flip">
            <span class="flip-clock__card flip-card">
              <b class="flip-card__top">{{ timeObj.s }}</b>
              <b class="flip-card__bottom" :data-value="timeObj.s" />
              <b class="flip-card__back" :data-value="timeObj.s" />
              <b class="flip-card__back-bottom" :data-value="timeObj.s" />
            </span>
            <span class="flip-clock__slot">{{ $t('comingsoon.timer.seconds') }}</span>
          </span>
        </div>
        <span slot="finish">
          <a class="btn btn-primary" :href="localePath('entry')">Go Go Go!!!</a>
        </span>
      </vac>
    </no-ssr>
  </div>
</template>

<script>
export default {
  layout: 'comingsoon',
  head() {
    return {
      ...this.$t('comingsoon.head'),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://scuberqueensland.com/comingsoon',
        },
      ],
    };
  },
};
</script>

<style scoped>
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
  /*
  //position: relative;
  //top: -1.6em;
  z-index: 10;
  //color: #FFF;
*/
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

<script>
export default {
  layout: 'default',
  data: () => ({
    endTime: process.env.COMPETITON_OPEN_TIME,
  }),
};
</script>
