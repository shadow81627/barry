<script>
import videojs from 'video.js';

import Hero from './Hero';

export default {
  extends: Hero,
  mounted: () => {
    const player = videojs('vid1');
    player.src({
      // src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
      src: '/video/index.m3u8',
      type: 'application/x-mpegURL',
    });
  },
};
</script>
