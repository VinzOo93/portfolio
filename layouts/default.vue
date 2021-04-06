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

.navbar-container {
  z-index: 2;
  margin-left: 47%;
  position: fixed;
  white-space: nowrap
}

.header {
  padding: 2%;
}


.medium-zoom-overlay {
  background-color:#202020 !important;
  z-index: 1;
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
      let gallery = document.querySelectorAll('.gallery img')
      function cursor(e) {

        mouseCursor.style.top = e.pageY + 'px'
        mouseCursor.style.left = e.pageX + 'px'
      }

      navBar.forEach(link => {
        link.addEventListener('mouseleave', () => {
          mouseCursor.classList.remove('link-grow')
        });
        link.addEventListener('mouseover', () => {
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
    }
  }
}
</script>
