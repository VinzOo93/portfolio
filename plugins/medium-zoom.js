import zoom from 'medium-zoom'

const initZoom = () => {
  zoom('img.zoom:not(.medium-zoom-image)')
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.mixin({
    mounted: function() {
      initZoom()
    },
    updated() {
      initZoom()
    }
  })
})

