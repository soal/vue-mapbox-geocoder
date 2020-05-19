import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      name: 'VMapboxGeocoder',
      file: 'dist/v-mapbox-geocoder.esm.js',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      commonjs(),
      vue(),
    ],
    external: ['@mapbox/mapbox-gl-geocoder', 'vue-mapbox'],
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      name: 'VMapboxGeocoder',
      file: 'dist/v-mapbox-geocoder.cjs.js',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      commonjs(),
      vue(),
    ],
    external: ['@mapbox/mapbox-gl-geocoder', 'vue-mapbox'],
  },
  // UMD build.
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'VMapboxGeocoder',
      file: 'dist/v-mapbox-geocoder.js',
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
      vue(),
    ],
    external: ['@mapbox/mapbox-gl-geocoder', 'vue-mapbox'],
  },
];
