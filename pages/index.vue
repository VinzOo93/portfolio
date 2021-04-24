<template>

  <div>
    <div class='transition'></div>
    <section>
      <div class='d-flex flex-column  justify-content-center min-vh-100 '>
        <div class='container'>
          <div class='overflow-hidden line-scroll-1'>
            <p class='welcome line p-0 m-0'><span class='customFont'>HEY</span> <img
              src='https://media.giphy.com/media/VDNDX5BhKKz0YsJkl0/giphy.gif' class='eyes' alt='eyes'> WELCOME</p>
          </div>
          <div class='overflow-hidden  line-scroll-2'>
            <p class='welcome line p-0 m-0'><img src='https://media.giphy.com/media/RSgKTx5RRZj34rbbu7/giphy.gif'
                                                 class='covid' alt='covid'> IN MY <span
              class='customFont'>WORLD</span><img src='https://media.giphy.com/media/dvgjUJsZ60Wyw8UNyM/giphy.gif'
                                                  class='world' width='70px' alt='world'></p>
          </div>
          <div class='overflow-hidden line-scroll-3'>
            <p class='welcome line p-0 m-0'> 20<img src='~/assets/home/rock.jpg' class='rock' alt='rock'><span
              class='customFont'>CENT</span><img src='https://media.giphy.com/media/f4DxcVLlIOAgsYDJCG/giphy.gif'
                                                 class='gin' alt='gin'>2021 </p>
          </div>
          <div class='overflow-hidden line-scroll-4'>
            <p class='welcome line p-0 m-0'>(<img src='https://media.giphy.com/media/qNSRPyKLJIzZb0IJnB/giphy.gif'
                                                  class='lemon' alt='lemon'>)=><span
              class='customFont enjoy'>ENJOY</span><=(<img src='https://media.giphy.com/media/MAms0vmRszwHe/giphy.gif'
                                                     class='strawberry' alt='strawberry'>)</p>
          </div>
        </div>
      </div>
    </section>
    <section class='drawing'>
      <div class='container2'>
        <div class='drawing-elem drawing-monkey '><img src='https://media.giphy.com/media/J2TpMp7nR3I6cSyRhy/giphy.gif'
                                                       class='img-fluid monkey' alt='monkey'>
        </div>
        <div class='drawing-elem drawing-plant'><img src='https://media.giphy.com/media/TiraF3ku29LfOARfdO/giphy.gif'
                                                     class='img-fluid plant' alt='plant'>
        </div>
        <div class='drawing-elem drawing-moon'><img src='https://media.giphy.com/media/h8xE5ALopE7a9nGVIu/giphy.gif'
                                                    class='img-fluid moon' alt='moon'>
        </div>
        <div class='drawing-elem drawing-crow'><img src='https://media.giphy.com/media/eh6xpYS0f1iWyH5P3V/giphy.gif'
                                                    class='img-fluid crow' alt='crow'>
        </div>
      </div>
    </section>
    <section>
      <div class='congrat d-flex justify-content-center '>
        <p class='text-congrat p-0 m-0'>Que vais-je préparer en cette glorieuse année ?</p>
      </div>
    </section>
    <section id='home-scroll-1'>
      <div class='recipe d-flex justify-content-center scroll-text-1'>
        <p class='text-recipe p-0 m-0'>Tout d'abord, il nous faut de le farine, de l'eau, un peu de sel, de la levure, de
          l'huile d'olive, de la volonté et de la pérséverance ! Une fois le tout mélangé par ordre de priorité, en voici le résultat !
        </p>
      </div>
      <div id='pizza1' class='pizza d-flex justify-content-center '>
        <img class='pizza-img h-100 w-100 img-scroll-1' src='~/assets/home/pizza.jpg' alt='pizza'>
      </div>
    <div class='question'>
      <p class='text-question p-0 m-0 sroll-text-1'>Mais que faisons-nous ?</p>
      <div class='drawing-elem drawing-bracket-1'><img src='https://media.giphy.com/media/pVILpzbBE3NEaQwc1d/giphy.gif'
                                                       class='img-fluid bracket-1' alt='bracket'>
      </div>
      <div class='drawing-elem drawing-bracket-2'><img src='https://media.giphy.com/media/pVILpzbBE3NEaQwc1d/giphy.gif'
                                                       class='img-fluid bracket-2' alt='bracket'>
      </div>
    </div>
    </section>
    <section id='home-scroll-2'>
    <div class='recipe d-flex justify-content-center scroll-text-2'>
      <p class='text-recipe p-0 m-0'>
        De la passion, mon enfant ! C'est grâce à elle que l'on surpasse ses limites dans toute l'étendue de notre créativité. Elle nous pousse,
       elle nous permet de partager et de transmettre. Mais surtout d'innover dans le but de créer quelque chose d'unique qui nous donne une véritable identité. Selon moi, la passion donne du sens, elle est universelle,
        sans la passion la satisfaction s'estompe.
      </p>
    </div>
    </section>
    <div id='pizza2' class='pizza d-flex justify-content-center '>
      <img class='pizza-img h-100 w-100 img-scroll-2' src='~/assets/home/pizza2.jpg' alt='pizza2'>
    </div>
    <section id='home-scroll-3'>
    <div class='recipe d-flex justify-content-center scroll-text-3'>
      <p class='text-recipe p-0 m-0'>
        Comme nous pouvons le deviner, vous trouverez ici uniquement des travaux inspirés de références réadaptées à ma vision de l'expérience client.
        Vous découvrirez ici l'évolution de mes travaux. Je vous souhaite une bonne visite et "buon appetito 👨🏻‍🍳🇮🇹".
      </p>
    </div>
    </section>
  </div>
