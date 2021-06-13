<template>
  <div>
    <div class="transition"></div>
    <modale-game v-bind:revele='revele' v-bind:toggle-modale='toggleModale'></modale-game>
    <section class="welcome-home overflow-hidden">
      <div class="d-flex flex-column xs justify-content-center min-vh-100  container">
        <div class="line__wrap overflow-hidden  line-scroll-1  ">
          <div class="line-container d-flex">
            <p class="welcome line fz-3xl p-0 m-0"><span class="customFont">HEY</span> <img
              src="https://media.giphy.com/media/VDNDX5BhKKz0YsJkl0/giphy.gif" class="eyes img-line img-sm" alt="eyes">
              WELCOME
            </p>
            <p class="welcome line fz-3xl p-0 m-0"><span class="customFont">HEY</span> <img
              src="https://media.giphy.com/media/VDNDX5BhKKz0YsJkl0/giphy.gif" class="eyes img-line img-sm" alt="eyes">
              WELCOME
            </p>
          </div>
        </div>
        <div class="line__wrap overflow-hidden   line-scroll-2">
          <div class="line-container d-flex">
            <p  class="welcome line fz-3xl p-0 m-0"><img
              src="https://media.giphy.com/media/RSgKTx5RRZj34rbbu7/giphy.gif"
              class="covid img-sm" alt="covid"> IN MY <span
              class="customFont">WORLD</span><img src="https://media.giphy.com/media/dvgjUJsZ60Wyw8UNyM/giphy.gif"
                                                  class="world img-sm" alt="world"></p>
            <p class="welcome line fz-3xl p-0 m-0"><img
              src="https://media.giphy.com/media/RSgKTx5RRZj34rbbu7/giphy.gif"
              class="covid img-sm" alt="covid"> IN MY <span
              class="customFont">WORLD</span><img src="https://media.giphy.com/media/dvgjUJsZ60Wyw8UNyM/giphy.gif"
                                                  class="world img-sm" alt="world"></p>
          </div>
        </div>
        <div class="line__wrap overflow-hidden  line-scroll-3">
          <div class="line-container d-flex">
            <p class="welcome line fz-3xl p-0 m-0"> 20<img src="~/assets/home/rock.jpg" class="rock img-line"
                                                           alt="rock img-sm"><span
              class="customFont">CENT</span><img src="https://media.giphy.com/media/f4DxcVLlIOAgsYDJCG/giphy.gif"
                                                 class="gin img-sm" alt="gin">2021 </p>
            <p class="welcome line fz-3xl p-0 m-0"> 20<img src="~/assets/home/rock.jpg" class="rock img-line"
                                                           alt="rock img-sm"><span
              class="customFont">CENT</span><img src="https://media.giphy.com/media/f4DxcVLlIOAgsYDJCG/giphy.gif"
                                                 class="gin img-sm" alt="gin">2021 </p>
          </div>
        </div>
        <div class="line__wrap overflow-hidden line-scroll-4">
          <div class="line-container d-flex">
            <p class="welcome line fz-3xl p-0 m-0">(<img
              src="https://media.giphy.com/media/qNSRPyKLJIzZb0IJnB/giphy.gif"
              class="lemon img-line img-sm" alt="lemon">)=><span v-on:click='toggleModale'
              class="customFont enjoy">ENJOY</span><=(<img src="https://media.giphy.com/media/MAms0vmRszwHe/giphy.gif"
                                                           class="strawberry img-sm" alt="strawberry">)</p>
            <p class="welcome line fz-3xl p-0 m-0">(<img
              src="https://media.giphy.com/media/qNSRPyKLJIzZb0IJnB/giphy.gif"
              class="lemon img-line img-sm" alt="lemon">)=><span v-on:click='toggleModale'
              class="customFont enjoy">ENJOY</span><=(<img src="https://media.giphy.com/media/MAms0vmRszwHe/giphy.gif"
                                                           class="strawberry img-sm" alt="strawberry">)</p>
          </div>
        </div>
      </div>
    </section>
    <section class="drawing">
      <div class="container2 d-flex justify-content-center">
        <div class="drawing-elem drawing-monkey "><img src="https://media.giphy.com/media/J2TpMp7nR3I6cSyRhy/giphy.gif"
                                                       class="img-fluid monkey" alt="monkey">
        </div>
        <div class="drawing-elem drawing-plant"><img src="https://media.giphy.com/media/TiraF3ku29LfOARfdO/giphy.gif"
                                                     class="img-fluid plant" alt="plant">
        </div>
        <div class="drawing-elem drawing-moon"><img src="https://media.giphy.com/media/h8xE5ALopE7a9nGVIu/giphy.gif"
                                                    class="img-fluid moon" alt="moon">
        </div>
        <div class="drawing-elem drawing-crow"><img src="https://media.giphy.com/media/eh6xpYS0f1iWyH5P3V/giphy.gif"
                                                    class="img-fluid crow" alt="crow">
        </div>
      </div>
    </section>
    <section>
      <div class="congrat d-flex justify-content-center ">
        <p class="text-congrat p-0 m-0">Que vais-je préparer en cette glorieuse année ?</p>
      </div>
    </section>
    <section id="home-scroll-1">
      <div class="recipe d-flex justify-content-center scroll-text-1 xs-reveal">
        <p class="text-recipe p-0 m-0">Tout d'abord, il nous faut de le farine, de l'eau 💧, un peu de sel, de la
          levure,
          de
          l'huile d'olive, de la volonté et de la pérséverance 🏃🏽... Une fois le tout mélangé par ordre de priorités,
          nous pouvons nous lancer !
        </p>
      </div>
      <div id="pizza1" class="pizza d-flex justify-content-center ">
        <img class="pizza-img  img-scroll-1" src="~/assets/home/pizza.jpg" alt="pizza">
      </div>
      <div class="question">
        <p class="text-question p-0 m-0 sroll-text-1">Mais que faisons-nous ?</p>
      </div>
    </section>
    <section id="home-scroll-2">
      <div class="recipe d-flex justify-content-center scroll-text-2 xs-reveal">
        <p class="text-recipe p-0 m-0">
          De la passion ! C'est grâce à elle que l'on surpasse ses limites dans toute l'étendue de notre créativité.
          Elle nous pousse,
          elle nous permet de partager et de transmettre. Mais surtout d'innover dans le but de créer quelque chose
          d'authentique. Selon moi, la passion donne du sens, elle est universelle.
        </p>
      </div>
    </section>
    <div id="pizza2" class="pizza d-flex justify-content-center ">
      <img class="pizza-img  img-scroll-2" src="~/assets/home/pizza2.jpg" alt="pizza2">
    </div>
    <section id="home-scroll-3">
      <div class="recipe d-flex justify-content-center scroll-text-3 xs-reveal">
        <p class="text-recipe p-0 m-0 end">
          De la même passion que dans ma cuisine pour le développement de pizza, je suis à votre écoute, pour prendre connaissance de votre besoin. Je recherche
          et développe pour vous votre site internet "bien enfourné 🔥🍕" qui "fait la différence" !
        </p>
      </div>
    </section>
    <section>
      <div id="pizza3" class="pizza d-flex justify-content-center ">
        <img class="pizza-img img-scroll-3" src="~/assets/home/pizza3.jpg" alt="pizza3">
      </div>
      <div id="home-scroll-4" class="recipe d-flex justify-content-center scroll-text-4 xs-reveal">
        <p class="text-recipe p-0 m-0 end ">
          Vous trouverez ici uniquement des travaux dont certains sont inspirés de références réadaptées à ma vision.
          Dès lors, je vous souhaite une bonne visite et "un buon appetito 👨🏻‍🍳🇮🇹".
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import { gsap } from "gsap"
import ModaleGame from "@/components/ModaleGame"

