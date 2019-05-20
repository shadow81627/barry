<script>
// import videojs from 'video.js';

import Hero from './Hero';

export default {
  extends: Hero,
  mounted() {
    videojs(document.querySelector('.video-js'));
    // const player = videojs(document.querySelector('.video-js'));
    // let src;
    // if (this.$mq === 'sm') {
    //   src = '/video/about_mobile.m3u8';
    // } else {
    //   src = '/video/index.m3u8';
    // }
    // player.src({
    //   src,
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
