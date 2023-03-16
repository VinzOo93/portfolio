<template>
  <div>
    <div class='gallery' id='trigger'>
      <div class='transition'></div>
      <div class='photos container'>
        <template v-for='(photo) in data'>
          <div v-if='photo.image_info.height < 4000 ' class='inner-item img-hidden'>
            <img class='cover zoom' v-bind:alt='photo.name'
                 v-bind:src="'https://ucarecdn.com/'+photo.uuid+'/-/preview/1880x864/-/quality/smart/-/format/auto/'">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {


  data() {
    return {
      data: []
    }
  },

  beforeMount() {
    this.fetchImages()
  },
  beforeUpdate() {
    this.startAnimation()
  },

  methods: {
    fetchImages() {
      const Url = 'https://upload.uploadcare.com/group/info/'
      const PublicKey = '3c5ff03c50ae52a4f8bf'
      const Uri = '28170ad8-5f55-4bb4-a881-6bf14f34a4f3~80'
      fetch(Url + '?pub_key=' + PublicKey + '&group_id=' + Uri, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(response => response.json()
      ).then(data => {
        this.data = this.shuffle(data.files)
      }).catch((e) => console.log(e))
    },

    startAnimation: function() {

      const transition = document.querySelector('.transition')
      const mouseCursor = document.querySelector('.cursor')
      const gallery = document.querySelectorAll('.gallery .photos')
      const windowSize = screen.width
      let top = 'top 80%'

      gallery.forEach(img => {
        setTimeout(function() {
          const inners = img.querySelectorAll('.inner-item')
          inners.forEach(inner => {
            if (windowSize >= 769) {
              inner.addEventListener('mouseleave', () => {
                mouseCursor.classList.remove('overImage')
              })
              inner.addEventListener('mouseover', () => {
                mouseCursor.classList.add('overImage')
              })
              top = 'top 30%'
            } else {
              let imgZoom = inner.querySelector('.zoom')
              let clone = imgZoom.cloneNode(true)
              imgZoom.parentNode.replaceChild(clone, imgZoom)
            }
            gsap.to(
              inner, {
                visibility: 'visible',
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                  trigger: inner,
                  start: top,
                  toggleActions: 'restart',
                }
              }
            )
          })
        }.bind(this), 2000)
      })
      gsap.timeline(50)
        .fromTo(transition,
          {
            opacity: 1,
            y: '100%',
            duration: 3
          },
          {
            y: '-100%',
            duration: 2.5
          })
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5)
    },
  }
}
</script>

<style scoped>

.img-hidden {
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s ease-in;
}

img {
  position: relative;
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 0;
  align-items: start;
  position: relative;
  width: 100%;
}


@media only screen and  (max-width: 768px) {

  .container {
    margin-top: 5%;
    display: block;
    align-items: center;
    position: relative;
  }

  .cover {
    z-index: 1;
    max-width: 85vw;
    margin: 3vh 6vw;
  }
}

@media only screen and  (min-width: 768px) {

  .container {
    margin-top: 5%;
    display: grid;
    grid-gap: 0;
    align-items: start;
    position: absolute;
    width: 100%;
  }

  .cover {
    align-items: center;
    margin: 10px;
    grid-column: 2/7;
    z-index: 1;
    max-width: 95%;
  }

}

.medium-zoom-image--opened {
  z-index: 2 !important;
}

</style>
