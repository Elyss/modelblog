// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-21',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fontsource/poppins@5.1.1/index.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/material-icons@1.13.14/iconfont/material-icons.min.css' },
      ]
    }
  },
  devServer: {
    host: '0.0.0.0', // Listens on all interfaces
    port: 3000       // You can change this port if needed
  }
})