import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { $helpers } from "vue-mapbox";

const geocoderEvents = {
  clear: "clear",
  loading: "loading",
  results: "results",
  result: "result",
  error: "error"
};

export default {
  name: "GeocoderControl",
  mixins: [$helpers.asControl],

  inject: ["mapbox", "map"],

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
      default: "Search"
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
      initial: true
    };
  },

  watch: {
    input: {
      handler(next, prev) {
        if (this.control && next !== prev) {
          this.control.setInput(next);
        }
      },
      immediate: true
    },
    proximity(next, prev) {
      if (this.control && next !== prev) {
        this.control.setProximity(next);
      }
    }
  },

  created() {
    this.control = null;
    if (this.accessToken && !this.mapbox.accessToken) {
      this.mapbox.accessToken = this.accessToken;
    }
    this.control = new MapboxGeocoder(this.$props);
    this.control.on("results", this.$_updateInput);

    this.$_deferredMount();
  },

  beforeDestroy() {
    this.control.off("results", this.$_updateInput);
  },

  methods: {
    $_deferredMount() {
      this.map.addControl(this.control);
      if (this.input) {
        this.control.setInput(this.input);
      }
      this.$_emitEvent("added", { geocoder: this.control });
      this.$_bindSelfEvents(Object.keys(geocoderEvents));
      this.initial = false;
    },

    $_bindSelfEvents(events) {
      const vm = this;
      Object.keys(this.$listeners).forEach(eventName => {
        if (events.includes(eventName)) {
          this.control.on(eventName, vm.$_emitControlEvent.bind(vm, eventName));
        }
      });
    },

    $_emitControlEvent(eventName, eventData) {
      return this.$_emitSelfEvent({ type: eventName }, eventData);
    },

    $_updateInput(results) {
      if (!this.initial) {
        const input = results.query ? results.query.join("") : "";
        this.$emit("update:input", input);
      }
    },

    query(query) {
      if (this.control) {
        this.$emit("update:input", query);
        return this.contol.query(query);
      }
      return null;
    }
  }
};
