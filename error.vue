<template>
  <div>
    <div class='title'>
      <h1 v-if="error.statusCode === 404">Oups !</h1>
      <h1 v-else>Une erreur est survenue</h1>
      <h2>La page que vous recherchez n'éxiste pas</h2>
      <img src='https://media.giphy.com/media/tNC2rod1uTrdC/giphy.gif' alt='bender'>
    </div>
    <NuxtLink to="/">Page d'accueil</NuxtLink>
  </div>
</template>
<style scoped>
* {
  text-align: center;
}
</style>
<script>
export default {
  props: ['error'],
  layout: 'error' // nous pouvons definir un layout personnalisé pour la page erreur
}
</script>

