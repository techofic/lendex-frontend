export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Lendex",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width: device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/assets/css/vendor/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/vendor/lineicons.css" },
      { rel: "stylesheet", href: "/assets/css/vendor/line-awesome.min.css" },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    "iview/dist/styles/iview.css",
    "hooper/dist/hooper.css",
    "~static/assets/css/style.scss",
    "line-awesome/dist/line-awesome/css/line-awesome.min.css"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "@/plugins/serverSidePlugin",
    { src: "~plugins/iview", mode: "client" },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://127.0.0.1:8000",
    credentials: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */

  build: {
    // postcss: null,
  },
  server: {
    port: 3000, // default: 3000
    host: "localhost", // default: localhost
  },
  publicRuntimeConfig: {
    BASE_URL: "http://127.0.0.1:8000",
    // SOCKET_URL: "http://127.0.0.1:5000",
    // SITE_TITLE: process.env.SITE_TITLE,
    // SITE_URL: process.env.SITE_URL,
    // Stripe_Publishable_key: process.env.Stripe_Publishable_key,
    // IS_CAREVAN: process.env.IS_CAREVAN
  },
};
