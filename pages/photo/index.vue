<template>

  <div class='galery'>
    <div class='album-header-sticky'>
      <div class='container'>
        <div class='content'>
          <img class='cover2 js-img' alt='second-image' src='~/assets/images/5.JPG'>
          <img class='cover2 js-img' alt='second-image' src='~/assets/images/17.JPG'>
          <img class='cover2 js-img' alt='second-image' src='~/assets/images/1.JPG'>
        </div>
      </div>
      <div class='container'>
        <div class='cover text-content'>
          <p class='description'> Ces images ont été capturées vers la fin de mon aventure en Tasmanie. Cette île au sud de l'Australie
            est l'un des endroits où le ciel est l'un des plus clair au monde.<br><br> Grâce à sa position géographique
            particulière, nous pouvons y admirer occasionellement la lueur orangée  provenant d'aurores australes.</p>
        </div>
        <img class='cover js-img' alt='first-image' src='~/assets/images/aurora.jpg'>

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
  width: 100%;

}

@media only screen and  (max-width: 768px) {

  .container {
    display: block;
    align-items: center;
    position: relative;
  }

  .cover {
    margin: 15px 15px 15px 15px;
    z-index: 1;
    max-width: 90%;

  }

  .cover2 {
    margin: 20px 20px 20px 20px;
    z-index: 1;
    max-width: 90%;
  }

  .content {
    position: relative;
    width: 100%;
  }
}

  @media only screen and  (min-width: 768px) {

    .container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 0;
      align-items: start;
      grid-column: 6/8;
      position: absolute;
      width: 100%;
    }

    .cover {
      grid-column: 2/7;
      z-index: 1;
      max-width: 95%;
    }

    .cover2 {
      margin: 40px 10px 10px 20px;
      grid-column: 2/8;
      z-index: 1;
      max-width: 100%;
    }

    .content {
      grid-column: 7/12;
      position: absolute;
      width: 100%;
    }

}

.text-content {
  display: flex;
  max-width: 100%;
}
.description {
  font-size: 27px;
}

</style>
