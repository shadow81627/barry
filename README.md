# Barry

> Project barry is a super secret Tourism Events Queensland Competition. The comp is a "reskin" of summer feels 2017.

## Local Development Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Deploy


```bash
# Install package-lock.json
npm ci

# Lint with prettier/eslint
npm run lint

# Test with jest
npm run test

# Build static files into /dist
npm run generate

# Copy /dist to file server
# ???
# Profit
```


## Dependencies

Dependencies:
* [Nuxt](https://nuxtjs.org): Static site generator
* [Vue](https://vuejs.org/): JavaScript Framework
* [Ajv](https://ajv.js.org/): Another JSON Schema Validator
* [Vuex](https://vuex.vuejs.org/): State Management Pattern
* [Axios](https://github.com/axios/axios): Promise based HTTP client
* [Dotenv](https://www.npmjs.com/package/dotenv): loads environment variables from a .env file into process.env
* [NuxtPWA](https://pwa.nuxtjs.org/): Progressive Web Apps (PWA)
* [Bootstrap](https://getbootstrap.com/): Front-end component library
* [vue-i18n](https://kazupon.github.io/vue-i18n/): Internationalization
* [video.js](https://videojs.com/): Video Player Framework
* [jQuery](https://jquery.com/): Scroll animations, would like to remove and make all animaitons vanilla
* [FontAwesome](https://fontawesome.com/): Vector icons and social logos
* [VAC (vue-awesome-countdown)](https://vac.js.org/): Countdown plug-in with high performance and high accuracy for Vue 2.5.0+.

Dev Dependencies:
* [Jest](https://jestjs.io/): JavaScript Testing Framework
* [eslint](https://eslint.org/): JavaScript Linting (airbnb style)
* [prettier](https://prettier.io/): Code formatter
* [sass-loader](https://github.com/webpack-contrib/sass-loader): Compiles Sass to CSS (theming bootstrap)

Need to add:
* [Google Analytics](https://github.com/nuxt-community/analytics-module): Vue plugin for Google Analytics
* [Google Tag Manager](https://www.npmjs.com/package/@nuxtjs/google-tag-manager): Google Tag Manager (GTM)
* [Datepicker](https://www.npmjs.com/package/vuejs-datepicker): A datepicker Vue component

Would like to Add:
* [Sentry](https://sentry.io): Open-source error tracking ([selfhosted?](https://github.com/getsentry/onpremise))
* [Percy](https://percy.io/): Your all-in-one visual review platform
* [Pingdom](https://www.pingdom.com/): Website Performance Monitoring

Things to fix:
* Remove FontAwesome
* Remove AJV use Browser validation API instead

## Features

* Internationalization
* Form validation schema
* HLS hero video banner
* Static site generation
* Progressive Web App (PWA)
* Unit tests with Jest (if I write some...)
* SCSS custom theming for Bootstrap
* Coming soon Countdown


## Usage

Page data is kept in three locations:
* /assets/json
* /locales
* /static

The locales folder is where page content is store for internationalization all page text content should be loaded from here if it needs to be internationalized. The json assets is for storing files that do not need to be internationalized like the form validation schema. Static assets like the favicon are stored in /static folder.
