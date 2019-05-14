import pkg from './package';

export default {
  mode: 'spa',

  router: {
    middleware: ['entrant-exists'],
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
    title: pkg.name,
    // Stop head from being reloaded client side
    htmlAttrs: { 'data-vue-meta-server-rendered': '' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://cdn.queensland.com/Content/Images/site-icons/con-favicon-16x16.png?d=20170718T075516',
        sizes: '16x16',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css',
      },
      { rel: 'stylesheet', href: 'https://vjs.zencdn.net/7.4.1/video-js.css' },
    ],
    script: [
      {
        src:
          'https://cdn.otherlevels.com/js-sdk/otherlevels.js?appKey=7b9f8bc23f715afc5141842400f6451a',
        async: true,
        defer: true,
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
    { src: '@/plugins/vac', ssr: false },
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
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_and_default',
        langDir: 'locales/',
        locales: [
          {
            code: 'en-au',
            name: 'English Australia',
            iso: 'en-AU',
            file: 'en-GB.json',
          },
          {
            code: 'en-nz',
            name: 'English New Zealand',
            iso: 'en-AU',
            file: 'en-GB.json',
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
            file: 'en-GB.json',
          },
          {
            code: 'en-ca',
            name: 'English Canada',
            iso: 'en-CA',
            file: 'en-GB.json',
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
