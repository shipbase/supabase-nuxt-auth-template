// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/supabase'],
  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
    },
  },
  runtimeConfig: {
    public: {
      sitURL: process.env.VERCEL_URL || 'http://localhost:3000',
    },
  },
  nitro: {
    preset: 'vercel-edge',
  },
})
