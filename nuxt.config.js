export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BES-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src:
          "/js/jquery/jquery.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/js/jquery/jquery-migrate.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/js/aos.js",
        type: "text/javascript",
        ssr: true
      },
      {
        src:
          "/js/swiper.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/scripts/form-validation.js",
        type: "text/javascript"
      },
      {
        src:
          "/js/scripts/home.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/js/scripts/scripts.js",
        type: "text/javascript"
      },
      {
        src:
          "/js/scripts/tabs.min.js",
        type: "text/javascript"
      }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/static/css/classic-themes.min.css',
    '@/static/css/style.min.css',
    '@/static/css/style.min1.css',
    '@/static/css/custom.css',
    '@/static/css/slick.css',
    '@/static/css/aos.css',
    '@/static/css/swiper.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
