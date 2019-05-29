export default {
  mode: 'spa',

  router: {
    middleware: ['check-subscriber-hash', 'otherlevels-middleware'],
  },

  manifest: {
    gcm_sender_id: '609863794561',
  },

  workbox: {
    importScripts: [
      'https://cdn.otherlevels.com/js-sdk/ol-service-worker.js?appKey=7b9f8bc23f715afc5141842400f6451a',
    ],
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'scUber Queensland',
    // Stop head from being reloaded client side
    // htmlAttrs: { 'data-vue-meta-server-rendered': '' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Uber and Queensland, Australia, are giving riders the opportunity to explore the Great Barrier Reef in the world's first rideshare submarine, scUber.",
      },
      { hid: 'fb:app_id', content: '2155029214545851' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Win a scUber ride' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'I just entered to win a scUber ride, who’s coming with me?!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dliu8bphxvibx.cloudfront.net/images/fb-share-image.jpg',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://scuberqueensland.com/win' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css',
      },
      { rel: 'stylesheet', href: 'https://vjs.zencdn.net/7.4.1/video-js.css' },
      // fonts
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap',
      },
    ],
    script: [
      {
        src:
          'https://cdn.otherlevels.com/js-sdk/otherlevels.js?appKey=7b9f8bc23f715afc5141842400f6451a',
        // async: true,
        // defer: true,
      },
      {
        hid: 'videojs',
        src: 'https://vjs.zencdn.net/7.5.4/video.min.js',
        async: true,
        defer: true,
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loadingIndicator: {
    name: '~/loading.html',
    color: 'white',
    throttle: 0,
    background: 'black',
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/otherlevels', ssr: false },
    { src: '@/plugins/facebook', ssr: false },
    { src: '@/plugins/twitter', ssr: false },
    { src: '@/plugins/mq', ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-WV2SB2T' }],
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt',
    [
      'nuxt-i18n',
      {
        baseUrl: 'https://scuberqueensland.com',
        strategy: 'prefix_and_default',
        langDir: 'locales/',
        locales: [
          {
            code: 'en-au',
            name: 'English Australia',
            iso: 'en-AU',
            file: 'en-AU.json',
          },
          {
            code: 'en-nz',
            name: 'English New Zealand',
            iso: 'en-AU',
            file: 'en-NZ.json',
          },
          {
            code: 'en-gb',
            name: 'English United Kingdom',
            iso: 'en-GB',
            file: 'en-GB.json',
          },
          {
            code: 'en-us',
            name: 'English USA',
            iso: 'en-US',
            file: 'en-US.json',
          },
          {
            code: 'en-ca',
            name: 'English Canada',
            iso: 'en-CA',
            file: 'en-CA.json',
          },
          { code: 'fr-fr', name: 'Français', iso: 'fr-FR', file: 'fr-FR.json' },
        ],
        defaultLocale: 'en-au',
        lazy: true,
        vueI18n: {
          fallbackLocale: 'en-au',
        },
      },
    ],
  ],
  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false, // or `bvCSS`
    componentPlugins: [
      'Form',
      'FormGroup',
      'FormCheckbox',
      'FormInput',
      'FormRadio',
      'FormTextarea',
      'FormSelect',
      'Navbar',
      'Collapse',
      'Dropdown',
      'Badge',
      'Image',
      'Button',
    ],
    directivePlugins: ['Toggle', 'Scrollspy'],
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
