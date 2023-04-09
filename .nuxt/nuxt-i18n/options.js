import locale77427e78 from '../../lang/en.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"code":"en","name":"English","iso":"en-US","file":"en.js"},{"code":"vi","name":"Vietnamese","iso":"vi-VN","file":"vi.js"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
<<<<<<< HEAD
  langDir: "/Users/truongducthang/Library/Mobile Documents/com~apple~CloudDocs/Freelance/BES-vue/lang",
=======
  langDir: "/Users/macbookpro/Documents/work/jobs/BES-vue/lang",
>>>>>>> e241af508cc4926f28224cdf373a6e4a6a77c686
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","name":"English","iso":"en-US","file":"en.js"},{"code":"vi","name":"Vietnamese","iso":"vi-VN","file":"vi.js"}],
  localeCodes: ["en","vi"],
}

export const localeMessages = {
  'en.js': () => Promise.resolve(locale77427e78),
  'vi.js': () => import('../../lang/vi.js' /* webpackChunkName: "lang-vi.js" */),
}
