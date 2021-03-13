<template>
  <header>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap" rel="stylesheet">
    <div class='navbar'>
      <nav>
        <ul>
          <li><nuxt-link class='navbar-link' to="/">Acceuil</nuxt-link> </li>
          <li><nuxt-link class='navbar-link' to="/projet">Projets Web</nuxt-link></li>
          <li><nuxt-link class='navbar-link' to="/photo">Galerie photo</nuxt-link></li>
          <li><nuxt-link class='navbar-link' to="/about">A propos de moi</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  Name: 'Header'
}
</script>

<style scoped>

.navbar {
  padding: 2rem 3rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}

ul {
  display: flex;
  justify-content: flex-end;
}

li{
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
