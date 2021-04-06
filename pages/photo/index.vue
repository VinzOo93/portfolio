<template>
  <div>
    <div class='gallery'>
      <div class='transition'></div>
      <div class='album-header-sticky'>
        <div class='container'>
          <div class='content'>
            <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/aurora1.JPG'>
            <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/aurora2.JPG'>
            <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/aurora3.JPG'>
            <div class='cover2 text-content js-transition'>
              <p class='description'>
                Australie, Noosa Heads <br>
                Petite rencontre improbable lors d'une nuit de passage =p
              </p>
            </div>
            <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/noosa-2.JPG'>
            <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/beerwah1.JPG'>
            <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/beerwah3.JPG'>
            <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/beerwah5.JPG'>
            <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/sardegna-1.JPG'>
          </div>
        </div>
        <div class='container'>
          <div class='cover text-content js-transition' style='z-index: 0.5'>
            <p class='description' >
              Tasmania, Four Mile Creek <br>
              Comme vous pouvez le constater, j'ai la tête dans les étoiles !! ***  </p>
          </div>
          <img class='cover js-transition zoom' alt='first-image' src='~/assets/images/aurora.jpg'>
          <img class='cover js-transition zoom' alt='first-image' src='~/assets/images/noosa-1.jpg'>
          <div class='cover text-content js-transition'>
            <p class='description'>
              Glasshouse Mountains, <br>
              Un endroit spécial de par ses montagnes
              <br>  Oui je vis aussi le jour ! ;=)
            </p>
          </div>
          <img class='cover js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/beerwah4.JPG'>
          <img class='cover js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/rainforest.JPG'>
          <img class='cover js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/endTasmania.jpg'>
          <img class='cover js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/sardegna-2.jpg'>
          <div class='cover text-content js-transition'>
            <p class='description'>
              Sardaigne, Is Arustas <br>
              Un petit couché de soleil à la plage pour la fin !! =)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { gsap, Power1 } from 'gsap'
import mediumZoom from 'medium-zoom'


export default {

  mounted: function() {
    this.startAnimation()
  },

  methods: {
    startAnimation: function() {
      const transition = document.querySelector('.transition')
      const gallery = document.querySelectorAll('.js-transition')
      let mouseCursor = document.querySelector('.cursor')
      let galleryimg = document.querySelectorAll('.gallery img')

      gsap.timeline(100)
        .fromTo(transition, { opacity: 1, y: '100%', duration: 2.5 }, { y: '-100%', duration: 2.5 })
      gsap.timeline(100)
        .fromTo(gallery, { opacity: 0, y: '2000%', duration: 4 }, {
          opacity: 1,
          y: '0%',
          ease: Power1.easeInOut,
          duration: 2.6
        })
      galleryimg.forEach(img => {
        img.addEventListener('mouseleave', () => {
          mouseCursor.classList.remove('overImage')
        });
        img.addEventListener('mouseover', () => {
          mouseCursor.classList.add('overImage')
        })
      });
      mediumZoom('.zoom', {
        background:"auto",
        margin: 10,
        scrollOffset: 150
      });
    }
  }
}


</script>

<style scoped>

.gallery {
  z-index: 0;
}

.transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  visibility: visible;
  opacity: 0;
  pointer-events: none;
  background-color: #eee;
  z-index: 2;
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
    margin: 10px;
    z-index: 1;
    max-width: 90%;
  }

  .cover2 {
    margin: 10px;
    z-index: 1;
    max-width: 90%;
  }

  .content {
    position: relative;
    width: 100%;
  }
}

@media only screen and  (min-width: 768px) {

  body {
  }
  .container {
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0;
    align-items: start;
    grid-column: 6/8;
    position: absolute;
    width: 100%;
  }

  .cover {
    margin: 10px;
    grid-column: 2/8;
    z-index: 1;
    max-width: 80%;
  }

  .cover2 {
    margin: 10px;
    z-index: 1;
    grid-column: 2/8;
    max-width: 90%;
  }

  .content {
    grid-column: 7/12;
    position: absolute;
    width: 100%;
  }

}

.text-content {
  position: relative;
  display: flex;
  max-width: 80%;
  z-index: 1;

}


.description {
  font-size: 32px;

}

.medium-zoom-image--opened {
  z-index: 2 !important;
}


</style>
