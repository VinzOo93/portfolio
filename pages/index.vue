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
              class='customFont'>ENJOY</span><=(<img src='https://media.giphy.com/media/MAms0vmRszwHe/giphy.gif'
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
        <p class='text-congrat p-0 m-0'>Maintenant que vais-je préparer en cette glorieuse année ?</p>
      </div>

      <div class='recipe d-flex justify-content-center'>
        <p class='text-recipe p-0 m-0'>Tout d'abord, il te faut de le farine, de l'eau, de la levure, de l'huile d'olive, de la volonté et de la perceverance ! C'est
          parti ! Grâce à ces 5 ingrédients fondamentaux vous pouvez déjà réaliser pas mal de choses.
          La farine est la matière, au mélange de la levure et de l'eau, une alchimie se forme pour donner une texture
          homogène. Laissez reposer ! Bien joué ! maintenant, notre pâte est levée.
        </p>
      </div>
      <div class='pizza d-flex justify-content-center '>
        <img class='pizza-img h-100 w-100' src='~/assets/home/pizza.jpg' alt='pizza'>
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
        easeOut: 1
      })
        .setTween('.line-scroll-1', {
          x: -350
        })
      this.$scrollmagic.addScene(scene)

      const scene2 = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%',
        easeOut: 1

      })
        .setTween('.line-scroll-2', {
          x: 350
        })
      this.$scrollmagic.addScene(scene2)

      const scene3 = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%',
        easeOut: 1

      })
        .setTween('.line-scroll-3', {
          x: -100
        })
      this.$scrollmagic.addScene(scene3)

      const scene4 = this.$scrollmagic.scene({
        triggerHook: 0,
        offset: 1,
        duration: '100%',
        easeOut: 1

      })
        .setTween('.line-scroll-4', {
          x: 100
        })
      this.$scrollmagic.addScene(scene4)

      const scene5 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: 'container2',
        duration: '120%'

      })
        .setTween('.drawing-monkey', {
          x: -100,
          y: -50
        })
      this.$scrollmagic.addScene(scene5)

      const scene6 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: 'container2',
        duration: '120%'

      })
        .setTween('.drawing-moon', {
          x: 200,
          rotation: -10
        })
      this.$scrollmagic.addScene(scene6)

      const scene7 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: 'container2',
        duration: '120%'

      })
        .setTween('.drawing-plant', {
          x: -150,
          rotation: 40
        })
      this.$scrollmagic.addScene(scene7)
      const scene8 = this.$scrollmagic.scene({
        triggerHook: 0.9,
        triggerElement: 'container2',
        duration: '120%'

      })
        .setTween('.drawing-crow', {
          y: -50,
          x: 300,
        })
      this.$scrollmagic.addScene(scene8)

      const scene9 = this.$scrollmagic.scene({
        triggerHook: 0.6,
        triggerElement: 'container2',
        duration: '100%'

      })
        .setTween('.drawing-plane', {
         y: 150
        })
      this.$scrollmagic.addScene(scene9)
    }

  }

}
</script>

<style scoped>

.h-100 {
  height: 100%;
}

.w-100 {
width: 100%;
}

.pizza-img {
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 150, 50, 0, 1);
  pointer-events: all;
  width: 1108px;
  height:  610px;

}
.pizza {
  position: absolute;
}

.recipe {
  line-height: 1.230769231;
  font-size: 4.038647343vw;
}
.text-recipe {
  text-align: center;
  width: 92.028985507vw;
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
    -11.38783deg
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
