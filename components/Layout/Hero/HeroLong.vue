<script>
// import videojs from 'video.js';

import { setInterval } from 'timers';
import Hero from './Hero';

export default {
  extends: Hero,
  mounted() {
    const vm = this;
    const player = videojs(document.querySelector('.video-js', this.dataSetup));

    function updateVideo() {
      if (vm.playerresize) {
        const videos =
          vm.$mq === 'sm' || vm.$mq === 'md'
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
                {
                  src: '/video/ABOUT_Desktop_Placeholder.mp4',
                  type: 'video/mp4',
                },
              ];

        player.src(videos);
      }
    }

    setTimeout(setInterval(updateVideo(), 1000), 10000);

    document.addEventListener('DOMContentLoaded', function(e) {
      updateVideo();
    });
    document.addEventListener('beforeunload', function(e) {
      updateVideo();
    });
    document.addEventListener('onload', function(e) {
      updateVideo();
    });
    player.on('playerresize', function() {
      updateVideo();
    });
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
