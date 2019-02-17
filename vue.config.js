module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: "default"
    },
    externals: {
      "@mapbox/mapbox-gl-geocoder": {
        commonjs: "@mapbox/mapbox-gl-geocoder",
        commonjs2: "@mapbox/mapbox-gl-geocoder",
        amd: "@mapbox/mapbox-gl-geocoder",
        root: "mapbox-gl-geocoder"
      },
      "vue-mapbox": {
        commonjs: "vue-mapbox",
        commonjs2: "vue-mapbox",
        amd: "vue-mapbox",
        root: "vue-mapbox"
      }
    }
  }
};
