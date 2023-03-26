import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ef3ac3c = () => interopDefault(import('../pages/he-thong-nhuong-quyen.vue' /* webpackChunkName: "pages/he-thong-nhuong-quyen" */))
const _cd305090 = () => interopDefault(import('../pages/index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _6d841704 = () => interopDefault(import('../pages/khoa-hoc-class.vue' /* webpackChunkName: "pages/khoa-hoc-class" */))
const _36667c23 = () => interopDefault(import('../pages/khoa-hoc-vip.vue' /* webpackChunkName: "pages/khoa-hoc-vip" */))
const _9607c342 = () => interopDefault(import('../pages/lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _152ea5a6 = () => interopDefault(import('../pages/su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _24d9e6f1 = () => interopDefault(import('../pages/tam-nhin-su-menh.vue' /* webpackChunkName: "pages/tam-nhin-su-menh" */))
const _176b122e = () => interopDefault(import('../pages/tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _592d80a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/he-thong-nhuong-quyen",
    component: _5ef3ac3c,
    name: "he-thong-nhuong-quyen"
  }, {
    path: "/index%20copy",
    component: _cd305090,
    name: "index copy"
  }, {
    path: "/khoa-hoc-class",
    component: _6d841704,
    name: "khoa-hoc-class"
  }, {
    path: "/khoa-hoc-vip",
    component: _36667c23,
    name: "khoa-hoc-vip"
  }, {
    path: "/lien-he",
    component: _9607c342,
    name: "lien-he"
  }, {
    path: "/su-kien",
    component: _152ea5a6,
    name: "su-kien"
  }, {
    path: "/tam-nhin-su-menh",
    component: _24d9e6f1,
    name: "tam-nhin-su-menh"
  }, {
    path: "/tin-tuc",
    component: _176b122e,
    name: "tin-tuc"
  }, {
    path: "/",
    component: _592d80a6,
    name: "index"
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
