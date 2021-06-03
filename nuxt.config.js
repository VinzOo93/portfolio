export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio Vincent ORRU',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vincent ORRU - Développeur Web - Découvrir mes réalisations - Projets web - Galerie photo - à propos de moi' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'signature.png'},
      {rel: "preconnect", href: "https://fonts.gstatic.com" },
      {href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap", rel:"stylesheet"  }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src:'~/plugins/medium-zoom'},{src:'~/plugins/vue-scrollmagic.js', mode: 'client'}],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
    '@nuxtjs/firebase',
    {
      config: {
        apiKey: "AIzaSyAHKW483b6Q21l9h8T9piDFa7YPOpaIv74",
        authDomain: "portfolio-vincent-orru.firebaseapp.com",
        databaseURL: "https://portfolio-vincent-orru-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "portfolio-vincent-orru",
        storageBucket: "portfolio-vincent-orru.appspot.com",
        messagingSenderId: "229878441570",
        appId: "1:229878441570:web:bfc3ba1df5829d5d1cd33b",
        measurementId: "G-PEEWBKJLZZ"
      },
      services: {
        database: true,
        static: false,
        preload: false,
        analytics: true,

      },
      database: {
        emulatorPort: 9000,
        emulatorHost: 'localhost',
      },
      analytics: {
        collectionEnabled: true
      }
    }
  ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },},
}
