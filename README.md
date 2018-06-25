# Vue-mapbox-geocoder

[Vue-mapbox](https://github.com/soal/vue-mapbox) plugin for [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) support.


## Usage
First of all you need to install Mapbox GL and Vue-mapbox. [See vue-mapbox doc](https://soal.github.io/vue-mapbox/#/quickstart)

After, obviosly, you need to install mabbox-gl-geocoder:

```bash
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
    <mgl-navigation-control position="top-right"/>
    <mgl-geolocate-control position="top-right" />
    <mgl-geocoder-control
      :accessToken="accessToken"
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
    MglNavigationControl,
    MglGeolocateControl,
    MglGeocoderControl
  },
  data() {
    return {
      accessToken: 'some_token',
      mapStyle: 'some_style'
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
