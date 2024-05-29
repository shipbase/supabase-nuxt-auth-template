// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/supabase'],
  supabase: {
    url: process.env.SUPABASE_URL,
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
    },
  },
})
