# Barry

> Project barry is a super secret Tourism Events Queensland Competition. The comp is a "reskin" of summer feels 2017.

## Local Development Build Setup

```bash
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

## Hero Video

Use ffmpeg to generate video files with mime type application/x-mpegURL used for hls live streaming the video in chunks.

```bash
ffmpeg -i input.mp4 -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls index.m3u8
```

```bash
ffmpeg -i "Salty Wings - Summersite - Whitehaven Couple Wide Qld endframe V3.mp4" -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls index.m3u8
```

```bash
ffmpeg -i "48 Website_1.mp4" -vf "scale=w=1280:h=720:force_original_aspect_ratio=decrease" -profile:v main -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k -maxrate 2675k -bufsize 3750k -level 3.0 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls index.m3u8
```

```bash
ffmpeg -i "48 Hero 9-16_1.mp4" -profile:v main -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k -maxrate 2675k -bufsize 3750k -level 3.0 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls about_mobile.m3u8
```

```bash
ffmpeg -i "6sec Bumper 9-16_1.mp4" -profile:v main -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k -maxrate 2675k -bufsize 3750k -level 3.0 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls win_mobile.m3u8
```

```bash
ffmpeg -i "6sec Bumper_1.mp4" -vf "scale=w=1280:h=720:force_original_aspect_ratio=decrease" -c:a aac -ar 48000 -b:a 128k -c:v h264 -profile:v main -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k -maxrate 2675k -bufsize 3750k -level 3.0 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls win.m3u8
```

```bash
ffmpeg -i "6sec Bumper_1.mp4" -framerate 30 -profile:v baseline -level 3.0 -start_number 0 -hls_time 6 -hls_list_size 0 -f hls win.m3u8
```

```bash
ffmpeg -i "48 Website_1.mp4" -framerate 30 -profile:v baseline -level 3.0 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls index.m3u8
```

video change on first and 9th of june.
remove win a scuber ta on hero on 1st
copy change in meet scuber
remove enter now scuber
remove request tile on 19th of june
3rd of june winners
offers 30th of june

```bash
ffmpeg -hide_banner -y -i "6sec Bumper_1.mp4" \
  -vf scale=w=640:h=360:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod  -b:v 800k -maxrate 856k -bufsize 1200k -b:a 96k -hls_segment_filename win/360p_%03d.ts win/360p.m3u8 \
  -vf scale=w=842:h=480:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 1400k -maxrate 1498k -bufsize 2100k -b:a 128k -hls_segment_filename win/480p_%03d.ts win/480p.m3u8 \
  -vf scale=w=1280:h=720:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 2800k -maxrate 2996k -bufsize 4200k -b:a 128k -hls_segment_filename win/720p_%03d.ts win/720p.m3u8 \
  -vf scale=w=1920:h=1080:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 5000k -maxrate 5350k -bufsize 7500k -b:a 192k -hls_segment_filename win/1080p_%03d.ts win/1080p.m3u8
```

### Close videos

```bash
ffmpeg -i "48 Website_Book_1.mp4" -vf "scale=w=1280:h=720:force_original_aspect_ratio=decrease" -profile:v main -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k -maxrate 2675k -bufsize 3750k -level 3.0 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls index.m3u8
```

```bash
ffmpeg -i "48 Hero 9-16_Book_1.mp4" -profile:v main -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k -maxrate 2675k -bufsize 3750k -level 3.0 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls about_mobile.m3u8
```

French

```bash
ffmpeg -i "48 French Website mute_Book_1.mp4" -vf "scale=w=1280:h=720:force_original_aspect_ratio=decrease" -profile:v main -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k -maxrate 2675k -bufsize 3750k -level 3.0 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls index_fr.m3u8
```

```bash
ffmpeg -i "48 French 9-16_Book_1.mp4" -profile:v main -crf 20 -g 48 -keyint_min 48 -sc_threshold 0 -b:v 2500k -maxrate 2675k -bufsize 3750k -level 3.0 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls about_mobile_fr.m3u8
```


## Dependencies

Dependencies:

- [Nuxt](https://nuxtjs.org): Static site generator
- [Vue](https://vuejs.org/): JavaScript Framework
- [Ajv](https://ajv.js.org/): Another JSON Schema Validator
- [Vuex](https://vuex.vuejs.org/): State Management Pattern
- [Axios](https://github.com/axios/axios): Promise based HTTP client
- [Dotenv](https://www.npmjs.com/package/dotenv): loads environment variables from a .env file into process.env
- [NuxtPWA](https://pwa.nuxtjs.org/): Progressive Web Apps (PWA)
- [Bootstrap](https://getbootstrap.com/): Front-end component library
- [vue-i18n](https://kazupon.github.io/vue-i18n/): Internationalization
- [video.js](https://videojs.com/): Video Player Framework
- [jQuery](https://jquery.com/): Scroll animations, would like to remove and make all animaitons vanilla
- [FontAwesome](https://fontawesome.com/): Vector icons and social logos
- [VAC (vue-awesome-countdown)](https://vac.js.org/): Countdown plug-in with high performance and high accuracy for Vue 2.5.0+.

Dev Dependencies:

- [Jest](https://jestjs.io/): JavaScript Testing Framework
- [eslint](https://eslint.org/): JavaScript Linting (airbnb style)
- [prettier](https://prettier.io/): Code formatter
- [sass-loader](https://github.com/webpack-contrib/sass-loader): Compiles Sass to CSS (theming bootstrap)

Need to add:

- [Google Analytics](https://github.com/nuxt-community/analytics-module): Vue plugin for Google Analytics
- [Google Tag Manager](https://www.npmjs.com/package/@nuxtjs/google-tag-manager): Google Tag Manager (GTM)
- [Datepicker](https://www.npmjs.com/package/vuejs-datepicker): A datepicker Vue component

Would like to Add:

- [Sentry](https://sentry.io): Open-source error tracking ([selfhosted?](https://github.com/getsentry/onpremise))
- [Percy](https://percy.io/): Your all-in-one visual review platform
- [Pingdom](https://www.pingdom.com/): Website Performance Monitoring

Things to fix:

- Remove FontAwesome
- Remove AJV use Browser validation API instead

## Features

- Internationalization
- Form validation schema
- HLS hero video banner
- Static site generation
- Progressive Web App (PWA)
- Unit tests with Jest (if I write some...)
- SCSS custom theming for Bootstrap
- Coming soon Countdown

## Usage

Page data is kept in three locations:

- /assets/json
- /locales
- /static

The locales folder is where page content is store for internationalization all page text content should be loaded from here if it needs to be internationalized. The json assets is for storing files that do not need to be internationalized like the form validation schema. Static assets like the favicon are stored in /static folder.
