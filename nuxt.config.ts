// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // ทุก route จะมีการ render จาก server
  ssr: true,

  // กำหนดบาง route ให้ render จาก client
  routeRules: {
    '/backend/**': { ssr: false }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/supabase'],
  supabase: {
    redirect: false,
    cookieOptions: {
      secure: false,
    }
  },

  runtimeConfig: {
    githubToken: '123456',
    githubUsername: 'no_name',
    githubRepo: 'no_repo'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'demo'
      },
      charset: 'utf-8',
      titleTemplate: '%s | IT Genius Engineering',
      meta: [
        {
          name: 'author',
          content: 'IT Genius Engineering, Thailand'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5'
        }
      ]
    }
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
