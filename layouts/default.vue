<template>
  <div>
    <Head>
      <Title>Vincent ORRU : Portfolio</Title>
      <Meta name='description' content='Vincent ORRU - Développeur Web - Découvrir mes réalisations' />
    </Head>
    <Cookie />
    <div class='cursor'></div>
    <div class='header'>
      <div class='navbar-container'>
        <Navbar v-bind:openCartModal="openCartModal" v-bind:reveleModalCart='reveleModalCart' />
      </div>
      <Cart v-bind:openCartModal='openCartModal' v-bind:reveleModalCart='reveleModalCart'/>
    </div>
    <slot />
  </div>
</template>

<style>


@media only screen and  (min-width: 768.5px) {
  .navbar-container {
    width: 100%;
    z-index: 2;
    position: fixed;
    left: 40%;
    white-space: nowrap
  }
}

@media only screen and (max-width: 768.5px) {
  .cursor {
    visibility: hidden;
  }
}

body {
  background-color: rgba(238, 115, 26, 0.63);
}

.header {
  padding: 4%;
}


* {
  font-family: "MontSerrat", serif;
  text-decoration: none;
  color: #74746e;
  box-sizing: border-box;
  font-stretch: normal;
}


.cursor {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: transform 1s ease-out,
  top 0.1s, left 0.1s;;
  pointer-events: none;
  transform-origin: 100% 100%;
  z-index: 4;
  backdrop-filter: brightness(85%);

}

.link-grow {
  transform: scale(2);
  transition: transform 1s ease;

}

.overImage {
  backdrop-filter: brightness(45%);
  transform: translate(100%, 100%) scale(4);
  transition: transform 1.5s ease-out;
}

.medium-zoom-overlay {
  background-color: #202020 !important;
  z-index: 1;
  pointer-events: none;
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
  background-color: rgb(206, 195, 170);
  z-index: 3;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  }
</style>
<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export default {
  props: ["openCartModal", "reveleModalCart"],
  setup() {
    const reveleModalCart = ref(false);

    function defaultAction() {
      window.addEventListener('mousemove', cursor)
      let mouseCursor = document.querySelector('.cursor');
      let navBar = document.querySelectorAll('.navbar');
      let navBarli = document.querySelectorAll('.navbar a');
      const windowSize = window.innerWidth;

      function cursor(e) {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
      }

      navBar.forEach(link => {
        link.addEventListener('mouseleave', () => {
          let scroll = window.scrollY;
          if (windowSize > 768) {
            gsap.to(navBarli, { opacity: 0, duration: 0.2, pointerEvents: 'none' });
          }
          if (scroll === 0) {
            gsap.to(navBarli, { opacity: 1, duration: 0.2, pointerEvents: 'auto' });
          }
          mouseCursor.classList.remove('link-grow')
        })
        link.addEventListener('mouseover', () => {
          gsap.to(navBarli, { opacity: 1, duration: 0.2, pointerEvents: 'auto' });
          mouseCursor.classList.add('link-grow');
        })
      })
      if (windowSize > 768) {
        gsap.to(
          navBarli, {
            opacity: 0,
            pointerEvents: 'none',
            scrollTrigger: {
              trigger: '.container',
              start: 'top 5%',
              toggleActions: 'restart',
              scrub: true
            }
          });
      }
    }
    const openCartModal = () => {
      reveleModalCart.value = !reveleModalCart.value;
    }

    onMounted(() => {
      defaultAction()
    })
    return {
        reveleModalCart,
        openCartModal
      }
  }
}
</script>
