import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
export default {
  plugins: [
    VueRouter({
      /* options */
    }),
    Vue(),
    Layouts({
      layoutsDirs: "src/_base/layouts",
      defaultLayout: "Layout",
    }),
  ],
}
