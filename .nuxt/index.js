import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_08435c63 from 'nuxt_plugin_plugin_08435c63' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_52cefb62 from 'nuxt_plugin_pluginutils_52cefb62' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_de038fa6 from 'nuxt_plugin_pluginrouting_de038fa6' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_f53f2b3c from 'nuxt_plugin_pluginmain_f53f2b3c' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_antdui_2b2dca90 from 'nuxt_plugin_antdui_2b2dca90' // Source: ../plugins/antd-ui (mode: 'all')
import nuxt_plugin_vuestackgrid_3ff1a708 from 'nuxt_plugin_vuestackgrid_3ff1a708' // Source: ../plugins/vue-stack-grid (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"BES","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"BES ra đời với mục tiêu tạo nên một môi trường giúp cho doanh nhân Việt Nam được nâng cao năng lực bản thân cũng như phát triển thêm các mối quan hệ trong xã hội."},{"name":"format-detection","content":"telephone=no"},{"name":"keywords","content":"bes, cộng đồng học tiếng anh, doanh nhân việt nam, giảm giá, ưu đãi, tiếng anh ưu đãi, sale, tiếng anh, bes group"},{"property":"og:title","content":"Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"},{"property":"og:image","content":"\u002Fimages\u002Flogo-meta.png"},{"property":"og:url","content":"http:\u002F\u002Fbesgroup.asia\u002F"},{"property":"og:site_name","content":"Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"},{"property":"og:description","content":"BES ra đời với mục tiêu tạo nên một môi trường giúp cho doanh nhân Việt Nam được nâng cao năng lực bản thân cũng như phát triển thêm các mối quan hệ trong xã hội."}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fimages\u002Flogo-meta.png"}],"script":[{"src":"\u002Fjs\u002Fjquery\u002Fjquery.min.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Ffb.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Fjquery\u002Fjquery-migrate.min.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Faos.js","type":"text\u002Fjavascript","ssr":true},{"src":"\u002Fjs\u002Fswiper.min.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Fscripts\u002Fform-validation.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Fscripts\u002Fhome.min.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Fscripts\u002Fscripts.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Fscripts\u002Ftabs.min.js","type":"text\u002Fjavascript"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_08435c63 === 'function') {
    await nuxt_plugin_plugin_08435c63(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_52cefb62 === 'function') {
    await nuxt_plugin_pluginutils_52cefb62(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_de038fa6 === 'function') {
    await nuxt_plugin_pluginrouting_de038fa6(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_f53f2b3c === 'function') {
    await nuxt_plugin_pluginmain_f53f2b3c(app.context, inject)
  }

  if (typeof nuxt_plugin_antdui_2b2dca90 === 'function') {
    await nuxt_plugin_antdui_2b2dca90(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuestackgrid_3ff1a708 === 'function') {
    await nuxt_plugin_vuestackgrid_3ff1a708(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
