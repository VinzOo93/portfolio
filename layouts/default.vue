<template>
  <div>
    <div class='cursor'></div>
    <div class='header'>
      <div class='navbar-container'>
        <Navbar />
      </div>
    </div>
    <nuxt />
  </div>
</template>
<style>

  .navbar-container {
    width: 100%;
    margin:  0 35% ;
    z-index: 2;
    position: fixed;
    white-space: nowrap
  }

  .header {
    padding: 4%;
  }


* {
  font-family: 'Cormorant Garamond', serif;
  text-decoration: none;
  color: #504e4c;
  box-sizing: border-box;
}


.cursor {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.1s ease;
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
  transition: transform 1s ease;
}

.medium-zoom-overlay {
  background-color:#202020 !important;
  z-index: 1;
}
</style>
<script>
import { gsap, Power1 } from 'gsap'

export default {
  beforeMount: function() {
    this.beforeMount()
  },

  methods: {
    beforeMount() {
      window.addEventListener('mousemove', cursor)
      let mouseCursor = document.querySelector('.cursor')
      let navBar = document.querySelectorAll('.navbar')
      let navBarli = document.querySelectorAll('.navbar a')
      let gallery = document.querySelectorAll('.gallery img')
      function cursor(e) {

        mouseCursor.style.top = e.pageY + 'px'
        mouseCursor.style.left = e.pageX + 'px'
      }
      navBar.forEach(link => {
        link.addEventListener('mouseleave', () => {
          let windowSize = window.innerWidth;
          let scroll = window.scrollY
          if (scene != null && windowSize >= 768) {
            gsap.to(navBarli,{opacity: 0, duration: 0.2, pointerEvents: 'none'} )
          }
          if (scroll === 0){
            gsap.to(navBarli,{opacity: 1, duration: 0.2, pointerEvents: 'auto'})
          }
          mouseCursor.classList.remove('link-grow')
        });
        link.addEventListener('mouseover', () => {
          gsap.to(navBarli,{opacity: 1, duration: 0.2, pointerEvents: 'auto'} )
          mouseCursor.classList.add('link-grow')
        });
      });
      gallery.forEach(img => {
        img.addEventListener('mouseleave', () => {
          mouseCursor.classList.remove('overImage')
        });
        img.addEventListener('mouseover', () => {
          mouseCursor.classList.add('overImage')
        })
      });
      const scene = this.$scrollmagic.scene({
        offset: 30
      })
      .setTween(navBarli, 0.2 ,{opacity: 0, pointerEvents: "none"})
      this.$scrollmagic.addScene(scene)
    }
  }
}
</script>
