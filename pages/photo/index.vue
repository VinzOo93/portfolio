<template>
  <div>
    <div class='gallery' id='trigger'>
      <div class='transition'></div>
      <div class='container'>
        <div class='content'>
          <div class='photos'>
            <template v-for='(photo,index) in this.shuffle(covertRight)'>
              <div ref='inner' class='inner-item img-hidden'>
                <img v-if='index <= 63'
                     class='cover2 js-transition zoom' v-bind:alt='photo.name'
                     v-bind:src="'https://ucarecdn.com/'+photo.uuid+'/-/preview/-/quality/smart/-/format/auto/'">
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class='container'>
        <div class='cover'>
          <div class='content'>
            <div class='photos'>
              <template v-for='(photo,index) in this.shuffle(covertRight)'>
                <div ref='inner' class='inner-item img-hidden'>
                  <img v-if='index <= 60'
                       class='cover js-transition zoom' v-bind:alt='photo.name'
                       v-bind:src="'https://ucarecdn.com/'+photo.uuid+'/-/preview/-/quality/smart/-/format/auto/'">
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { gsap } from 'gsap'
import mediumZoom from 'medium-zoom'

export default {

  data() {
    return {
      coverLeft: [],
      covertRight: []
    }
  },

  beforeMount: function() {
    this.fetchImages()
  },
  mounted: function() {
    this.startAnimation()
  },


  methods: {
    fetchImages: function() {
      const Url = 'https://upload.uploadcare.com/group/info/'
      const PublicKey = '3c5ff03c50ae52a4f8bf'
      const Uri = '0b14b09e-8173-4cdf-95b3-60f07143d765~83'

      fetch(Url + '?pub_key=' + PublicKey + '&group_id=' + Uri, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(response => response.json()
      ).then(data => {
        this.coverLeft = data.files
        this.covertRight = data.files
      }).catch((e) => console.log(e))
    },

    startAnimation: function() {

      const transition = document.querySelector('.transition')
      let mouseCursor = document.querySelector('.cursor')
      let gallery = document.querySelectorAll('.gallery .photos')
      let windowSize = screen.width

      gallery.forEach(img => {
        setTimeout(function() {
          const inners = img.querySelectorAll('.inner-item')
          inners.forEach(inner => {
            if (inner !== null) {
              let show = this.$scrollmagic.scene({
                triggerElement: inner,
                triggerHook: 0.45
              }).setTween(inner, { visibility: 'visible', opacity: 1, duration: 0.5 })
              this.$scrollmagic.addScene(show)
            }
            if (windowSize >= 769) {
              inner.addEventListener('mouseleave', () => {
                mouseCursor.classList.remove('overImage')
              })
              inner.addEventListener('mouseover', () => {
                mouseCursor.classList.add('overImage')
              })
            }
          })
        }.bind(this), 2000)
      })
      setTimeout(function() {

      gsap.timeline(100)
        .fromTo(transition,
          {
            opacity: 1,
            y: '100%',
            duration: 3
          },
          {
            y: '-100%',
            duration: 3
          })
          gsap.timeline(100)
        .fromTo(gallery, { opacity: 0, y: '100%' }, {
          opacity: 1,
          y: '0%',
          ease: 'power5',
          duration: 5
        })
      }.bind(this), 500)

      mediumZoom('.zoom', {
        background: 'auto',
        margin: 10,
        scrollOffset: 150
      })
    },
    shuffle: function(array) {
      return array.sort(() => Math.random() - 0.5)
    }
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
  grid-template-columns: repeat(12, 1fr);
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
    max-width: 90%;
    margin: 10px 10px 10px 5vw;
  }

  .cover2 {
    z-index: 1;
    max-width: 90%;
    margin: 10px 10px 10px 5vw;
  }

  .content {
    position: relative;
    width: 100%;
  }
}

@media only screen and  (min-width: 768px) {

  .container {
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(12, 2fr);
    grid-gap: 0;
    align-items: start;
    grid-column: 6/9;
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

  .cover2 {
    margin: 10px;
    z-index: 1;
    grid-column: 1/9;
    max-width: 95%;
  }

  .content {
    grid-column: 7/12;
    position: absolute;
    max-width: 90%;
  }

}

.medium-zoom-image--opened {
  z-index: 2 !important;
}

</style>
