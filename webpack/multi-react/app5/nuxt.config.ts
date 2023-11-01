// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    asyncEntry: true,
  },
  devServer: {
    port: 3005,
  },
});
