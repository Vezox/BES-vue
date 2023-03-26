export { default as Footer } from '../../components/Footer.vue'
export { default as HeaderNav } from '../../components/HeaderNav.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as SocialFix } from '../../components/SocialFix.vue'
export { default as Swiper } from '../../components/Swiper.vue'
export { default as TopNav } from '../../components/TopNav.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as Decor } from '../../components/decor.vue'
export { default as Decor5 } from '../../components/decor5.vue'
export { default as Header } from '../../components/header.vue'
export { default as ReviewItem } from '../../components/reviewItem.vue'

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
