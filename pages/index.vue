<template>

  <div>
    <div class='transition'></div>
    <section>
      <div class='d-flex flex-column  justify-content-center min-vh-100 '>
        <div class='container'>
          <div class='overflow-hidden line-container line-scroll-1'>
            <p class='welcome line fz-3xl p-0 m-0'><span class='customFont'>HEY</span> <img
              src='https://media.giphy.com/media/VDNDX5BhKKz0YsJkl0/giphy.gif' class='eyes img-line' alt='eyes'> WELCOME</p>
          </div>
          <div class='overflow-hidden  line-container line-scroll-2'>
            <p class='welcome line fz-3xl p-0 m-0'><img src='https://media.giphy.com/media/RSgKTx5RRZj34rbbu7/giphy.gif'
                                                 class='covid' alt='covid'> IN MY <span
              class='customFont'>WORLD</span><img src='https://media.giphy.com/media/dvgjUJsZ60Wyw8UNyM/giphy.gif'
                                                  class='world' alt='world'></p>
          </div>
          <div class='overflow-hidden line-container line-scroll-3'>
            <p class='welcome line fz-3xl p-0 m-0'> 20<img src='~/assets/home/rock.jpg' class='rock img-line' alt='rock'><span
              class='customFont'>CENT</span><img src='https://media.giphy.com/media/f4DxcVLlIOAgsYDJCG/giphy.gif'
                                                 class='gin' alt='gin'>2021 </p>
          </div>
          <div class='overflow-hidden line-container line-scroll-4'>
            <p class='welcome line fz-3xl p-0 m-0'>(<img src='https://media.giphy.com/media/qNSRPyKLJIzZb0IJnB/giphy.gif'
                                                  class='lemon img-line' alt='lemon'>)=><span
              class='customFont enjoy'>ENJOY</span><=(<img src='https://media.giphy.com/media/MAms0vmRszwHe/giphy.gif'
                                                           class='strawberry img-line' alt='strawberry'>)</p>
          </div>
        </div>
      </div>
    </section>
    <section class='drawing'>
      <div class='container2 d-flex justify-content-center'>
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
        <p class='text-recipe p-0 m-0'>Tout d'abord, il nous faut de le farine, de l'eau 💧, un peu de sel, de la levure,
          de
          l'huile d'olive, de la volonté et de la pérséverance 🏃🏽... Une fois le tout mélangé par ordre de priorités, nous pouvons nous lancer !
        </p>
      </div>
      <div id='pizza1' class='pizza d-flex justify-content-center '>
        <img class='pizza-img h-100 w-100 img-scroll-1' src='~/assets/home/pizza.jpg' alt='pizza'>
      </div>
      <div class='question'>
        <p class='text-question p-0 m-0 sroll-text-1'>Mais que faisons-nous ?</p>
        <div class='drawing-elem drawing-bracket-1'><img
          src='https://media.giphy.com/media/pVILpzbBE3NEaQwc1d/giphy.gif'
          class='img-fluid bracket-1' alt='bracket'>
        </div>
        <div class='drawing-elem drawing-bracket-2'><img
          src='https://media.giphy.com/media/pVILpzbBE3NEaQwc1d/giphy.gif'
          class='img-fluid bracket-2' alt='bracket'>
        </div>
      </div>
    </section>
    <section id='home-scroll-2'>
      <div class='recipe d-flex justify-content-center scroll-text-2'>
        <p class='text-recipe p-0 m-0'>
          De la passion ! C'est grâce à elle que l'on surpasse ses limites dans toute l'étendue de notre créativité.
          Elle nous pousse,
          elle nous permet de partager et de transmettre. Mais surtout d'innover dans le but de créer quelque chose
          d'unique qui nous donne une véritable identité. Selon moi, la passion donne du sens, elle est universelle,
          sans la passion la satisfaction s'estompe.
        </p>
      </div>
    </section>
    <div id='pizza2' class='pizza d-flex justify-content-center '>
      <img class='pizza-img h-100 w-100 img-scroll-2' src='~/assets/home/pizza2.jpg' alt='pizza2'>
    </div>
    <section id='home-scroll-3'>
      <div class='recipe d-flex justify-content-center scroll-text-3'>
        <p class='text-recipe p-0 m-0 end'>
         Cela va sans doute vous faire rire, mais de la même passion que je travaille la pâte et que je compose mes Pizzas 🍕. Je suis à votre écoute, pour interpréter puis modéliser, je recherche
          puis conçoie et développe pour vous un site internet "bien enfourné 🔥" qui "fait la différence 🌟" !
          Vous trouverez ici uniquement des travaux dont certains sont inspirés de références réadaptées à ma vision.
          <br> Dès lors, je vous souhaite une bonne visite
          <br>et "un buon appetito 👨🏻‍🍳🇮🇹".
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
        duration: '100%'
      })
        .setTween('.line-scroll-1', {
          x: -350
        })
      this.$scrollmagic.addScene(scene)

      const scene2 = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%'

      })
        .setTween('.line-scroll-2', {
          x: 350
        })
      this.$scrollmagic.addScene(scene2)

      const scene3 = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%'

      })
        .setTween('.line-scroll-3', {
          x: -100
        })
      this.$scrollmagic.addScene(scene3)

      const scene4 = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%'

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
        triggerElement: '#home-scroll-1'
      })
        .setTween('.scroll-text-1', { opacity: 1, duration: 0.5 })
      this.$scrollmagic.addScene(scene10)

      const scene11 = this.$scrollmagic.scene({
        triggerHook: 0.7,
        triggerElement: '#home-scroll-2'
      })
        .setTween('.scroll-text-2', { opacity: 1, duration: 0.5 })
      this.$scrollmagic.addScene(scene11)

      const scene12 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: '#home-scroll-2'
      })
        .setTween('.scroll-text-3', { opacity: 1, duration: 0.5 })
      this.$scrollmagic.addScene(scene12)

      const scene13 = this.$scrollmagic.scene({
        triggerHook: 0.5,
        triggerElement: '#pizza1',
        duration: '70%'

      })
        .setTween('.img-scroll-1', {
          scaleX: 1.4,
          scaleY: 1.4,
          duration: 5
        })
      this.$scrollmagic.addScene(scene13)
      const scene14 = this.$scrollmagic.scene({
        triggerHook: 0.5,
        triggerElement: '#pizza2',
        duration: '70%'
      })
        .setTween('.img-scroll-2', {
          scaleX: 1.3,
          scaleY: 1.3,
          duration: 5
        })
      this.$scrollmagic.addScene(scene14)
      enjoy.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
      })
      enjoy.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
      })


    }


  }

}
</script>

