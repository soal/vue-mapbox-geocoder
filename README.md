# Vue-mapbox-geocoder

[Vue-mapbox](https://github.com/soal/vue-mapbox) plugin for [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) support.

## Usage

First of all you need to install Mapbox GL and Vue-mapbox. [See vue-mapbox doc](https://soal.github.io/vue-mapbox/#/quickstart)

Install mabbox-gl-geocoder and vue-mapbox-geocoder:

```bash
npm i @mapbox/mapbox-gl-geocoder vue-mapbox-geocoder
```

Then, on plugin registration you need to add plugins option:

```javascript
import Vue from 'vue'
import VueMapbox from 'vue-mapbox'
import Mapbox from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

Vue.use(VueMapbox, {
  mapboxgl: Mapbox,
  plugins: [{ mapboxGeocoder: MapboxGeocoder }] // Notice plugins property
})

new Vue({
  el: '#app',
  render: h => h(require('./App'))
})
```

Now you can add geocoder control like other controls:

```vue
<template>
  <mgl-map
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
  >
    <mgl-geocoder-control
      <-- props needed for GeolocateControl -->
      :accessToken="accessToken"
      :input.sync="defaultInput"
      @results="handleSearch"
    />
  </mgl-map>
</template>

<script>
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl
} from 'vue-mapbox'

import MglGeocoderControl from 'vue-mapbox-geocoder'

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
  }
}
</script>
```

Options for mapbox-gl-geocoder described [here](https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md) can be passed via props.

Additionaly you can pass syncronized prop `input` as in example below.
It will be passed to mapbox-gl-geocoder as default input value.
Each time you change value of this prop, mapbox-gl-geocoder `.setInput` method is called.

Same for `proximity` prop that internally invokes mapbox-gl-geocoder `setProximity` method.

Also you can call `query` method to query search and get results programmatically.
