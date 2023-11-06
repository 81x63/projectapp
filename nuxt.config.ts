
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css"],//追加
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
})
