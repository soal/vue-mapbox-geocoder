<template></template>

<script>
  import { mglPluginMixin, mglControlMixin } from 'vue-mapbox'

  const geocoderEvents = {
    loading: 'loading',
    results: 'results',
    result: 'result',
    error: 'error'
  }

  export default {
    name: 'GeocoderControl',
    mixins: [mglBaseMixin, mglControlMixin],

    props: {
      // Mapbox-geocoder options
      accessToken: {
        type: String,
        required: true
      },
      zoom: {
        type: Number,
        default: 16
      },
      flyTo: {
        type: Boolean,
        default: true
      },
      placeholder: {
        type: String,
        default: 'Search'
      },
      proximity: {
        type: Object,
        default: null
      },
      trackProximity: {
        type: Boolean,
        default: false
      },
      bbox: {
        type: Array,
        default: null
      },
      types: {
        type: String,
        default: null
      },
      country: {
        type: String,
        default: null
      },
      minLength: {
        type: Number,
        default: 2
      },
      limit: {
        type: Number,
        default: 5
      },
      language: {
        type: String,
        default: null
      },
      filter: {
        type: Function,
        default: null
      },
      localGeocoder: {
        type: Function,
        default: null
      },
      // Component options
      input: {
        type: String,
        default: null
      }
    },

    data() {
      return {
        control: null,
        initial: true
      }
    },

    watch: {
      input: {
        handler(next, prev) {
          if (this.control && next !== prev) {
            this.control.setInput(next)
          }
        },
        immediate: true
      },
      proximity(next, prev) {
        if (this.control && next !== prev) {
          this.control.setProximity(next)
        }
      }
    },

    created() {
      if (this.accessToken) this.mapbox.accessToken = this.accessToken
      const Geocoder = this.mapboxGeocoder
      this.control = new Geocoder(this._props)
      this.control.on('results', this.$_updateInput)
    },

    beforeDestroy() {
      this.control.off('results', this.$_updateInput)
    },

    methods: {
      $_deferredMount(payload) {
        this.map = payload.map
        this.map.addControl(this.control)
        if (this.input) {
          this.control.setInput(this.input)
        }
        this.$_emitMapEvent('added', { geocoder: this.control })
        if (this.$options._parentListeners) {
          const eventNames = Object.keys(geocoderEvents)
          const eventsToListen = Object.keys(this.$options._parentListeners)
            .filter(eventName =>
              eventNames.indexOf(eventName) !== -1
            )
          this.$_bindSelfEvents(eventsToListen, this.control)
        }
        payload.component.$off('load', this.$_deferredMount)
        this.initial = false
      },

      $_updateInput(results) {
        if (!this.initial) {
          const input = results.query ? results.query.join(' ') : ''
          this.$emit('update:input', input)
        }
      },

      query(query) {
        if (this.control) {
          this.$emit('update:input', query)
          return this.control.query(query)
        }
        return null
      }
    }
  }
</script>