<style scoped>

@media only screen and (max-width: 769px) {


.fz-3xl {
  font-size: 28.985507246vw !important;
}

  .line {
    height: 27.570048309vw;
  }

  .rock {
    width: 269px !important;
  }
  .eyes{
    width: 175px;
  }
  .covid {
    width: 175px;
  }
  .world {
    width: 175px;
  }

  .gin {
    width: 150px;
  }

  .lemon {
    width: 110px;
    height: 115px !important;
  }
  .strawberry {
    width: 110px;
    height: 115px !important;
  }



}


@media only screen and (min-width: 769px) and (max-width: 992px) {

  .fz-3xl {
    font-size: 15.625vw;
  }

  .container {
    padding-left: 1%;
    margin-top: 1%;
  }

  .rock {
    width: 172px !important;
  }

  .eyes{
    width: 100px;
  }
  .covid {
    width: 125px;
  }
  .world {
    width: 125px;
  }
  .gin {
    width: 110px;
  }
  .lemon {
    width: 90px;
    height: 125px;

  }
  .strawberry {
    width: 90px;
    height: 125px;
  }


}
@media only screen and (min-width: 992px) {
body * {
  box-sizing: border-box;
}


  .container {
    position: relative;
  }


  .fz-3xl {
    font-size: 10.027777778vw;
  }

  .drawing-monkey {
    width: 7.222222222vw;
    bottom: auto;

  }


  .drawing-monkey {
    width: 7.222222222vw;
    bottom: auto;

  }

  .drawing-plant {
    width: 7.222222222vw;
    bottom: auto;
  }

  .drawing-moon {
    width: 11.222222222vw;
    bottom: auto;

  }

  .drawing-crow {
    width: 17.222222222vw;
    bottom: auto;
  }
}

img.img-fluid {
  display: block;
  height: auto;
  width: 80%;

}


.drawing-elem {
  position: absolute;
}

.drawing {
  height: 30.444444444vw;
  padding: 0;

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


.scroll-text-2 {
  transform: translateZ(0);
  transition: transform .75s cubic-bezier(.27, 0, .22, 1);
}

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


.justify-content-center {
  justify-content: center;
}

.pizza-img {
  pointer-events: all;
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



.overflow-hidden {
  overflow: hidden
}

.container2 {
  position: relative;
}


img {
  width: 6.416666667vw;
  image-rendering: auto;
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
}

p {
  display: block;
  margin-block-start: 2em;
  margin-block-end: 2em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  min-height: 150px;
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
  padding: 0 5.20833vw;

}

section {
  display: block;
}



.min-vh-100 {
  min-height: 100vh;
}

.d-flex {
  display: flex;
}



.flex-column {
  flex-direction: column;
}

p .customFont {
  font-family: "Shree Devanagari 714", sans-serif;
  font-weight: lighter;
  line-height: 1;

}
.line-container {
  line-height: .886722663;
}
 .end {
   position: relative;
   top: 50px;
 }



</style>
