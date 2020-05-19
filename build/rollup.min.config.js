import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'VMapboxGeocoder',
    file: 'dist/v-mapbox-geocoder.min.js',
    globals: {
      '@mapbox/mapbox-gl-geocoder': 'MapboxGeocoder',
      'vue-mapbox': 'vueMapbox',
    },
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    commonjs(),
    terser(),
    vue(),
  ],
  external: ['@mapbox/mapbox-gl-geocoder', 'vue-mapbox'],
};
