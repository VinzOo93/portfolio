<template>
  <div>
    <div class='navbar navigation'>
      <nav>
        <ul>
          <li>
            <nuxt-link class='navbar-link' to='/'>Acceuil</nuxt-link>
          </li>
          <li>
            <nuxt-link class='navbar-link' to='/projet'>Projets Web</nuxt-link>
          </li>
          <li>
            <nuxt-link class='navbar-link' to='/photo'>Galerie photo</nuxt-link>
          </li>
          <li>
            <nuxt-link class='navbar-link' to='/about'>A propos de moi</nuxt-link>
          </li>
        </ul>
      </nav>
        <button type='button' aria-label='Switch appearance'
                class='navigation-button  js-navigation-button'></button>
    </div>
  </div>
</template>

<script>
import { gsap, Power1 } from 'gsap'


export default {
  Name: 'Navbar',

  mounted: function() {
    this.setBackground()
  },

  methods: {
    setBackground: function() {

      const button = document.querySelector('.navigation-button')
      const body = document.querySelector('body')

      backgroundDark()

      function backgroundDark() {
        button.addEventListener('click', () => {
          gsap.to(body, {backgroundColor: '#151414', duration: 0.5})
          gsap.to(button, {backgroundColor: 'white', duration: 0.2})
          button.addEventListener('click', () => {
            gsap.to(body, {backgroundColor: 'white', duration: 0.5})
            gsap.to(button, {backgroundColor: '#151414', duration: 0.2})
            backgroundDark()
          })
        })
      }
    }
  }
}


</script>
<style>
.navigation {
  display: flex;
}

body.isDark {
  background-color: #151414;
  transition: background-color 0.5s ease-in-out;

}

</style>
<style scoped>
@media only screen and  (max-width: 768px) {
  .navbar {
    display: table-row;
    text-align: justify !important;
  }
  .navbar ul {
  display: flow-root;
  }
  .navigation-button {
    position: fixed;
    margin-left: 65%;
    margin-right: 35%;
    top: 30px;
    z-index: 3;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #202020;
    border: 0 transparent;
  }
}

@media only screen and  (min-width: 768px) {
  .navigation-button {
    position: unset;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #202020;
    border: 0 transparent;
    margin: 20px 1px 20px 5px;
  }
  .navbar {
    position: relative;
    width: 100%;
    padding: 2rem 3rem;
    margin-bottom: 3rem;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    z-index: 2;
    grid-column: 6/10;
  }

 .navbar ul {
    display: flex;
    justify-content: flex-end;
  }


}

.navigation-button.isDark2 {
  background-color: white;
  transition: background-color 0.5s ease-in-out;
}
.navbar li {
  position: relative;
  list-style: none;
  margin-right: 10px;
}
button {
  font: inherit;
  border-radius: 0;
  outline: 0;
  box-shadow: none;
  vertical-align: baseline;
  border: 0;
}
button {
  padding: 0;
  cursor: pointer;
  vertical-align: baseline;
  border: 0;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
}




a.navbar-link {
  position: relative;
}

a.navbar-link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -1px;
  left: 0;
  background-color: black;
  transform: scaleX(0);
  font-weight: bold;
  transition: all 0.3s ease-in-out;

}

a.navbar-link:hover:before {
  visibility: visible;
  transform: scaleX(1);
  color: black;
}


</style>
