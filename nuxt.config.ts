// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/global.scss"],

  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "light",
  },
});
