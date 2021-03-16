<template>

  <div class='galery'>
    <div class='album-header-sticky'>
      <div class='container'>
        <div class='content'>
          <h1 class='heading is-large album-header-heading js-heading'>

            <div>Tasmania</div>

            <div> Four Mile Creek</div>

          </h1>

          <h3> Ces images ont été capturée vers la fin de mon aventure en Tasmanie. Cette île au sud de l'Australie est
            l'un des endroits où le ciel est l'un des plus clair au monde. Gràce à sa position géographique
            particulière, nous pouvons y admirer occasionellement la lueur orangée des aurores australes.</h3>
          <h3> Pour l'oeil le plus averti, vous pouvez observer des lignes dans le ciel qui sont des météorites en
            chute.</h3>

          <img class='cover2 js-img' alt='second-image' src='~/assets/images/5.JPG'>
          <img class='cover2 js-img' alt='second-image' src='~/assets/images/17.JPG'>

        </div>
      </div>
      <div class='container'>
        <img class='cover js-img' alt='first-image' src='~/assets/images/aurora.jpg'>
      </div>
      <div class='container'>

        <img class='cover3 js-img' alt='second-image' src='~/assets/images/1.JPG'>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}


.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0;
  align-items: start;
  position: relative;
  margin-top: 50px;
}

@media only screen and  (min-width: 768px) {
  .cover:first-child {
    grid-column: 2/8;
    z-index: 1;
    max-width: 95%;
  }

  .cover2 {
    padding-top: 25px;
    grid-column: 2/8;
    z-index: 1;
    max-width: 100%;
  }

  .content {
    grid-column: 8/12;
    position: absolute;
    width: 100%;
  }

  .cover3 {
    grid-column: 4/12;
    z-index: 1;
    max-width: 100%;
  }

}

.cover3 {
  position: relative;
  top: 30px;
}


</style>
