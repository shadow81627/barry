<template>
  <div id="comingsoon-layout">
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WV2SB2T"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe
    ></noscript>

    <div class="container-fluid main-content-container">
      <nuxt id="page-content" class="main-content-comingsoon" />
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/app.scss';
#comingsoon-layout {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
}
.main-content-comingsoon {
  min-height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
}
</style>
