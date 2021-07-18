const env = {
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  BASE_URL: 'https://scuberqueensland.com',
};

export default {
  mode: 'static',
  modern: true,

  router: {
    middleware: [],
    fallback: true,
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'scUber Queensland',
    meta: [
      {
        once: true,
        name: 'charset',
        hid: 'charset',
        content: 'utf-8',
      },
      {
        once: true,
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          "Uber and Queensland, Australia, are giving riders the opportunity to explore the Great Barrier Reef in the world's first rideshare submarine, scUber.",
      },
      { hid: 'fb:app_id', content: env.FACEBOOK_APP_ID },
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
    { src: '@/plugins/facebook', ssr: false },
    { src: '@/plugins/twitter', ssr: false },
    { src: '@/plugins/mq', ssr: false },
  ],

  buildModules: ['@nuxt/typescript-build'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',
    // ['@nuxtjs/google-tag-manager', { id: 'GTM-WV2SB2T' }],
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
    'nuxt-i18n',
  ],

  i18n: {
    baseUrl: env.BASE_URL,
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

  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false, // or `bvCSS`
    componentPlugins: [
      'LayoutPlugin',
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
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map';
      }
    },
  },
};
