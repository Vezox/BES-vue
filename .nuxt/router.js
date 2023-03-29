import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ac7785e = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _49d62314 = () => interopDefault(import('../pages/gioi-thieu.vue' /* webpackChunkName: "pages/gioi-thieu" */))
const _25996792 = () => interopDefault(import('../pages/he-thong-nhuong-quyen.vue' /* webpackChunkName: "pages/he-thong-nhuong-quyen" */))
const _6708d06e = () => interopDefault(import('../pages/khoa-hoc-class.vue' /* webpackChunkName: "pages/khoa-hoc-class" */))
const _028b13a4 = () => interopDefault(import('../pages/khoa-hoc-vip.vue' /* webpackChunkName: "pages/khoa-hoc-vip" */))
const _2db0c974 = () => interopDefault(import('../pages/lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _6e1d5842 = () => interopDefault(import('../pages/su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _2dc9c838 = () => interopDefault(import('../pages/su-kien-hinh-anh.vue' /* webpackChunkName: "pages/su-kien-hinh-anh" */))
const _6cff21fe = () => interopDefault(import('../pages/tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _89ba9ed4 = () => interopDefault(import('../pages/tuyen-dung.vue' /* webpackChunkName: "pages/tuyen-dung" */))
const _7a07ac02 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _591dc0f4 = () => interopDefault(import('../pages/website-privacy.vue' /* webpackChunkName: "pages/website-privacy" */))
const _340e9b34 = () => interopDefault(import('../pages/website-terms-and-conditions.vue' /* webpackChunkName: "pages/website-terms-and-conditions" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/app",
    component: _0ac7785e,
    name: "app___en"
  }, {
    path: "/gioi-thieu",
    component: _49d62314,
    name: "gioi-thieu___en"
  }, {
    path: "/he-thong-nhuong-quyen",
    component: _25996792,
    name: "he-thong-nhuong-quyen___en"
  }, {
    path: "/khoa-hoc-class",
    component: _6708d06e,
    name: "khoa-hoc-class___en"
  }, {
    path: "/khoa-hoc-vip",
    component: _028b13a4,
    name: "khoa-hoc-vip___en"
  }, {
    path: "/lien-he",
    component: _2db0c974,
    name: "lien-he___en"
  }, {
    path: "/su-kien",
    component: _6e1d5842,
    name: "su-kien___en"
  }, {
    path: "/su-kien-hinh-anh",
    component: _2dc9c838,
    name: "su-kien-hinh-anh___en"
  }, {
    path: "/tin-tuc",
    component: _6cff21fe,
    name: "tin-tuc___en"
  }, {
    path: "/tuyen-dung",
    component: _89ba9ed4,
    name: "tuyen-dung___en"
  }, {
    path: "/vi",
    component: _7a07ac02,
    name: "index___vi"
  }, {
    path: "/website-privacy",
    component: _591dc0f4,
    name: "website-privacy___en"
  }, {
    path: "/website-terms-and-conditions",
    component: _340e9b34,
    name: "website-terms-and-conditions___en"
  }, {
    path: "/vi/app",
    component: _0ac7785e,
    name: "app___vi"
  }, {
    path: "/vi/gioi-thieu",
    component: _49d62314,
    name: "gioi-thieu___vi"
  }, {
    path: "/vi/he-thong-nhuong-quyen",
    component: _25996792,
    name: "he-thong-nhuong-quyen___vi"
  }, {
    path: "/vi/khoa-hoc-class",
    component: _6708d06e,
    name: "khoa-hoc-class___vi"
  }, {
    path: "/vi/khoa-hoc-vip",
    component: _028b13a4,
    name: "khoa-hoc-vip___vi"
  }, {
    path: "/vi/lien-he",
    component: _2db0c974,
    name: "lien-he___vi"
  }, {
    path: "/vi/su-kien",
    component: _6e1d5842,
    name: "su-kien___vi"
  }, {
    path: "/vi/su-kien-hinh-anh",
    component: _2dc9c838,
    name: "su-kien-hinh-anh___vi"
  }, {
    path: "/vi/tin-tuc",
    component: _6cff21fe,
    name: "tin-tuc___vi"
  }, {
    path: "/vi/tuyen-dung",
    component: _89ba9ed4,
    name: "tuyen-dung___vi"
  }, {
    path: "/vi/website-privacy",
    component: _591dc0f4,
    name: "website-privacy___vi"
  }, {
    path: "/vi/website-terms-and-conditions",
    component: _340e9b34,
    name: "website-terms-and-conditions___vi"
  }, {
    path: "/",
    component: _7a07ac02,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