export default {
  name: 'index',
  data(){
    return {
      revele: false
    }
  },
  components: {
    'modale-game': ModaleGame,
  }
  ,
  mounted: function() {
    this.startAnimation();
  },
  methods: {
    startAnimation: function() {
      const line = document.querySelectorAll(".line")
      const rock = document.querySelector(".rock")
      let enjoy = document.querySelector(".enjoy")
      let mouseCursor = document.querySelector(".cursor")
      let windowSize = screen.width
      const revealXs = document.querySelectorAll(".xs-reveal")
      const transition = document.querySelector(".transition")
      const  welcome = document.querySelector(".welcome-home")
      const body = document.body


      if (windowSize <= 768) {
        body.style.height = 1000 + 'px'
        gsap.timeline(100)
          .fromTo(transition,
            {
              opacity: 1,
              yPercent: 100,
              duration: 3
            },
            {
              yPercent: -100,
              duration: 3
            })
          .fromTo(welcome, {opacity: 0, yPercent: 100, duration:3 }, {
            opacity: 1,
            yPercent: 0,
            ease: "power1",
            duration: 3
          });
/*        .from(line, {
          yPercent: 200,
          duration:2,
          ease: "power4",
          stagger: 0.2
        })*/
      }
      gsap.timeline(100)
        .fromTo(rock, {
            scaleX: 0,
            scaleY: 0
          },
          {
            duration: 2.5,
            scaleX: 1,
            scaleY: 1,
            ease: "power5"
          })

      if (windowSize > 768) {

        gsap.timeline(100)
          .from(line, {
            duration: 2,
            yPercent: 200,
            ease: "power4",
          })

        const scene = this.$scrollmagic.scene({
          triggerHook: 0,
          offset: 1,
          duration: "100%"
        })
          .setTween(".line-scroll-1", {
            x: -350
          })
        this.$scrollmagic.addScene(scene)

        const scene2 = this.$scrollmagic.scene({
          triggerHook: 0,
          offset: 1,
          duration: "100%"

        })
          .setTween(".line-scroll-2", {
            x: 350
          })
        this.$scrollmagic.addScene(scene2)

        const scene3 = this.$scrollmagic.scene({
          triggerHook: 0,
          offset: 1,
          duration: "100%"

        })
          .setTween(".line-scroll-3", {
            x: -100
          })
        this.$scrollmagic.addScene(scene3)

        const scene4 = this.$scrollmagic.scene({
          triggerHook: 0,
          offset: 1,
          duration: "100%"

        })
          .setTween(".line-scroll-4", {
            x: 100
          })
        this.$scrollmagic.addScene(scene4)

      }


      const scene5 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: ".container2",
        duration: "120%"

      })

        .setTween(".drawing-monkey", {
          x: -60,
          y: -30
        })
      this.$scrollmagic.addScene(scene5)

      const scene6 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: ".container2",
        duration: "120%"

      })
        .setTween(".drawing-moon", {
          x: 80,
          rotation: -10
        })
      this.$scrollmagic.addScene(scene6)

      const scene7 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: ".container2",
        duration: "120%"

      })
        .setTween(".drawing-plant", {
          x: -50,
          rotation: 40
        })
      this.$scrollmagic.addScene(scene7)
      const scene8 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: ".container2",
        duration: "120%"

      })
        .setTween(".drawing-crow", {
          y: -30,
          x: 60
        })
      this.$scrollmagic.addScene(scene8)

      if (windowSize > 768) {


        const scene10 = this.$scrollmagic.scene({
          triggerHook: 0.5,
          triggerElement: "#home-scroll-1"
        })
          .setTween(".scroll-text-1", { opacity: 1, duration: 0.5 })
        this.$scrollmagic.addScene(scene10)

        const scene11 = this.$scrollmagic.scene({
          triggerHook: 0.8,
          triggerElement: "#home-scroll-2"
        })
          .setTween(".scroll-text-2", { opacity: 1, duration: 0.5 })
        this.$scrollmagic.addScene(scene11)

        const scene12 = this.$scrollmagic.scene({
          triggerHook: 0.9,
          triggerElement: "#home-scroll-3"
        })
          .setTween(".scroll-text-3", { opacity: 1, duration: 0.9 })
        this.$scrollmagic.addScene(scene12)

        const scene16 = this.$scrollmagic.scene({
          triggerHook: 0.9,
          triggerElement: "#home-scroll-4"
        })
          .setTween(".scroll-text-4", { opacity: 1, duration: 0.9 })
        this.$scrollmagic.addScene(scene16)

        const scene13 = this.$scrollmagic.scene({
          triggerHook: 1,
          triggerElement: "#pizza1",
          duration: "90%"

        })
          .setTween(".img-scroll-1", {
            scaleX: 1.4,
            scaleY: 1.4,
            duration: 5
          })
        this.$scrollmagic.addScene(scene13)
        const scene14 = this.$scrollmagic.scene({
          triggerHook: 0.7,
          triggerElement: "#pizza2",
          duration: "90%"
        })
          .setTween(".img-scroll-2", {
            scaleX: 1.3,
            scaleY: 1.3,
            duration: 5
          })
        this.$scrollmagic.addScene(scene14)
        const scene15 = this.$scrollmagic.scene({
          triggerHook: 0.4,
          triggerElement: "#pizza3",
          duration: "90%"
        })
          .setTween(".img-scroll-3", {
            scaleX: 1.3,
            scaleY: 1.3,
            duration: 5
          })
        this.$scrollmagic.addScene(scene15)
      } else {
        revealXs.forEach(text => text.style.opacity = "1")
      }
      enjoy.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow")
      })
      enjoy.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow")
      })
    }
    , toggleModale : function(){

      this.revele = !this.revele

    }
  }

}
</script>

