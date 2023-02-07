<template>
  <div>
    <div class="navbar navigation">
      <nav>
        <ul>
          <li>
            <nuxt-link class="navbar-link" to="/">Accueil</nuxt-link>
          </li>
          <li>
            <nuxt-link class="navbar-link" to="/projet">Projets web</nuxt-link>
          </li>
          <li>
            <nuxt-link class="navbar-link" to="/photo">Galerie photo</nuxt-link>
          </li>
          <li>
            <nuxt-link class="navbar-link" to="/about">A propos de moi</nuxt-link>
          </li>
        </ul>
      </nav>
      <button type="button" aria-label="Switch appearance"
              class="navigation-button  js-navigation-button" v-on:click="setBackground"></button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap"


export default {
  Name: "Navbar",

  mounted: function() {
    this.setBackground()
  },

  methods: {
    setBackground: function() {

      const button = document.querySelector(".navigation-button")
      const body = document.querySelector("body")

      if (document.body.style.backgroundColor === "rgb(21, 20, 20)") {
        gsap.to(body, { backgroundColor: "rgba(238,115,26,0.63)", duration: 0.25, color : "" })
        gsap.to(button, { backgroundColor: "#151414", duration: 0.1 })

      }
    else {
        gsap.to(body, { backgroundColor: "#151414", duration: 0.5,   })
        gsap.to(button, { backgroundColor: "rgba(238,115,26,0.63)", duration: 0.1,  })
      }
    }
  }
}


</script>
<style>
.navigation {
  display: flex;
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
    left: 65%;
    top: 50px;
    z-index: 3;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #202020;
    border: 0 transparent;
  }
}

@media only screen and  (min-width: 768.5px) {
  .navigation-button {
    position: unset;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #202020;
    border: 0 transparent;
    margin: 18px 5px 18px 5px;
  }

  .navbar {
    position: relative;
    width: 100%;
    padding: 1rem 1rem 1rem;
    margin-bottom: 5rem;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    z-index: 4;
    grid-column: 6/10;
  }

  .navbar ul {
    display: flex;
    justify-content: flex-end;
  }


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
  background-color: #74746e;
  transform: scaleX(0);
  font-weight: bold;
  transition: all 0.3s ease-in-out;

}

a.navbar-link:hover:before {
  visibility: visible;
  transform: scaleX(1);
  color: #74746e;
}


</style>
