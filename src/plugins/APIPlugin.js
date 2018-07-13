/* eslint-disable */
import API from '@/api'

const APIPlugin = {
  install(Vue) {
    Vue.prototype.API = API

    Vue.mixin({
      methods: {
        navigate(url, params = {}) {
          window.location.href = url
          return
        }
      } // end methods
    }) // end Vue.mixin
  } // end install
}

// Automatic Installation
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(APIPlugin)
}

export default APIPlugin