<style scoped>


@media only screen and (max-width: 768.5px) {

  .fz-3xl {
    font-size: 24.985507246vw;
  }

.text-recipe {
    width: 92.028985507vw !important;
;
}

  .pizza-img {
    width: 100% !important;
    height: 100% !important;
  }

  .xs {
    position: relative;
    bottom: 100px;
  }

  .rock {
    top: .483091787vw;
    width: 31.400966184vw;
  }

  .eyes {
    top: -.9661835749vw;
    width: 25.115942029vw;
  }

  .covid {
    top: -.9661835749vw;
    width: 25.115942029vw;
  }

  .world {
    top: -.9661835749vw;
    width: 25.115942029vw;
  }

  .gin {
    top: -.9661835749vw;
    width: 15.115942029vw;
  }


  .lemon {
    width: 13.115942029vw;
  }

  .strawberry {
    width: 13.115942029vw;
  }

  .line-container {
    height: 26.570048309vw
  }

  .container {
    padding: 15.323671498vw 0 0;
  }

  img.img-fluid {
    position: absolute;
    bottom: -4.583333vw;
  }

  .crow {
    transform: translateX(12.19392vw) translateY(13.19392vw) rotate(
      35.38783deg
    ) !important;
    width: 30.416667vw !important;
  }


  .plant {
    transform: translateX(-9.19392vw) translateY(12.19392vw) rotate(0deg) !important;
    width: 18.416667vw !important;
  }

  .monkey {
    transform: translateX(-26.19392vw) translateY(10.19392vw) rotate(
      11.4377deg
    ) !important;
    width: 20.416667vw !important;
  }

  .moon {
    position: absolute;
    left: 50%;
    transform: translateX(-2.19392vw) translateY(18.19392vw) rotate(
      35.38783deg
    ) !important;
    width: 30.416667vw !important;
  }


  .welcome-home .line__wrap:nth-child(odd) .welcome {
    animation-play-state: running;
    animation-name: ticker;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-direction: normal;
    animation-iteration-count: infinite;
  }

  .welcome-home .line__wrap:nth-child(even) .welcome {
    animation-play-state: running;
    animation-name: ticker2;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-direction: normal;
    animation-iteration-count: infinite;
  }


  @keyframes ticker {
    100% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(-100%);
    }

  }
  @keyframes ticker2 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }

  }
}

