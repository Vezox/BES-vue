import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5fd67388 = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _bd75bb6e = () => interopDefault(import('../pages/gioi-thieu.vue' /* webpackChunkName: "pages/gioi-thieu" */))
const _5ef3ac3c = () => interopDefault(import('../pages/he-thong-nhuong-quyen.vue' /* webpackChunkName: "pages/he-thong-nhuong-quyen" */))
const _6d841704 = () => interopDefault(import('../pages/khoa-hoc-class.vue' /* webpackChunkName: "pages/khoa-hoc-class" */))
const _36667c23 = () => interopDefault(import('../pages/khoa-hoc-vip.vue' /* webpackChunkName: "pages/khoa-hoc-vip" */))
const _9607c342 = () => interopDefault(import('../pages/lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _152ea5a6 = () => interopDefault(import('../pages/su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _828dc14e = () => interopDefault(import('../pages/su-kien-hinh-anh.vue' /* webpackChunkName: "pages/su-kien-hinh-anh" */))
const _176b122e = () => interopDefault(import('../pages/tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _1291afcb = () => interopDefault(import('../pages/tuyen-dung.vue' /* webpackChunkName: "pages/tuyen-dung" */))
const _592d80a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6efa5971 = () => interopDefault(import('../pages/website-privacy.vue' /* webpackChunkName: "pages/website-privacy" */))
const _6ce7a34a = () => interopDefault(import('../pages/website-terms-and-conditions.vue' /* webpackChunkName: "pages/website-terms-and-conditions" */))

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
    component: _5fd67388,
    name: "app___en"
  }, {
    path: "/gioi-thieu",
    component: _bd75bb6e,
    name: "gioi-thieu___en"
  }, {
    path: "/he-thong-nhuong-quyen",
    component: _5ef3ac3c,
    name: "he-thong-nhuong-quyen___en"
  }, {
    path: "/khoa-hoc-class",
    component: _6d841704,
    name: "khoa-hoc-class___en"
  }, {
    path: "/khoa-hoc-vip",
    component: _36667c23,
    name: "khoa-hoc-vip___en"
  }, {
    path: "/lien-he",
    component: _9607c342,
    name: "lien-he___en"
  }, {
    path: "/su-kien",
    component: _152ea5a6,
    name: "su-kien___en"
  }, {
    path: "/su-kien-hinh-anh",
    component: _828dc14e,
    name: "su-kien-hinh-anh___en"
  }, {
    path: "/tin-tuc",
    component: _176b122e,
    name: "tin-tuc___en"
  }, {
    path: "/tuyen-dung",
    component: _1291afcb,
    name: "tuyen-dung___en"
  }, {
    path: "/vi",
    component: _592d80a6,
    name: "index___vi"
  }, {
    path: "/website-privacy",
    component: _6efa5971,
    name: "website-privacy___en"
  }, {
    path: "/website-terms-and-conditions",
    component: _6ce7a34a,
    name: "website-terms-and-conditions___en"
  }, {
    path: "/vi/app",
    component: _5fd67388,
    name: "app___vi"
  }, {
    path: "/vi/gioi-thieu",
    component: _bd75bb6e,
    name: "gioi-thieu___vi"
  }, {
    path: "/vi/he-thong-nhuong-quyen",
    component: _5ef3ac3c,
    name: "he-thong-nhuong-quyen___vi"
  }, {
    path: "/vi/khoa-hoc-class",
    component: _6d841704,
    name: "khoa-hoc-class___vi"
  }, {
    path: "/vi/khoa-hoc-vip",
    component: _36667c23,
    name: "khoa-hoc-vip___vi"
  }, {
    path: "/vi/lien-he",
    component: _9607c342,
    name: "lien-he___vi"
  }, {
    path: "/vi/su-kien",
    component: _152ea5a6,
    name: "su-kien___vi"
  }, {
    path: "/vi/su-kien-hinh-anh",
    component: _828dc14e,
    name: "su-kien-hinh-anh___vi"
  }, {
    path: "/vi/tin-tuc",
    component: _176b122e,
    name: "tin-tuc___vi"
  }, {
    path: "/vi/tuyen-dung",
    component: _1291afcb,
    name: "tuyen-dung___vi"
  }, {
    path: "/vi/website-privacy",
    component: _6efa5971,
    name: "website-privacy___vi"
  }, {
    path: "/vi/website-terms-and-conditions",
    component: _6ce7a34a,
    name: "website-terms-and-conditions___vi"
  }, {
    path: "/",
    component: _592d80a6,
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
