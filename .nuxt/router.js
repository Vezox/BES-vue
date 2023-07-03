import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b77a70d8 = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _1829241e = () => interopDefault(import('../pages/gioi-thieu.vue' /* webpackChunkName: "pages/gioi-thieu" */))
const _dbb0f58c = () => interopDefault(import('../pages/he-thong-nhuong-quyen.vue' /* webpackChunkName: "pages/he-thong-nhuong-quyen" */))
const _f9f3a7b4 = () => interopDefault(import('../pages/khoa-hoc-class.vue' /* webpackChunkName: "pages/khoa-hoc-class" */))
const _78a87dcb = () => interopDefault(import('../pages/khoa-hoc-vip.vue' /* webpackChunkName: "pages/khoa-hoc-vip" */))
const _15864285 = () => interopDefault(import('../pages/su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _27520d01 = () => interopDefault(import('../pages/su-kien-hinh-anh.vue' /* webpackChunkName: "pages/su-kien-hinh-anh" */))
const _14680c41 = () => interopDefault(import('../pages/tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _6afa0898 = () => interopDefault(import('../pages/tu-van.vue' /* webpackChunkName: "pages/tu-van" */))
const _6537fb73 = () => interopDefault(import('../pages/tuyen-dung.vue' /* webpackChunkName: "pages/tuyen-dung" */))
const _541c4b05 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2781d5b5 = () => interopDefault(import('../pages/vien-intic.vue' /* webpackChunkName: "pages/vien-intic" */))
const _238dd26e = () => interopDefault(import('../pages/website-privacy.vue' /* webpackChunkName: "pages/website-privacy" */))
const _3db43ffa = () => interopDefault(import('../pages/website-terms-and-conditions.vue' /* webpackChunkName: "pages/website-terms-and-conditions" */))

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
    component: _b77a70d8,
    name: "app___en"
  }, {
    path: "/gioi-thieu",
    component: _1829241e,
    name: "gioi-thieu___en"
  }, {
    path: "/he-thong-nhuong-quyen",
    component: _dbb0f58c,
    name: "he-thong-nhuong-quyen___en"
  }, {
    path: "/khoa-hoc-class",
    component: _f9f3a7b4,
    name: "khoa-hoc-class___en"
  }, {
    path: "/khoa-hoc-vip",
    component: _78a87dcb,
    name: "khoa-hoc-vip___en"
  }, {
    path: "/su-kien",
    component: _15864285,
    name: "su-kien___en"
  }, {
    path: "/su-kien-hinh-anh",
    component: _27520d01,
    name: "su-kien-hinh-anh___en"
  }, {
    path: "/tin-tuc",
    component: _14680c41,
    name: "tin-tuc___en"
  }, {
    path: "/tu-van",
    component: _6afa0898,
    name: "tu-van___en"
  }, {
    path: "/tuyen-dung",
    component: _6537fb73,
    name: "tuyen-dung___en"
  }, {
    path: "/vi",
    component: _541c4b05,
    name: "index___vi"
  }, {
    path: "/vien-intic",
    component: _2781d5b5,
    name: "vien-intic___en"
  }, {
    path: "/website-privacy",
    component: _238dd26e,
    name: "website-privacy___en"
  }, {
    path: "/website-terms-and-conditions",
    component: _3db43ffa,
    name: "website-terms-and-conditions___en"
  }, {
    path: "/vi/app",
    component: _b77a70d8,
    name: "app___vi"
  }, {
    path: "/vi/gioi-thieu",
    component: _1829241e,
    name: "gioi-thieu___vi"
  }, {
    path: "/vi/he-thong-nhuong-quyen",
    component: _dbb0f58c,
    name: "he-thong-nhuong-quyen___vi"
  }, {
    path: "/vi/khoa-hoc-class",
    component: _f9f3a7b4,
    name: "khoa-hoc-class___vi"
  }, {
    path: "/vi/khoa-hoc-vip",
    component: _78a87dcb,
    name: "khoa-hoc-vip___vi"
  }, {
    path: "/vi/su-kien",
    component: _15864285,
    name: "su-kien___vi"
  }, {
    path: "/vi/su-kien-hinh-anh",
    component: _27520d01,
    name: "su-kien-hinh-anh___vi"
  }, {
    path: "/vi/tin-tuc",
    component: _14680c41,
    name: "tin-tuc___vi"
  }, {
    path: "/vi/tu-van",
    component: _6afa0898,
    name: "tu-van___vi"
  }, {
    path: "/vi/tuyen-dung",
    component: _6537fb73,
    name: "tuyen-dung___vi"
  }, {
    path: "/vi/vien-intic",
    component: _2781d5b5,
    name: "vien-intic___vi"
  }, {
    path: "/vi/website-privacy",
    component: _238dd26e,
    name: "website-privacy___vi"
  }, {
    path: "/vi/website-terms-and-conditions",
    component: _3db43ffa,
    name: "website-terms-and-conditions___vi"
  }, {
    path: "/",
    component: _541c4b05,
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