</template>
<script>
import { gsap } from 'gsap'

export default {
  mounted: function() {
    this.startAnimation()
  },
  methods: {
    startAnimation: function() {
      const line = document.querySelectorAll('.line')
      const rock = document.querySelector('.rock')
      let enjoy = document.querySelector('.enjoy')
      let mouseCursor = document.querySelector('.cursor')


      gsap.timeline(100)
        .from(line, {
          duration: 2,
          yPercent: 200,
          ease: 'power4',
          stagger: 0.2
        })

      gsap.timeline(100)
        .fromTo(rock, {
            scaleX: 0,
            scaleY: 0
          },
          {
            duration: 2.5,
            scaleX: 1,
            scaleY: 1,
            ease: 'power5'
          })


      const scene = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%',
      })
        .setTween('.line-scroll-1', {
          x: -350
        })
      this.$scrollmagic.addScene(scene)

      const scene2 = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%',

      })
        .setTween('.line-scroll-2', {
          x: 350
        })
      this.$scrollmagic.addScene(scene2)

      const scene3 = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%',

      })
        .setTween('.line-scroll-3', {
          x: -100
        })
      this.$scrollmagic.addScene(scene3)

      const scene4 = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%',

      })
        .setTween('.line-scroll-4', {
          x: 100
        })
      this.$scrollmagic.addScene(scene4)

      const scene5 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: '.container2',
        duration: '120%'

      })
        .setTween('.drawing-monkey', {
          x: -100,
          y: -50
        })
      this.$scrollmagic.addScene(scene5)

      const scene6 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: '.container2',
        duration: '120%'

      })
        .setTween('.drawing-moon', {
          x: 200,
          rotation: -10
        })
      this.$scrollmagic.addScene(scene6)

      const scene7 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: '.container2',
        duration: '120%'

      })
        .setTween('.drawing-plant', {
          x: -150,
          rotation: 40
        })
      this.$scrollmagic.addScene(scene7)
      const scene8 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: '.container2',
        duration: '120%'

      })
        .setTween('.drawing-crow', {
          y: -50,
          x: 300
        })
      this.$scrollmagic.addScene(scene8)

      const scene9 = this.$scrollmagic.scene({
        triggerHook: 0.6,
        triggerElement: '.container2',
        duration: '100%'

      })
        .setTween('.drawing-plane', {
          y: 150
        })
      this.$scrollmagic.addScene(scene9)

      const scene10 = this.$scrollmagic.scene({
        triggerHook: 0.4,
        triggerElement: '#home-scroll-1',
      })
      .setTween('.scroll-text-1', {opacity: 1, duration: 0.25})
      this.$scrollmagic.addScene(scene10)

      const scene11 = this.$scrollmagic.scene({
        triggerHook: 0.4,
        triggerElement: '#home-scroll-2',
      })
        .setTween('.scroll-text-2', {opacity: 1, duration: 0.25})
      this.$scrollmagic.addScene(scene11)

      const scene12 = this.$scrollmagic.scene({
        triggerHook: 0.8,
        triggerElement: '#home-scroll-3',
      })
        .setTween('.scroll-text-3', {opacity: 1, duration: 0.25})
      this.$scrollmagic.addScene(scene12)

      const scene13 = this.$scrollmagic.scene({
      triggerHook: 0.3,
        triggerElement: '#pizza1' ,
      })
      .setTween('.img-scroll-1', {
        scaleX: 1.3,
        scaleY: 1.2,
        duration: 0.25
      })
      this.$scrollmagic.addScene(scene13)
      const scene14 = this.$scrollmagic.scene({
        triggerHook: 0.3,
        triggerElement: '#pizza2' ,
      })
        .setTween('.img-scroll-2', {
          scaleX: 1.3,
          scaleY: 1.2,
          duration: 0.25
        })
      this.$scrollmagic.addScene(scene14)
      enjoy.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
      })
      enjoy.addEventListener('mouseleave', () =>{
        mouseCursor.classList.remove('link-grow')
      })


    }


  }

}
</script>

