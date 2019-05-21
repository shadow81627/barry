<script>
// import videojs from 'video.js';

import Hero from './Hero';

export default {
  extends: Hero,
  mounted() {
    const vm = this;
    const player = videojs(document.querySelector('.video-js', this.dataSetup));
    if (vm.playerresize) {
      player.on('playerresize', function() {
        const videos =
          vm.$mq === 'sm'
            ? [
                {
                  src: '/video/about_mobile.m3u8',
                  type: 'application/x-mpegURL',
                },
                {
                  src: '/video/ABOUT_Mobile_Placeholder.mp4',
                  type: 'video/mp4',
                },
              ]
            : [
                {
                  src: '/video/index.m3u8',
                  type: 'application/x-mpegURL',
                },
              ];

        player.src(videos);
      });
    }
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
