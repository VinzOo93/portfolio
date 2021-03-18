<template>
  <transition>
    <div class='galery'>
      <div class='transition'></div>
      <div class='album-header-sticky'>
        <div class='container'>
          <div class='content'>
            <img class='cover2 js-transition' alt='image-aurora-cover-2' src='~/assets/images/aurora1.JPG'>
            <img class='cover2 js-transition' alt='image-aurora-cover-2' src='~/assets/images/aurora2.JPG'>
            <img class='cover2 js-transition' alt='image-aurora-cover-2' src='~/assets/images/aurora3.JPG'>
          </div>

        </div>
        <div class='container'>
          <div class='cover text-content js-transition'>
            <p class='description'> Ces images ont été capturées vers la fin de mon aventure en Tasmanie. Cette île au
              sud de l'Australie
              est l'un des endroits où le ciel est l'un des plus clair au monde.<br><br> Grâce à sa position
              géographique
              particulière, nous pouvons y admirer occasionellement la lueur orangée provenant d'aurores australes.</p>
          </div>
          <img class='cover js-transition' alt='first-image' src='~/assets/images/aurora.jpg'>
        </div>
      </div>
      <div></div>
    </div>
  </transition>


</template>

<script>

import { gsap, Power1 } from 'gsap'


export default {
  mounted: function() {
    this.startAnimation()
  },
  methods: {
    startAnimation: function() {
      const transition = document.querySelector('.transition')
      const galery = document.querySelectorAll('.js-transition')


      gsap.timeline(100)
        .fromTo(transition, { opacity: 1, y: '100%', duration: 2.5 }, { y: '-100%', duration: 2.5 });
      gsap.timeline(100)
        .fromTo(galery, { opacity: 0, y: '300%', duration: 2.6 }, { opacity: 1,y: '0%', ease: Power1.easeInOut,duration: 2.6  })

    }
  }
}


</script>

<style scoped>

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
  z-index: 0;
}

img {
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
    display: block;
    align-items: center;
    position: relative;
  }

  .cover {
    margin: 15px 15px 15px 15px;
    z-index: 1;
    max-width: 90%;
  }

  .cover2 {
    margin: 20px 20px 20px 20px;
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
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0;
    align-items: start;
    grid-column: 6/8;
    position: absolute;
    width: 100%;
  }

  .cover {
    grid-column: 2/7;
    z-index: 1;
    max-width: 95%;
  }

  .cover2 {
    margin: 40px 10px 10px 20px;
    grid-column: 2/8;
    z-index: 1;
    max-width: 100%;
  }

  .content {
    grid-column: 7/12;
    position: absolute;
    width: 100%;
  }

}

.text-content {
  display: flex;
  max-width: 100%;
}

.description {
  font-size: 27px;
}

</style>
