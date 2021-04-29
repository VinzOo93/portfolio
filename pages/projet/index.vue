<template>
  <div>
    <div class='transition'></div>
    <div class='projets'>
      <article class='case p-0 m-0 f-100 b-0'>
        <div class='separator p-0 m-0 f-100 b-0'>
          <span class='separator__year'>2020</span>
          <span class='separator__line line-1'></span>
        </div>
        <div class='card container p-0 m-0 f-100 b-0'>
          <h2 class='name'>Comparateur</h2>
          <h3 class='text'>Création, intégration et déploiement d’un comparateur de produits responsive en AJAX sous
            PHP Symfony.
          </h3>

          <p class='text'>Technologies utilisées : PHP Symfony, Javascript, Bootstrap, Twig, MySQL, Doctrine,
            Apache. </p>
          <a class='button-to-website' href='https://www.economiser-mon-argent.com/' target='_blank'>Voir le site</a>
          <div class='img-project '>
            <img src='~/assets/projects/comparateur-1.png' class='img-projets comparateur-1 size-1' alt='comparateur-1'>
            <img src='~/assets/projects/comparateur-2.png' class='img-projets comparateur-2 size-2' alt='comparateur-2'>
          </div>
        </div>
      </article>
      <article class='case p-0 m-0 f-100 b-0'>
        <div class='separator p-0 m-0 f-100 b-0'>
          <span class='separator__year'>2020</span>
          <span class='separator__line line-1'></span>
        </div>
        <div class='card container p-0 m-0 f-100 b-0'>
          <h2 class='name'>Portfolio V1</h2>
          <h3 class='text'>
          </h3>
          <h3 class='text'> Premier portfolio présantant mon CV pour travailler le HTML/CSS et Javascript
          </h3>

          <p class='text'>Technologies utilisées : HTML/CSS, Javascript, bootstrap, déploiement sous fileZila
            Apache. </p>
          <a class='button-to-website' href='https://www.vincent-orru.link/' target='_blank'>Voir le site</a>
          <div class='img-project '>
            <img src='~/assets/projects/resume-1.png' class='img-projets comparateur-1 size-1' alt='comparateur-1'>
            <img src='~/assets/projects/resume-2.png' class='img-projets comparateur-2 size-2' alt='comparateur-2'>
          </div>
        </div>
      </article>
    </div>

  </div>

</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted: function() {
    this.startAnimation()
  },
  methods: {
    startAnimation: function() {
      const transition = document.querySelector('.transition')
      const projets = document.querySelector('.projets')
      const line = document.querySelectorAll('.line-1')
      gsap.timeline(100)
        .fromTo(transition, {
          opacity: 1,
          y: '100%',
          duration: 3
        }, {
          y: '-100%',
          duration: 2.5
        })
        .fromTo(projets, { opacity: 0, y: '100%' }, {
          opacity: 1,
          y: "0%",
          ease: 'power1',
          duration: 3
        })
      .from(line, {
        scaleX: 0,
        transformOrigin: "left"
      });
    }
  }
}
</script>

<style scoped>

* {
  display: block;
  box-sizing: border-box;
}

article {
  vertical-align: baseline;
}

.case {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 12.5rem 0;
}

.separator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

}

.separator__year {
  font-size: 1.6rem;
  line-height: 1;
  margin-right: 1rem;
}

.separator__line {
  display: block;
  height: 1px;
  width: 100%;
  background: #504e4c;
}


.column {
  width: 100%;
}

.name {
  font-family: "Helvetica", serif;
  font-size: 6.5rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-left: -1rem;
  margin-bottom: 5rem;
}

.text {
  width: 60%;
  font-size: 16px;
}

a.button-to-website {
  font-weight: bold;
  font-size: 16px;
  color: #504e4c;
  text-align: center;
  border-radius: 40px;
  border: solid 2px #504e4c;
  margin: 5px 5px 5px 5px;
  display: block;
  padding: 10px;
  width: 100px;
  line-height: 10px;
  background-color: transparent;
}

.button-to-website:hover {
  background-color: #504e4c;
  color: white;
}

.img-project {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 25%;
  left: 55%;
  right: 0;
  height: auto;
  width: 25%;
  z-index: -1;
}

.card.container {
  padding-right: 50px;
  padding-left: 50px;
}

.size-2 {
  transform: translateX(2.19392vw) translateY(-0.90628vw) rotate(
    21.38783deg
  );
  height: auto;
  width: 55%;
  border: 1px solid #504e4c;
  margin-left: 20px;
}

.size-1 {
  transform: translateX(2.19392vw) translateY(-0.90628vw) rotate(
    -21.38783deg
  );
  height: auto;
  width: 75%;
  border: 1px solid #504e4c;
}


.p-0 {
  padding: 0 0 0 0;
}

.m-0 {
  margin: 0 0 0 0;
}

.b-0 {
  border: 0;
}

.f-100 {
  font-size: 100%;
}

</style>
