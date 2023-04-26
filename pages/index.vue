<template>
  <div>
    <div class='transition'></div>
    <ModaleGame v-bind:revele='revele' v-bind:toggle-modale='toggleModale'></ModaleGame>
    <section class='welcome-home overflow-hidden'>
      <div class='d-flex flex-column xs justify-content-center min-vh-100  container'>
        <div class='line__wrap overflow-hidden  line-scroll-1  '>
          <div class='line-container d-flex'>
            <p class='welcome line fz-3xl p-0 m-0'><span class='customFont'>HEY</span> <img
              src='https://media.giphy.com/media/VDNDX5BhKKz0YsJkl0/giphy.gif' class='eyes img-line img-sm' alt='eyes'>
              WELCOME
            </p>
            <p class='welcome line fz-3xl p-0 m-0'><span class='customFont'>HEY</span> <img
              src='https://media.giphy.com/media/VDNDX5BhKKz0YsJkl0/giphy.gif' class='eyes img-line img-sm' alt='eyes'>
              WELCOME
            </p>
          </div>
        </div>
        <div class='line__wrap overflow-hidden   line-scroll-2'>
          <div class='line-container d-flex'>
            <p class='welcome line fz-3xl p-0 m-0'><img
              src='https://media.giphy.com/media/RSgKTx5RRZj34rbbu7/giphy.gif'
              class='covid img-sm' alt='covid'> IN MY <span
              class='customFont'>WORLD</span><img src='https://media.giphy.com/media/dvgjUJsZ60Wyw8UNyM/giphy.gif'
                                                  class='world img-sm' alt='world'></p>
            <p class='welcome line fz-3xl p-0 m-0'><img
              src='https://media.giphy.com/media/RSgKTx5RRZj34rbbu7/giphy.gif'
              class='covid img-sm' alt='covid'> IN MY <span
              class='customFont'>WORLD</span><img src='https://media.giphy.com/media/dvgjUJsZ60Wyw8UNyM/giphy.gif'
                                                  class='world img-sm' alt='world'></p>
          </div>
        </div>
        <div class='line__wrap overflow-hidden  line-scroll-3'>
          <div class='line-container d-flex'>
            <p class='welcome line fz-3xl p-0 m-0'> 20<img src='~/assets/home/rock.jpg' class='rock img-line'
                                                           alt='rock img-sm'><span
              class='customFont'>CENT</span><img src='https://media.giphy.com/media/f4DxcVLlIOAgsYDJCG/giphy.gif'
                                                 class='gin img-sm' alt='gin'>2023 </p>
            <p class='welcome line fz-3xl p-0 m-0'> 20<img src='~/assets/home/rock.jpg' class='rock img-line'
                                                           alt='rock img-sm'><span
              class='customFont'>CENT</span><img src='https://media.giphy.com/media/f4DxcVLlIOAgsYDJCG/giphy.gif'
                                                 class='gin img-sm' alt='gin'>2023 </p>
          </div>
        </div>
        <div class='line__wrap overflow-hidden line-scroll-4'>
          <div class='line-container d-flex'>
            <p class='welcome line fz-3xl p-0 m-0'>(<img
              src='https://media.giphy.com/media/qNSRPyKLJIzZb0IJnB/giphy.gif'
              class='lemon img-line img-sm' alt='lemon'>)=><span v-on:click='toggleModale'
                                                                 class='customFont enjoy'>ENJOY</span>&lt;=(<img
              src='https://media.giphy.com/media/MAms0vmRszwHe/giphy.gif'
              class='strawberry img-sm' alt='strawberry'>)</p>
            <p class='welcome line fz-3xl p-0 m-0'>(<img
              src='https://media.giphy.com/media/qNSRPyKLJIzZb0IJnB/giphy.gif'
              class='lemon img-line img-sm' alt='lemon'>)=><span v-on:click='toggleModale'
                                                                 class='customFont enjoy'>ENJOY</span>&lt;=(<img
              src='https://media.giphy.com/media/MAms0vmRszwHe/giphy.gif'
              class='strawberry img-sm' alt='strawberry'>)</p>
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
        <p class='text-congrat p-0 m-0'> Can you find the Easter ? 🥚🌟 </p>
      </div>
    </section>
    <div id='beerwah' class='beerwah d-flex justify-content-center '>
      <img class='beerwah-img  img-scroll-2' src='~/assets/images/beerwah3.jpg' alt='beerwah'>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'index',
  data() {
    return {
      revele: false
    }
  },
  mounted() {
    this.startAnimation()
  },
  methods: {
    startAnimation() {
      const line = document.querySelectorAll('.line')
      const rock = document.querySelector('.rock')
      const welcome = document.querySelector('.welcome-home')
      let enjoy = document.querySelector('.enjoy')
      let mouseCursor = document.querySelector('.cursor')
      let windowSize = screen.width
      const revealXs = document.querySelectorAll('.xs-reveal')
      const body = document.body


      setTimeout(function() {
        welcome.style.visibility = 'visible'
        welcome.style.opacity = '1'

      }.bind(this), 500)

      if (windowSize <= 768) {
        body.style.height = 1000 + 'px'
      }
      setTimeout(function() {
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
      }.bind(this), 500)

      if (windowSize > 768) {

        gsap.timeline(100)
          .from(line, {
            duration: 2,
            yPercent: 200,
            ease: 'power4'
          })

        gsap.to(
          '.line-scroll-1', {
            x: -350,
            scrollTrigger: {
              trigger: '.welcome-home',
              start: 'top top',
              end: '+=50%',
              scrub: true
            }
          }
        )

        gsap.to(
          '.line-scroll-2', {
            x: 350,
            scrollTrigger: {
              trigger: '.welcome-home',
              start: 'top top',
              end: '+=50%',
              scrub: true
            }
          }
        )

        gsap.to(
          '.line-scroll-3', {
            x: -100,
            scrollTrigger: {
              trigger: '.welcome-home',
              start: 'top top',
              end: '+=50%',
              scrub: true
            }
          }
        )

        gsap.to(
          '.line-scroll-4', {
            x: 100,
            scrollTrigger: {
              trigger: '.welcome-home',
              start: 'top top',
              end: '+=50%',
              scrub: true
            }
          }
        )

        gsap.to(
          '.drawing-monkey', {
            x: -60,
            y: -30,
            scrollTrigger: {
              trigger: '.container2',
              start: 'center center',
              end: '+=50%',
              scrub: true
            }
          }
        )

        gsap.to(
          '.drawing-moon', {
            x: 80,
            rotation: -10,
            scrollTrigger: {
              trigger: '.container2',
              start: 'center center',
              end: '+=50%',
              scrub: true
            }
          }
        )

        gsap.to(
          '.drawing-plant', {
            x: -50,
            rotation: 40,
            scrollTrigger: {
              trigger: '.container2',
              start: 'center center',
              end: '+=50%',
              scrub: true
            }
          }
        )

        gsap.to(
          '.drawing-crow', {
            y: -30,
            x: 60,
            scrollTrigger: {
              trigger: '.container2',
              start: 'center center',
              end: '+=50%',
              scrub: true
            }
          }
        )

        gsap.to(
          '.img-scroll-2', {
            scaleX: 1.5,
            scaleY: 1.5,
            scrollTrigger: {
              trigger: '.beerwah',
              start: 'center center',
              end: '+=100',
              scrub: true,
              pin: true
            }
          }
        )

      } else {
        revealXs.forEach(text => text.style.opacity = '1')
      }
      enjoy.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
      })
      enjoy.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
      })
    }
    , toggleModale: function() {
      const timer = document.querySelector('#timer')
      const tr = document.querySelector('.gameline')
      const allTd = document.querySelectorAll('td')
      this.revele = !this.revele
      if (tr) {
        timer.textContent = '00:00'
        let clone = timer.cloneNode(true)
        timer.parentNode.replaceChild(clone, timer)
        allTd.forEach(td => {
          tr.removeChild(td)
        })
      }
    }
  }
}
</script>

<style scoped>

.welcome-home {
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s ease-in;
}

@media only screen and (max-width: 768.5px) {

  .fz-3xl {
    font-size: 24.985507246vw;
  }

  .beerwah {
    height: 60vh;
  }

  .beerwah-img {
    margin-top: 10vh;
    width: 90% !important;
    height: 60% !important;
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
  transform: translateX(-3.19392vw) translateY(1.8653vw) rotate(
    11.4377deg
  );
}

.moon {
  transform: translateX(0vw) translateY(3.19392vw) rotate(
    35.38783deg
  );
}

.enjoy {
  cursor: pointer;
}


.justify-content-center {
  justify-content: center;
}

.beerwah-img {
  pointer-events: all;
  width: 75%;
  height: 95%;
}

.beerwah {
  margin-top: 5%;
}

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

section {
  display: block;
}

</style>
