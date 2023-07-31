export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const HeaderNav = () => import('../../components/HeaderNav.vue' /* webpackChunkName: "components/header-nav" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const SocialFix = () => import('../../components/SocialFix.vue' /* webpackChunkName: "components/social-fix" */).then(c => wrapFunctional(c.default || c))
export const Swiper = () => import('../../components/Swiper.vue' /* webpackChunkName: "components/swiper" */).then(c => wrapFunctional(c.default || c))
export const TopNav = () => import('../../components/TopNav.vue' /* webpackChunkName: "components/top-nav" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const Decor = () => import('../../components/decor.vue' /* webpackChunkName: "components/decor" */).then(c => wrapFunctional(c.default || c))
export const Decor5 = () => import('../../components/decor5.vue' /* webpackChunkName: "components/decor5" */).then(c => wrapFunctional(c.default || c))
export const ReviewItem = () => import('../../components/reviewItem.vue' /* webpackChunkName: "components/review-item" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
