# v-mapbox-geocoder 🌎
<center>

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/geospoc/v-mapbox-geocoder?sort=semver)](https://github.com/geospoc/v-mapbox-geocoder/packages) [![Ship js trigger](https://github.com/geospoc/v-mapbox-geocoder/workflows/Ship%20js%20trigger/badge.svg)](https://github.com/geospoc/v-mapbox-geocoder/actions?query=workflow%3A%22Ship+js+trigger%22) [![GitHub Release Date](https://img.shields.io/github/release-date/geospoc/v-mapbox-geocoder)](https://github.com/geospoc/v-mapbox-geocoder/releases) [![deploy](https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat)](https://github.com/algolia/shipjs) [![David](https://img.shields.io/david/peer/geospoc/v-mapbox-geocoder)](https://david-dm.org/geospoc/v-mapbox-geocoder?type=peer) [![David](https://img.shields.io/david/dev/geospoc/v-mapbox-geocoder)](http://david-dm.org/geospoc/v-mapbox-geocoder?type=dev) [![GitHub issues](https://img.shields.io/github/issues/geospoc/v-mapbox-geocoder)](https://github.com/geospoc/v-mapbox-geocoder) [![GitHub last commit](https://img.shields.io/github/last-commit/geospoc/v-mapbox-geocoder)](https://github.com/geospoc/v-mapbox-geocoder/master) ![Maintenance](https://img.shields.io/maintenance/yes/2020) [![GitHub contributors](https://img.shields.io/github/contributors/geospoc/v-mapbox-geocoder)](https://github.com/geospoc/v-mapbox-geocoder/graphs/contributors)
 
</center>

[vue-mapbox](https://github.com/soal/vue-mapbox) plugin for [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) support.

## Usage

First of all you need to install Mapbox GL and vue-mapbox. [See vue-mapbox doc](https://soal.github.io/vue-mapbox/#/quickstart)


```bash
# Install mabbox-gl-geocoder and vue-mapbox-geocoder:
$ npm i @mapbox/mapbox-gl-geocoder vue-mapbox @geospoc/v-mapbox-geocoder
```

Now you can add geocoder control like other controls:

```html
<template>
  <MglMap
    :accessToken="accessToken"
    :mapStyle="mapStyle"
  >
    <MglGeocoderControl
      :accessToken="accessToken"
      :input.sync="defaultInput"
      container="geocoder_container_id"
      position="top-left"
      @results="handleSearch"
    />
  </MglMap>
</template>

<script>
  import { MglMap } from 'vue-mapbox';
  import MglGeocoderControl from '@geospoc/v-mapbox-geocoder';
  // you can also import this in your main.js or nuxt.config.js
  // or even main/global (s)css file
  import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

  export default {
    name: 'App',
    components: {
      MglMap,
      MglGeocoderControl
    },
    data() {
      return {
        accessToken: 'YOUR_ACCESS_TOKEN',
        mapStyle: 'YOUR_MAP_STYLE',
        defaultInput: 'Bodhgaya'
      }
    },
    methods: {
      handleSearch(event) {
        console.log(event)
      }
    },
  };
</script>
```

Options for mapbox-gl-geocoder described [here](https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md) can be passed via props.

Additionaly you can pass syncronized prop `input` as in example below.
It will be passed to mapbox-gl-geocoder as default input value.
Each time you change value of this prop, mapbox-gl-geocoder `.setInput` method is called.

Same for `proximity` prop that internally invokes mapbox-gl-geocoder `setProximity` method.

Also you can call `query` method to query search and get results programmatically.

## Credits
- Thanks to [soal](https://github.com/soal) & his original [vue-mapbox-geocoder](https://github.com/soal/vue-mapbox-geocoder)
- All contributors ([list](https://github.com/geospoc/v-mapbox-geocoder/contributors)).
- All GeoSpoc ([team](https://github.com/orgs/Geospoc/people)).

## License

MIT &copy; [GeoSpoc](https://geospoc.com)