# v-mapbox-geocoder 🌎

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