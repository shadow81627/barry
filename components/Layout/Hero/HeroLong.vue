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
      let videos;
      if (vm.playerresize === 'about') {
        if (vm.$i18n.locale === 'fr-fr') {
          videos =
            vm.$mq === 'sm' || vm.$mq === 'md' || vm.$mq === 'xs'
              ? [
                  {
                    src: '/video/about_mobile_fr.m3u8',
                    type: 'application/x-mpegURL',
                  },
                ]
              : [
                  {
                    src: '/video/index_fr.m3u8',
                    type: 'application/x-mpegURL',
                  },
                ];
        } else {
          videos =
            vm.$mq === 'sm' || vm.$mq === 'md' || vm.$mq === 'xs'
              ? [
                  {
                    src: '/video/about_mobile.m3u8',
                    type: 'application/x-mpegURL',
                  },
                ]
              : [
                  {
                    src: '/video/index.m3u8',
                    type: 'application/x-mpegURL',
                  },
                ];
        }

        player.src(videos);
      } else {
        // Win page video
        videos =
          vm.$mq === 'sm' || vm.$mq === 'xs'
            ? [
                {
                  src: '/video/win_mobile.m3u8',
                  type: 'application/x-mpegURL',
                },
              ]
            : [
                {
                  src: '/video/win.m3u8',
                  type: 'application/x-mpegURL',
                },
              ];
        player.src(videos);
      }
    }

    setInterval(updateVideo(), 1000);

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
