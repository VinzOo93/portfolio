<template>
  <div>
    <div class='gallery' id='trigger'>
      <div class='transition'></div>
      <div class='container'>
        <div class='content'>
          <div class='photos'>
            <div v-for='(photo,index) in this.shuffle(covertRight)'>
              <div class='inner'></div>
              <img v-if='index <= 63'
                     class='cover2 js-transition zoom' v-bind:alt='photo.name'
                     v-bind:src="'https://ucarecdn.com/'+photo.uuid+'/-/preview/-/quality/smart/-/format/auto/'">
              <div id='outer'></div>
            </div>
          </div>
        </div>
      </div>
      <div class='container'>
        <div class='cover'>
          <div class='content'>
            <div class='photos'>
              <div v-for='(photo,index) in this.shuffle(covertRight)'>
                <div class='inner'></div>
                <img v-if='index <= 60'
                       class='cover js-transition zoom' v-bind:alt='photo.name'
                       v-bind:src="'https://ucarecdn.com/'+photo.uuid+'/-/preview/-/quality/smart/-/format/auto/'">
                <div id='outer'></div>
              </div>
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
console.log(gallery)

      if (windowSize >= 769) {
        gallery.forEach(img => {
/*         const inners = parser.parseFromString(img.getElementsByClassName('inner'), 'text/html')
          console.log(inners)
          inners.forEach(inner => {
            let show = this.$scrollmagic.scene({
              triggerElement: inner,
              triggerHook: 0.1
            }).setTween(inner.nextElementSibling, { visibility: 'visible', opacity: 0, duration: 0.25 })
            this.$scrollmagic.addScene(show)
          })*/

          img.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('overImage')
          })
          img.addEventListener('mouseover', () => {
            mouseCursor.classList.add('overImage')
          })

        })
      }
/*
      const inners = document.querySelectorAll('.inner')
*/


/*      let hide = this.$scrollmagic.scene({
        triggerElement: img.nextElementSibling,
        triggerHook: 0.8
      }).setTween(img, { visibility: 'hidden', opacity: 0, duration: 0.25 })
      this.$scrollmagic.addScene(hide)*/

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


.trigger {
  opacity: 0;
  visibility: hidden;

}

.trigger2 {
  opacity: 0;
  visibility: hidden;

}


.trigger3 {
  opacity: 0;
  visibility: hidden;

}


.trigger4 {
  opacity: 0;
  visibility: hidden;

}


.gallery {
  z-index: 0;
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

.text-content {
  position: relative;
  display: flex;
  max-width: 70%;
  z-index: 1;

}


.description {
  font-size: 30px;

}

.medium-zoom-image--opened {
  z-index: 2 !important;
}


</style>
