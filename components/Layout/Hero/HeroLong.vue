<script>
// import videojs from 'video.js';

import Hero from './Hero';

export default {
  extends: Hero,
  mounted: () => {
    // const player = videojs('vid1');
    // player.src({
    //   // src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
    //   src: '/video/index.m3u8',
    //   type: 'application/x-mpegURL',
    // });
  },
  head: () => ({
    scripts: [{ hid: 'videojs', src: 'https://vjs.zencdn.net/7.5.4/video.js' }],
    link: [{ rel: 'stylesheet', href: 'https://vjs.zencdn.net/7.4.1/video-js.css' }],
  }),
};
</script>

<style scoped>
header .container-fluid.container-fluid {
  position: absolute;
  top: 0px;
  z-index: 2;
}
</style>
