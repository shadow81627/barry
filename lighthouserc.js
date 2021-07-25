const WARN = 'warn';
module.exports = {
  ci: {
    collect: {
      url: [
        '/',
        '/404.html',
        '/explore/',
        '/close',
        '/confirm',
        '/offers',
        '/request',
        '/unsubscribe',
        '/win/',
        '/comingsoon/',
      ],
      staticDistDir: './dist',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'unused-javascript': WARN,
        'unused-css-rules': WARN,
        'non-composited-animations': WARN,
        'errors-in-console': WARN,
        canonical: WARN,
        'color-contrast': WARN,
        'csp-xss': WARN,
        'html-lang-valid': WARN,
        'link-text': WARN,
        'maskable-icon': WARN,
        'preload-lcp-image': WARN,
        'uses-rel-preconnect': WARN,
        'uses-responsive-images': WARN,
        'unsized-images': WARN,
        'font-size': WARN,
        'image-alt': WARN,
        'duplicate-id-active': WARN,
        'link-name': WARN,
        'font-display': WARN,
        'external-anchors-use-rel-noopener': WARN,
        'button-name': WARN,
        'image-size-responsive': WARN,
        'uses-optimized-images': WARN,
        list: WARN,
        'total-byte-weight': WARN,
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
