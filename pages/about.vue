<template>
  <div>
    <div class="row py-5">
      <layerCard src="/images/Layer919.png" reverse>
        <div class="intro">
          <h2 class="pb-4" v-html="$t('about.title')" />
          <p>
            <strong>{{ $t('about.intro') }}</strong>
          </p>
          <p>
            Travel like never before, exploring Australia’s Great Barrier Reef in the world’s first
            on-demand submarine.
          </p>
          <p>
            Launching globally on 23 May, scUber is powered by global ride-sharing platform Uber and
            Tourism and Events Queensland, showcasing the Great Barrier Reef in all its
            awe-inspiring beauty.
          </p>
        </div>
      </layerCard>
    </div>

    <TwoByOne class="py-5">
      <template #column-1>
        <div
          class="text-center p-5"
          style="background-image: url('/images/fader5.png');background-size: cover;"
        >
          <h2 class="display-3 text-light">
            <span class="d-block">Win a</span>
            <span class="d-block">ride in</span>
            <span class="d-block">sc<strong>Uber</strong></span>
          </h2>
        </div>
      </template>
      <template #column-2>
        <p class="pb-2" style="font-size:1.5rem;">
          You and a friend can
          <strong class="text-primary">WIN an all-expenses paid trip</strong>
          to Australia’s Great Barrier Reef to experience the ride of your lives on ScUber.
        </p>
        <p class="pb-2">
          For your chance to win, enter the competitionand tell us in 25 words or less why you
          should experience the wonder of the Great Barrier Reef with ScUber.
        </p>

        <nuxt-link
          :to="{ path: localePath('entry'), hash: '#page-content' }"
          class="[ btn ] btn-dark [ hero__cta ] shadow"
          >Enter Now</nuxt-link
        >
      </template>
    </TwoByOne>

    <div class="row py-5">
      <LayerCard src="/images/Layer783.png">
        <h2>Take a deep dive</h2>
        <p>
          The Great Barrier Reef is a world-heritage wonder made up of 3,000 individual reefs, 900
          islands and over 1,500 species of fish.
        </p>
        <p>
          Over xxx people visit the Reef each year, exploring it from above and below the surface.
          In scUber, there’s a new way to have a completely immersive underwater experience, when
          you want it.
        </p>
      </LayerCard>
    </div>

    <TwoByOne class="py-5">
      <template #column-1>
        <img class="image-fluid mx-auto d-block mw-100" src="/images/GBRcopy.png" />
      </template>
      <template #column-2>
        <h2>Be inspired</h2>
        <p style="font-size: 1.25rem;">
          Think you know the Great Barrier Reef? Think again. Here’s what makes it so great:
        </p>

        <div class="row">
          <div class="col-6">
            <img src="/images/10icon.png" height="42" width="42" />
            <p>
              It represents approximately
              <strong>10%</strong> of all coral reefs in the world.
            </p>
          </div>
          <div class="col-6">
            <img src="/images/70MIconcopy.png" height="42" width="42" />
            <p>
              The Great Barrier Reef is the size of about <strong>70 million</strong> football
              fields.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <img src="/images/MoonIconcopy.png" height="42" width="42" />
            <p>
              It’s the largest natural feature on earth and is the only living structure that can be
              seen from the moon.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <img src="/images/2300KMIconcopy.png" height="42" width="42" />
            <p>
              The Reef is the world’s largest and longest coral reef system, stretching for 2,300km
              from the tip of Cape York in the north to Bundaberg in the south. That’s about the
              distance between New York and Dallas!
            </p>
          </div>
          <div class="col-6">
            <img src="/images/ECOIconcopy.png" height="42" width="42" />
            <p>
              A World Heritage Area since 1981 and the world’s first reef ecosystem to be recognised
              by UNESCO, the Great Barrier Reef is highly protected and one of the best-managed
              marine areas on Earth.
            </p>
          </div>
        </div>
      </template>
    </TwoByOne>

    <div class="row">
      <div class="col-12 text-center">
        <nuxt-link :to="localePath('blog')" class="[ btn ] btn-dark [ hero__cta ] shadow"
          >Explore more</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import TwoByOne from '@/components/TwoByOne';
import LayerCard from '@/components/LayerCard';
export default {
  layout: 'about',
  components: {
    TwoByOne,
    LayerCard,
  },
};
</script>
