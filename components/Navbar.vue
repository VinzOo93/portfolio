<template>
  <div>
    <div class='navbar'>
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
          <li>
            <button type='button' aria-label='Switch appearance'
                    class='navigation-button js-navigation-button'></button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
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
          body.classList.add('isDark')
          button.classList.add('isDark2')
          button.addEventListener('click', () => {
            body.classList.remove('isDark')
            button.classList.remove('isDark2')
            backgroundDark()
          })
        })
      }
    }
  }
}


</script>
<style>


body.isDark {
  background-color: #151414;
  transition: background-color 0.5s ease-in-out;

}

</style>
<style scoped>


.navigation-button.isDark2 {
  background-color: white;
  transition: background-color 0.5s ease-in-out;
}

button {
  font: inherit;
  border-radius: 0;
  outline: 0;
  box-shadow: none;
  vertical-align: baseline;
  border: 0;
}

.navigation-button {
  position: unset;
  width: .633vw;
  height: .833vw;
  border-radius: 50%;
  background-color: #202020;
  border: 0 transparent;
}

.navigation-button {
  position: unset;
  width: .833vw;
  height: .833vw;
  border-radius: 50%;
  background-color: #202020;
  border: 0 transparent;
}


.navbar {
  position: relative;
  padding: 2rem 3rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  z-index: 2;
}

ul {
  display: flex;
  justify-content: flex-end;
}

.navbar li {
  position: relative;
  list-style: none;
  margin-right: 25px;
}

a.navbar-link {
  position: relative;
}

a.navbar-link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
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
