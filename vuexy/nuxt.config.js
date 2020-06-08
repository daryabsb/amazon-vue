export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      // BEGIN: Vendor JS
      { src: "/app-assets/vendors/js/vendors.min.js", body: true },
      // BEGIN Vendor JS

      // BEGIN: Page Vendor JS
      { src: "/app-assets/vendors/js/ui/jquery.sticky.js", body: true },
      // END: Page Vendor JS

      // BEGIN: Theme JS
      { src: "/app-assets/js/core/app-menu.js", body: true },
      { src: "/app-assets/js/core/app.js", body: true },
      { src: "/app-assets/js/scripts/components.js", body: true }
      // END: Theme JS

      // BEGIN: Page JS
      // { src: "/app-assets/js/scripts/pages/app-ecommerce-shop.js", body: true }
      // END: Page JS
    ],
    link: [
      {
        rel: "apple-touch-icon",
        href: "/app-assets/images/ico/apple-icon-120.png"
      },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/app-assets/images/ico/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600"
      },

      // BEGIN: Vendor CSS
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/vendors/css/vendors.min.css"
      },
      // END: Vendor CSS

      // BEGIN: Theme CSS
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/bootstrap.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/bootstrap-extended.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/colors.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/components.css"
      },
      {
        re: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/themes/dark-layout.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "../../../app-assets/css/themes/semi-dark-layout.css"
      },

      // BEGIN: Page CSS
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/core/menu/menu-types/horizontal-menu.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/core/colors/palette-gradient.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/pages/app-ecommerce-shop.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
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
    "@nuxtjs/pwa"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