<style scoped>

.enjoy {
  cursor: pointer;
}

.scroll-text-1 {
  opacity: 0;
}

.scroll-text-2 {
  opacity: 0;
}

.scroll-text-3 {
  opacity: 0;
}

.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}


.pizza-img {
  pointer-events: all;
  width: 1108px;
  height: 610px;
}

.pizza {
  margin-top: 5%;
}


.recipe {
  margin-top: 5%;
  line-height: 1.230769231;
  font-size: 4.038647343vw;
}

.text-recipe {
  text-align: center;
  width: 92.028985507vw;
}

.text-question {
  text-align: center;
  width: 92.028985507vw;
}

.question {
  font-size: 4.7971014493vw;
  position: relative;
  bottom: 150px;
}

.congrat {
  font-size: 5.7971014493vw;
  position: relative;
  bottom: 150px;
}

.text-congrat {
  text-align: center;
  width: 92.028985507vw;
}

.monkey {
  transform: translateX(-7.62513vw) translateY(-1.90628vw) rotate(
    11.4377deg
  );
}

.bracket-1 {
  transform: translateX(-7.62513vw) translateY(-1.90628vw) rotate(
    7.4377deg);
}

.bracket-2 {
  transform: translateX(-7.62513vw) translateY(-1.90628vw) rotate(
    175.4377deg);
}

.drawing-bracket-1 {
  width: 4.222222222vw;
  bottom: auto;
  left: 85%;
  z-index: 2;
}

.drawing-bracket-2 {
  width: 4.222222222vw;
  bottom: auto;
  left: 91%;
  z-index: 2;
}

.drawing-monkey {
  width: 7.222222222vw;
  bottom: auto;
  left: 34%;

}

.drawing-plant {
  width: 7.222222222vw;
  bottom: auto;
  left: 34%;
}

.drawing-moon {
  width: 11.222222222vw;
  bottom: auto;
  left: 34%;

}

.drawing-crow {
  width: 17.222222222vw;
  bottom: auto;
  left: 34%;
}

.crow {
  transform: translateX(-3.19392vw) translateY(3.19392vw) rotate(
    35.38783deg
  );
}


.plant {
  transform: translateX(-3.19392vw) translateY(3.19392vw) rotate(
    11.38783deg
  );
}


.drawing-elem {
  position: absolute;
}

.drawing {
  height: 19.444444444vw;
  padding: 0;
}

.overflow-hidden {
  overflow: hidden
}

.container2 {
  display: block;
  width: 140%;
  position: relative;
}


img {
  width: 6.416666667vw;
  image-rendering: auto;
}

img.img-fluid {
  display: block;
  width: 100%;
  height: auto;
}

.rock {
  width: 12.416666667vw;
  margin-left: 20px;
  margin-right: 20px;

}

.lemon {
  height: 6.416666667vw;
}

.strawberry {
  height: 6.416666667vw;
}

.world {
  margin-left: 20px;
}


body * {
  letter-spacing: .05em;
  box-sizing: border-box;
}

p {
  display: block;
  margin-block-start: 2em;
  margin-block-end: 2em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

.p-0 {
  padding: 0;
}

.m-0 {
  margin: 0;
}

.line {
  white-space: nowrap;
  font-family: "Helvetica", sans-serif;

}

section {
  display: block;
}

.welcome {
  font-size: 10.027777778vw;
  line-height: .886722663;
}

.container {
  position: relative;
  bottom: 80px;
  padding-left: 5%;
  margin-top: 5%;

}

.min-vh-100 {
  min-height: 100vh;
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.customFont {
  font-family: "Shree Devanagari 714", sans-serif;
  font-weight: lighter;
}

</style>
