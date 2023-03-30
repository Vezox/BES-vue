import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _99699ee8 = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _ef7d040e = () => interopDefault(import('../pages/gioi-thieu.vue' /* webpackChunkName: "pages/gioi-thieu" */))
const _63f4a032 = () => interopDefault(import('../pages/he-thong-nhuong-quyen.vue' /* webpackChunkName: "pages/he-thong-nhuong-quyen" */))
const _43760fa4 = () => interopDefault(import('../pages/khoa-hoc-class.vue' /* webpackChunkName: "pages/khoa-hoc-class" */))
const _4fbaabd3 = () => interopDefault(import('../pages/khoa-hoc-vip.vue' /* webpackChunkName: "pages/khoa-hoc-vip" */))
const _31563ea2 = () => interopDefault(import('../pages/lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _27c16f7d = () => interopDefault(import('../pages/su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _a3e411ee = () => interopDefault(import('../pages/su-kien-hinh-anh.vue' /* webpackChunkName: "pages/su-kien-hinh-anh" */))
const _26a33939 = () => interopDefault(import('../pages/tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _0ce3e90a = () => interopDefault(import('../pages/tuyen-dung.vue' /* webpackChunkName: "pages/tuyen-dung" */))
const _7aa35406 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0a58687e = () => interopDefault(import('../pages/website-privacy.vue' /* webpackChunkName: "pages/website-privacy" */))
const _5f6afe0b = () => interopDefault(import('../pages/website-terms-and-conditions.vue' /* webpackChunkName: "pages/website-terms-and-conditions" */))

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
    component: _99699ee8,
    name: "app___en"
  }, {
    path: "/gioi-thieu",
    component: _ef7d040e,
    name: "gioi-thieu___en"
  }, {
    path: "/he-thong-nhuong-quyen",
    component: _63f4a032,
    name: "he-thong-nhuong-quyen___en"
  }, {
    path: "/khoa-hoc-class",
    component: _43760fa4,
    name: "khoa-hoc-class___en"
  }, {
    path: "/khoa-hoc-vip",
    component: _4fbaabd3,
    name: "khoa-hoc-vip___en"
  }, {
    path: "/lien-he",
    component: _31563ea2,
    name: "lien-he___en"
  }, {
    path: "/su-kien",
    component: _27c16f7d,
    name: "su-kien___en"
  }, {
    path: "/su-kien-hinh-anh",
    component: _a3e411ee,
    name: "su-kien-hinh-anh___en"
  }, {
    path: "/tin-tuc",
    component: _26a33939,
    name: "tin-tuc___en"
  }, {
    path: "/tuyen-dung",
    component: _0ce3e90a,
    name: "tuyen-dung___en"
  }, {
    path: "/vi",
    component: _7aa35406,
    name: "index___vi"
  }, {
    path: "/website-privacy",
    component: _0a58687e,
    name: "website-privacy___en"
  }, {
    path: "/website-terms-and-conditions",
    component: _5f6afe0b,
    name: "website-terms-and-conditions___en"
  }, {
    path: "/vi/app",
    component: _99699ee8,
    name: "app___vi"
  }, {
    path: "/vi/gioi-thieu",
    component: _ef7d040e,
    name: "gioi-thieu___vi"
  }, {
    path: "/vi/he-thong-nhuong-quyen",
    component: _63f4a032,
    name: "he-thong-nhuong-quyen___vi"
  }, {
    path: "/vi/khoa-hoc-class",
    component: _43760fa4,
    name: "khoa-hoc-class___vi"
  }, {
    path: "/vi/khoa-hoc-vip",
    component: _4fbaabd3,
    name: "khoa-hoc-vip___vi"
  }, {
    path: "/vi/lien-he",
    component: _31563ea2,
    name: "lien-he___vi"
  }, {
    path: "/vi/su-kien",
    component: _27c16f7d,
    name: "su-kien___vi"
  }, {
    path: "/vi/su-kien-hinh-anh",
    component: _a3e411ee,
    name: "su-kien-hinh-anh___vi"
  }, {
    path: "/vi/tin-tuc",
    component: _26a33939,
    name: "tin-tuc___vi"
  }, {
    path: "/vi/tuyen-dung",
    component: _0ce3e90a,
    name: "tuyen-dung___vi"
  }, {
    path: "/vi/website-privacy",
    component: _0a58687e,
    name: "website-privacy___vi"
  }, {
    path: "/vi/website-terms-and-conditions",
    component: _5f6afe0b,
    name: "website-terms-and-conditions___vi"
  }, {
    path: "/",
    component: _7aa35406,
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
