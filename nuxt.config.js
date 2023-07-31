
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BES',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BES ra đời với mục tiêu tạo nên một môi trường giúp cho doanh nhân Việt Nam được nâng cao năng lực bản thân cũng như phát triển thêm các mối quan hệ trong xã hội.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'bes, cộng đồng học tiếng anh, doanh nhân việt nam, giảm giá, ưu đãi, tiếng anh ưu đãi, sale' },
      { property: "og:title", content: "Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam" },
      { property: "og:image", content: "/images/logo-meta.png" },
      { property: "og:url", content: "http://besgroup.asia/" },
      { property: "og:site_name", content: "Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam" },
      { property: "og:description", content: "BES ra đời với mục tiêu tạo nên một môi trường giúp cho doanh nhân Việt Nam được nâng cao năng lực bản thân cũng như phát triển thêm các mối quan hệ trong xã hội." },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/logo-meta.png' }
    ],
    script: [
      {
        src:
          "/js/jquery/jquery.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/fb.js",
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
  

  server: {
    https: {
      cert: require('fs').readFileSync('./cert/server.crt'),
      key: require('fs').readFileSync('./cert/server.key'),
    },
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
    '@/plugins/antd-ui',
    { src: '~/plugins/vue-stack-grid', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n'
  ],

  // i18n
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'vi',
        name: 'Vietnamese',
        iso: 'vi-VN',
        file: 'vi.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@sindresorhus/slugify',
      '@sindresorhus/transliterate',
      'hast-util-select',
    ],
    standalone: true,
  },
  // buildDir: '../bes-build'
  // Environment variables
  env: {
    API: process.env.API || 'https://localhost:3100/api'
  },
}
