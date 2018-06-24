<template></template>

<script>
  import { mglBaseMixin, mglControlMixin } from 'vue-mapbox'

  export default {
    name: 'GeocoderControl',
    mixins: [mglBaseMixin, mglControlMixin],

    props: {
      accessToken: {
        type: String,
        default: null
      },
      position: {
        type: String,
        default: 'top-right'
      }
    },

    data() {
      return {
        control: null
      }
    },

    created() {
      if (this.accessToken) this.mapbox.accessToken = this.accessToken
      const Geocoder = this.mapboxGeocoder
      this.control = new Geocoder(this._props)

      this.control.on('error', error => {
        this.$_emitMapEvent('geocoder-error', { error })
      })
      this.control.on('result', event => {
        this.$_emitMapEvent('geocoder-result', { event })
      })
    },

    methods: {
      $_deferredMount(payload) {
        this.map = payload.map
        console.log('MOUNTING!', this.map)
        this.map.addControl(this.control)
        this.$emit('added', this.control)
        payload.component.$off('load', this.$_deferredMount)
      }
    }
  }
</script>
