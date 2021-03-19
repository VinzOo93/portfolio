<template>
  <div>
    <div class='cursor'></div>
    <Navbar />
    <nuxt />
  </div>
</template>
<style>

* {
  font-family: 'Cormorant Garamond', serif;
  text-decoration: none;
  color: #504e4c;
  box-sizing: border-box;
}

body {
  margin: 0;
  width: 100vw;
  line-height: 1.5;
  text-rendering: optimizeSpeed;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  scroll-behavior: smooth;
  overscroll-behavior-y: none;
  overflow-y: scroll;
  overflow-x: hidden;
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
  z-index: 2;
  backdrop-filter: brightness(85%);

}

.link-grow {
  transform: scale(2);
  transition: transform 1s ease;
}

</style>
<script>

export default {

  beforeMount: function() {
    this.beforeMount()
  },

  methods: {
    beforeMount() {
      window.addEventListener('mousemove', cursor)
      let mouseCursor = document.querySelector('.cursor')
      let navBar = document.querySelectorAll('.navbar li')

      function cursor(e) {

        mouseCursor.style.top = e.pageY + 'px'
        mouseCursor.style.left = e.pageX + 'px'
      }

      navBar.forEach(link => {
        link.addEventListener('mouseleave', () => {
          mouseCursor.classList.remove('link-grow')
        })
        link.addEventListener('mouseover', () => {
          mouseCursor.classList.add('link-grow')
        })
      })
    }
  }
}
</script>
