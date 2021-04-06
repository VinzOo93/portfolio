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
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  Name: 'Navbar',
}



</script>

<style scoped>

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

li {
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
