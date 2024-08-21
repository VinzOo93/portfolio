export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  head: {
    title: 'portfolio Vincent ORRU',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Vincent ORRU - Développeur Web - Découvrir mes réalisations - Projets web - Galerie photo - à propos de moi'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap', rel: 'stylesheet' }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/medium-zoom' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build'
  ],
  runtimeConfig: {
    public: {
      hostHeroku: process.env.NUXT_ENV_HOST_HEROKU,
      forcedDomain: process.env.NUXT_ENV_FORCED_DOMAIN,
      prodEnvHost: process.env.NUXT_ENV_HOST,
      cdnUrl: process.env.NUXT_ENV_CDN_URL,
      cdnPublicKey: process.env.NUXT_ENV_CDN_PUBLIC_KEY,
      cdnUri: process.env.NUXT_ENV_CDN_URI,
    },
    private: {
      cdnSecretKey: process.env.NUXT_ENV_CDN_SECRET_KEY,
      encryptKey: process.env.NUXT_ENV_ENCRYPT_KEY,
      idApiUser: process.env.NUXT_ENV_API_USER_ID,
      pwdApiUser: process.env.NUXT_ENV_API_USER_PWD
    }
  }


  // https://go.nuxtjs.dev/eslint
  // '@nuxtjs/eslint-module',
  // https://go.nuxtjs.dev/stylelint
  // '@nuxtjs/stylelint-module',
  ,
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@pinia/nuxt"],

  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    }
  }
}
