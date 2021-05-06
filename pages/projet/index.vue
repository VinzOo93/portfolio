<template>
  <div>
    <div class='transition '></div>
    <div class=' smooth-scroll-wrapper '>
      <div class='projets'>
        <article id='article-4'  class='case  p-0 m-0 f-100 b-0'>
          <div class='separator p-0 m-0 f-100 b-0'>
            <span class='separator__year'>2021</span>
            <span class='separator__line line-1'></span>
          </div>
          <div class='card container p-0 m-0 f-100 b-0'>
            <div class='scroll-card'>
              <div class='text-content-xs'>
                <h2 class='name'>Portfolio V2</h2>
                <h3 class='text'>
                </h3>
                <h3 class='text'> Deuxième version de mon portfolio comprenant un nouveau design, une galerie photo, la
                  gestion de la couleur du thème, plusieurs animations originales.
                </h3>
                <p class='text'>Technologies utilisées : HTML/CSS Sass, Javascript, GSAP, ScrollMagic, MediumZoom,
                  Déploiement sous Eroku</p>
<!--                <a class='button-to-website' href='https://www.vincent-orru.link/' target='_blank'>Voir le site</a> -->
              </div>
            </div>
            <div class='img-project '>
              <img src='~/assets/projects/portfolioV2-1.png' class='img-projets portfolioV2-1 size-1'
                   alt='portfolioV2-1'>
              <img src='~/assets/projects/portfolioV2-2.png' class='img-projets portfolioV2-2 size-2'
                   alt='portfolioV2-2'>
            </div>
          </div>
        </article>
        <article id='article-3' class='case  p-0 m-0 f-100 b-0'>
          <div class='separator p-0 m-0 f-100 b-0'>
            <span class='separator__year'>2021</span>
            <span class='separator__line line-1'></span>
          </div>
          <div class='card container p-0 m-0 f-100 b-0'>
            <div class='scroll-card'>
              <div class='text-content-xs'>
                <h2 class='name'>API TMDB</h2>
                <h3 class='text'>
                </h3>
                <h3 class='text'>Création de l'interface graphique, intégration d'une base de données provenant de l'Api
                  The Movie Database, Gestion des CRUD, upload image, possibilité de filtrer les données avec critères
                  de recherches.
                </h3>
                <p class='text'>Technologies utilisées : PHP Symfony, HTML/CSS, Twig ,MySQL, Doctrine, Bootstrap,
                  Apache. </p>
                <a class='button-to-website' href='https://github.com/VinzOo93/gestionDVD' target='_blank'>Git clone</a>
              </div>
            </div>
            <div class='img-project '>
              <img src='~/assets/projects/dvd-1.png' class='img-projets dvd-1 size-1' alt='dvd-1'>
              <img src='~/assets/projects/dvd-2.png' class='img-projets dvd-2 size-1' alt='dvd-2'>
            </div>
          </div>
        </article>
        <article id='article-2' class='case p-0 m-0 f-100 b-0 hidden'>
          <div class='separator p-0 m-0 f-100 b-0'>
            <span class='separator__year'>2020</span>
            <span class='separator__line line-1'></span>
          </div>
          <div class='card container p-0 m-0 f-100 b-0'>
            <div class='scroll-card'>
              <div class='text-content-xs'>
                <h2 class='name'>Comparateur</h2>
                <h3 class='text'>Intégration et déploiement d’un comparateur de produits responsive en AJAX sous
                  PHP Symfony avec accès admin pour la gestion des CRUD.
                </h3>

                <p class='text'>Technologies utilisées : PHP Symfony, Javascript, Bootstrap, Twig, MySQL, Doctrine,
                  Apache. </p>
                <a class='button-to-website' href='https://www.economiser-mon-argent.com/' target='_blank'>Voir le
                  site</a>
              </div>
            </div>
            <div  class='img-project'>
              <img src='~/assets/projects/comparateur-1.png' class='img-projets comparateur-1 size-1'
                   alt='comparateur-1'>
              <img src='~/assets/projects/comparateur-2.png' class='img-projets comparateur-2 size-2'
                   alt='comparateur-2'>
            </div>
          </div>
        </article>
        <article id='article-1' class='case p-0 m-0 f-100 b-0 hidden'>
          <div class='separator p-0 m-0 f-100 b-0'>
            <span class='separator__year'>2020</span>
            <span class='separator__line line-1'></span>
          </div>
          <div class='card container p-0 m-0 f-100 b-0'>
            <div class='scroll-card'>
              <div class='text-content-xs'>
                <h2 class='name'>Portfolio V1</h2>
                <h3 class='text'>
                </h3>
                <h3 class='text'> Premier portfolio présentant mon CV afin de m'éxercer aux fondamentaux du HTML/CSS et
                  Javascript (ceci n'est pas mon CV à jour).
                </h3>

                <p class='text'>Technologies utilisées : HTML/CSS, Javascript, Bootstrap, déploiement avec fileZila</p>
                <a class='button-to-website' href='https://www.vincent-orru.link/' target='_blank'>Voir le site</a>
              </div>
            </div>
            <div class='img-project '>
              <img src='~/assets/projects/resume-1.png' class='img-projets comparateur-1 size-1' alt='resume-1'>
              <img src='~/assets/projects/resume-2.png' class='img-projets comparateur-2 size-2' alt='resume-2'>
            </div>
          </div>
        </article>
      </div>
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
      const button = document.querySelectorAll('.button-to-website')
      const mouseCursor = document.querySelector('.cursor')


      gsap.timeline(100)
        .fromTo(transition, {
          opacity: 1,
          yPercent: 100,
          duration: 2.5
        }, {
          yPercent: -100,
          duration: 2.5
        })
        .fromTo(projets, { opacity: 0, yPercent: 100 }, {
          opacity: 1,
          yPercent: 0,
          ease: 'power1',
          duration: 2
        })
        .from(line, {
          scaleX: 0,
          transformOrigin: 'left'
        })
      const body = document.body
      const scrollWrap = document.getElementsByClassName('smooth-scroll-wrapper')[0]
      const height = scrollWrap.getBoundingClientRect().height - 1
      const cards = document.querySelectorAll('.scroll-card')

      const speed = 0.10

      let offset = 0

      body.style.height = Math.floor(height) + 'px'

      function smoothScroll() {
        offset += (window.pageYOffset - offset) * speed

        scrollWrap.style.transform = 'translateY(-' + offset -1000 + 'px) translate(0)'

        cards.forEach(card => {
          card.style.transform = 'translateY(-' + offset/20 + 'px) translate(0)'
        })

        requestAnimationFrame(smoothScroll)
      }

      smoothScroll()



      const scene = this.$scrollmagic.scene({
        triggerElement: '#article-3',
        triggerHook: 0.5,
      })
        .setTween('.case', { opacity: 1, duration: 0.10 })
      this.$scrollmagic.addScene(scene)

      button.forEach(b => {
        b.addEventListener('mouseover', () => {
          mouseCursor.classList.add('link-grow')

          b.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow')
          })
        })
      })


    }


  }
}
</script>

<style scoped>

@media only screen and  (max-width: 768px) {

  .case {
    margin-top: 30% !important;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;
  }

  .text-content-xs {
    padding-top: 125% !important;
  }

  .name {
    font-size: 34px !important;
    margin-bottom: 0 !important;
  }

  .img-project {
    width: 55vw ;
    top: 15% ;
    left: 7% ;
    height: 40vw !important;
  }

  .text {
    width: 100% !important;
  }

}

@media only screen and  (min-width: 768.5px) {

  .img-project {
    top: 25%;
    left: 55%;
    width: 18%;
  }

}

.img-project {
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
  height: auto;
  z-index: -1;
}


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

.case.hidden {
  opacity: 0;
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
