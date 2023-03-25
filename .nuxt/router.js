import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d6c5dac4 = () => interopDefault(import('../pages/he-thong-nhuong-quyen.vue' /* webpackChunkName: "pages/he-thong-nhuong-quyen" */))
const _08f12742 = () => interopDefault(import('../pages/khoa-hoc-class.vue' /* webpackChunkName: "pages/khoa-hoc-class" */))
const _3c0f8fe7 = () => interopDefault(import('../pages/khoa-hoc-vip.vue' /* webpackChunkName: "pages/khoa-hoc-vip" */))
const _419ec01b = () => interopDefault(import('../pages/lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _fbe9622e = () => interopDefault(import('../pages/su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _448b78b5 = () => interopDefault(import('../pages/tam-nhin-su-menh.vue' /* webpackChunkName: "pages/tam-nhin-su-menh" */))
const _fe25ceb6 = () => interopDefault(import('../pages/tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _72fdbf2e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d6c5dac4,
    name: "he-thong-nhuong-quyen"
  }, {
    path: "/khoa-hoc-class",
    component: _08f12742,
    name: "khoa-hoc-class"
  }, {
    path: "/khoa-hoc-vip",
    component: _3c0f8fe7,
    name: "khoa-hoc-vip"
  }, {
    path: "/lien-he",
    component: _419ec01b,
    name: "lien-he"
  }, {
    path: "/su-kien",
    component: _fbe9622e,
    name: "su-kien"
  }, {
    path: "/tam-nhin-su-menh",
    component: _448b78b5,
    name: "tam-nhin-su-menh"
  }, {
    path: "/tin-tuc",
    component: _fe25ceb6,
    name: "tin-tuc"
  }, {
    path: "/",
    component: _72fdbf2e,
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
