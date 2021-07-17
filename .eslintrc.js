const prettierrc = require('./prettier.config.js');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    // 'airbnb-base',
    // 'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    '@nuxtjs',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', prettierrc],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
  },
  globals: {
    FB: 'readable',
    twttr: 'readable',
    $: 'readable',
    videojs: 'readable',
  },
};
