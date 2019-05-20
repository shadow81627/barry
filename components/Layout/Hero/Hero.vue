<template>
  <header>
    <video
      id="vid1"
      :poster="poster"
      class="video-js fullscreen"
      autoplay
      playsinline
      muted
      loop
      :data-setup="dataSetup"
    >
      <slot />
    </video>

    <div class="container-fluid h-100 p-0">
      <div class="hero__text">
        <h1 class="pt-3" v-html="title" />
        <div class="hero__blurb" v-html="blurb" />

        <b-nav v-if="cta" class="d-inline">
          <nuxt-link
            :to="{ path: localePath('entry'), hash: '#page-content' }"
            class="[ btn ] btn-dark [ hero__cta ]"
            >{{ cta }}</nuxt-link
          >
        </b-nav>
      </div>

      <nuxt-link v-if="link" :to="localePath(link.path)" class="hero__link"
        >{{ link.text }} &gt;</nuxt-link
      >
    </div>
  </header>
</template>

<script>
export default {
  props: {
    overlay: { type: Boolean, default: true },
    brand: { type: String },
    poster: { type: String },
    sources: { type: Array },
    title: { type: String },
    blurb: { type: String },
    cta: { type: String },
    link: { type: Object },
    dataSetup: { type: String, default: '' },
  },
  head() {
    return { title: this.title };
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

.hero__link {
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  color: black;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  margin: 2rem 0rem;
  padding: 1rem 4rem;
  text-transform: uppercase;
}

header {
  position: relative;
  background-color: black;
  height: 90vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header .container-fluid {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

.hero__video embed .hero__video iframe,
.video-js,
.video-js video,
.hero__video object,
.hero__video video {
  min-height: 100%;
  position: absolute;
  width: 100%;
  object-fit: cover;
}

.hero__text {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
  color: white;

  h1 {
    color: white;
    font-size: 5.7rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
}

.hero__logo {
  max-width: 180px;
}

@media all and (max-width: 991px) {
  .hero__logo {
    width: 120px;
  }
}

.hero__blurb {
  font-size: 0.75rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 0.25rem;
}

@media all and (max-width: 520px) {
  // ELI
  .hero__link {
    font-size: 1rem;
    letter-spacing: 0.25rem;
    padding: 1rem 1rem;
  }

  .hero__blurb {
    font-size: 0.5rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    font-weight: 300;
    letter-spacing: 0.25rem;
  }
}

@media all and (min-width: 992px) {
  .hero__blurb {
    font-size: 1.7rem;
    width: 45%;
  }
}

@media all and (max-width: 991px) {
  .hero__blurb {
    font-size: 125%;
    line-height: 100%;
    width: 60%;
    margin-bottom: 0.8rem;
  }

  .hero__text h1 {
    font-size: 4rem;
  }
}

.btn.hero__cta {
  font-size: 1.5rem;
}

.hero__cta a {
  color: white;
}

.hero__mouse {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

  img {
    margin-bottom: 2.5rem;
    animation: bounce 1s 1s infinite;
  }
}

// fucked video dimensions
.vid1-dimensions {
  width: 100%;
  height: 100%;
}
.video-js {
  width: 100%;
  height: 100%;
}
</style>
