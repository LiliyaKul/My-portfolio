// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: "src/",
  css: [
        '@/assets/scss/main.scss'
      ],
  modules: ['@element-plus/nuxt'],
  plugins: ['~/plugins/element-icons'],
})
  