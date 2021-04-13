<template>
  <div>
    <div class='gallery'>
      <div class='transition'></div>
      <div class='container'>
        <div class='content'>
          <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/aurora1.JPG'>
          <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/aurora2.JPG'>
          <img class='cover2 js-transition zoom' alt='image-aurora-cover-2' src='~/assets/images/aurora3.JPG'>
          <div class='cover2 text-content js-transition'>
            <div class='trigger'>
            <p class='description scroll'>
                Australie, Noosa Heads <br>
                Petite rencontre improbable lors d'une nuit de passage =p
              </p>
            </div>
          </div>
          <div id='trigger1' class='trigger'>
            <img class='cover2 js-transition zoom scroll' alt='image-aurora-cover-2' src='~/assets/images/noosa-2.JPG'>
          </div>
          <div class='trigger'>
            <img class='cover2 js-transition zoom scroll' alt='image-aurora-cover-2' src='~/assets/images/beerwah1.JPG'>
          </div>
          <div id='trigger2' class='trigger2'>
            <img class='cover2 js-transition zoom scroll' alt='image-aurora-cover-2' src='~/assets/images/beerwah3.JPG'>
          </div>
          <div id='trigger3' class='trigger3'>
            <img class='cover2 js-transition zoom scroll' alt='image-aurora-cover-2' src='~/assets/images/beerwah5.JPG'>
          </div>
          <div id='trigger4' class='trigger4'>
            <img class='cover2 js-transition zoom scroll' alt='image-aurora-cover-2'
                 src='~/assets/images/sardegna-1.JPG'>
          </div>
        </div>
      </div>
      <div class='container'>
        <div class='cover text-content js-transition' style='z-index: 0.5'>
          <p class='description'>
            Tasmania, Four Mile Creek <br>
            Comme vous pouvez le constater,<br> j'ai la tête dans les étoiles !! *** </p>
        </div>
        <div class='cover'>
          <img class='cover js-transition zoom' alt='first-image' src='~/assets/images/aurora.jpg'>
          <div class='trigger'>
            <img class='cover js-transition zoom scroll' alt='first-image' src='~/assets/images/noosa-1.jpg'>
          </div>
        </div>
        <div class='cover text-content js-transition'>
          <div class='trigger'>
            <p class='description scroll'>
              Glasshouse Mountains, <br>
              Un endroit spécial de par ses montagnes
              <br> Oui je vis aussi le jour ! ;=)
            </p>
          </div>
        </div>
        <div class='cover'>
          <div  class='trigger2'>
            <img class='cover js-transition zoom scroll' alt='image-aurora-cover-2' src='~/assets/images/beerwah4.JPG'>
          </div>
          <div  class='trigger2'>
            <img class='cover js-transition zoom scroll' alt='image-aurora-cover-2' src='~/assets/images/rainforest.JPG'>
          </div>
          <div  class='trigger3'>
            <img class='cover js-transition zoom scroll' alt='image-aurora-cover-2' src='~/assets/images/endTasmania.jpg'>
          </div>
          <div  class='trigger4'>
            <img class='cover js-transition zoom scroll' alt='image-aurora-cover-2' src='~/assets/images/sardegna-2.jpg'>
          </div>
          <div class='cover text-content js-transition'>
            <div  class='trigger'>
              <p class='description scroll'>
                Sardaigne, Is Arustas <br>
                Un petit couché de soleil à la plage pour la fin !! =)
              </p>
            </div>
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
        .fromTo(transition, { opacity: 1, y: '100%', duration: 3 }, { y: '-100%', duration: 2.5 })
      gsap.timeline(100)
        .fromTo(gallery, { opacity: 0, y: '250%', duration: 4 }, {
          opacity: 1,
          y: '0%',
          ease: Power1.easeInOut,
          duration: 4
        })
      const scene = this.$scrollmagic.scene({
        triggerElement: '#trigger1',
        triggerHook: 0.8,
      })
      .setTween('.trigger', {visibility: 'visible' ,opacity: 1, duration: 0.25})
      this.$scrollmagic.addScene(scene)

      const scene2 = this.$scrollmagic.scene({
        triggerElement: '#trigger2',
        triggerHook: 0.9,
      })
        .setTween('.trigger2', {visibility: 'visible' ,opacity: 1, duration: 0.25})
      this.$scrollmagic.addScene(scene2)

      const scene3 = this.$scrollmagic.scene({
        triggerElement: '#trigger3',
        triggerHook: 0.9,
      })
        .setTween('.trigger3', {visibility: 'visible' ,opacity: 1, duration: 0.25})
      this.$scrollmagic.addScene(scene3)
      const scene4 = this.$scrollmagic.scene({
        triggerElement: '#trigger4',
        triggerHook: 0.6,
      })
        .setTween('.trigger4', {visibility: 'visible' ,opacity: 1, duration: 0.25})
      this.$scrollmagic.addScene(scene4)


      galleryimg.forEach(img => {
        img.addEventListener('mouseleave', () => {
          mouseCursor.classList.remove('overImage')
        });
        img.addEventListener('mouseover', () => {
          mouseCursor.classList.add('overImage')
        });
      });
      mediumZoom('.zoom', {
        background: 'auto',
        margin: 10,
        scrollOffset: 150
      })
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
    grid-column: 2/9;
    z-index: 1;
    max-width: 80%;
  }

  .cover2 {
    margin: 10px;
    z-index: 1;
    grid-column: 1/9;
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