@media only screen and (min-width: 768.5px) and (max-width: 992px) {


  .drawing-monkey {
    left: 34%;
  }

  .container {
    padding-left: 1%;
    margin-top: 1%;
  }

  .rock {
    top: .78125vw;
    width: 18.4375vw
  }

  .eyes {
    top: -.9661835749vw;
    width: 12.115942029vw;
  }

  .covid {
    top: -.9661835749vw;
    width: 12.115942029vw;
  }

  .world {
    top: -.9661835749vw;
    width: 12.115942029vw;
  }

  .gin {
    top: -.9661835749vw;
    width: 9.115942029vw;
  }


  .lemon {
    width: 8.115942029vw;
  }

  .strawberry {
    width: 8.115942029vw;
  }

  .fz-3xl {
    font-size: 14.625vw;
  }

  .line-container {
    height: 150px !important;
  }

  img.img-fluid {
    width: 15.416667vw !important;
    padding-right: 75px;
  }

}

@media only screen and (min-width: 992px) {

  .lemon {
    height: 6.416666667vw;
  }

  .strawberry {
    height: 6.416666667vw;
  }

  .rock {
    width: 12.416666667vw;

  }

  .line-container {
    height: 9.611111111vw !important;
  }

  body * {
    box-sizing: border-box;
    overflow: visible;
  }

  .fz-3xl {
    font-size: 10.027777778vw;
  }


  .container {
    position: relative;
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


  img.img-fluid {
    display: block;
    height: auto;
    width: 100%;
  }


  .drawing-elem {
    position: absolute;
    justify-content: center;
  }

  .drawing {
    height: 30.444444444vw;
    padding: 0;

  }
}

.crow {
  transform: translateX(2.19392vw) translateY(-1.90628vw) rotate(
    35.38783deg
  );
}


.plant {
  transform: translateX(0vw) translateY(3.19392vw) rotate(
    11.38783deg
  );
}

.monkey {
  z-index: 4;
  transform: translateX(-3.19392vw) translateY(-1.90628vw) rotate(
    11.4377deg
  );
}

.moon {
  transform: translateX(0vw) translateY(3.19392vw) rotate(
    35.38783deg
  );
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

.scroll-text-4 {
  opacity: 0;
}



.justify-content-center {
  justify-content: center;
}

.pizza-img {
  pointer-events: all;
  width: 75%;
  height: 75%;
}

.pizza {
  margin-top: 5%;
}


.recipe {
  margin-top: 5%;
  line-height: 1.230769231;
  font-size: 3.038647343vw;
}

.text-recipe {
  text-align: center;
  width: 80.028985507vw;
}

.text-question {
  text-align: center;
  width: 92.028985507vw;
}

.question {
  font-size: 5.7971014493vw;
  position: relative;
  bottom: 90px;
  margin-left: 5%;
  margin-right: 5%;}

.congrat {
  font-size: 5.7971014493vw;
  position: relative;
  bottom: 120px;
}

.text-congrat {
  text-align: center;
  width: 92.028985507vw;
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
  margin-left: 20px;
  margin-right: 20px;

}


.world {
  margin-left: 20px;
}


body * {
  letter-spacing: 0.07em;
  overflow: visible;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}


p .customFont {
  line-height: 1.5;
}

.p-0 {
  padding: 0 0 0 0;
}

.m-0 {
  margin: 0 0 0 0;
}

.line {
  white-space: nowrap;
  font-family: "Helvetica", sans-serif;
  padding: 0 5.20833vw;
}

.container {
  padding-bottom: 5%;
  line-height: 1;

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
  height: 26.570048309vw;
}

.end {
  position: relative;
  margin-top: 2%;
}

section {
  display: block;
}


</style>
