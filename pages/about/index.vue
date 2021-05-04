<template>
  <div>
    <div class='transition'></div>
    <div class='about'>
      <div class='container'>
        <div class='content'>
          <img class='cover2 js-transition vincent' alt='vincent' src='~/assets/about/vincent.jpg'>
          <h1 class='title'> Vincent ORRU - Développeur Web</h1>
          <div class='contact'>
            <a class='btn button-to-website' href='https://github.com/VinzOo93' target='_blank'>🐙 Github</a>
            <a class='btn btn-linked button-to-website'
               href='https://www.linkedin.com/in/vincent-orru-b7a53b120/?originalSubdomain=fr' target='_blank'><img
              src='~/assets/about/linked.png' width='12.5' height='12.5' alt='linkedin'> Linkedin</a>
            <a class='btn button-to-website' href='mailto:v.orru@live.fr'>📤 Email</a>
          </div>
          <div class='technos'>
            <img class='html' height='50px' src='~/assets/about/html.png' alt='html'>
            <img class='css' height='50px' src='~/assets/about/css.png' alt='css'>
            <img class='javascript' height='50px' src='~/assets/about/javascript.png' alt='javacript'>
            <img class='nuxtJs' height='50px' src='~/assets/about/NuxtJS.png' alt='nuxtJs'>
            <img class='symfony' height='50px' src='~/assets/about/symfony.png' alt='symfony'>

          </div>
        </div>
      </div>
      <div class='container'>
          <p class='description scroll cover'>
            J'ai eu l'opportunité d'avoir plusieurs expériences professionnelles significatives de terrain au
            sein d'acteurs majeurs dans le secteur de la banque, du recrutement et du multimédia.

            <br><br> De plus, ayant l'esprit voyageur et ouvert. J'ai pris plusieurs fois l'initiative de sortir de ma
            zone
            de confort. Dans le but de découvrir de nouvelles cultures et personnalités, comme lors de mon année de WHV
            en
            Australie et lors de mon expérience dans l'aviation commerciale.

            Je suis aussi passionné de photographie de cuisine et de nouvelles technologies, j'ai toujours aimé
            apprendre
            par moi-même, ainsi que m'adapter pour étendre ma créativité et relever des défis.

            C'est pour cela que j'ai décidé d'entreprendre une formation à l'Eni pour m'orienter vers le métier de
            développeur Web & Web mobile. En effet, selon moi, c'est un métier rigoureux où il faut constamment
            s'informer
            et se remettre en question pour évoluer et cela est tout à fait ce que je recherche.

            <br><br> Durant mon stage, j'ai aussi réalisé qu'avoir des compétences relationnelles et commerciales sont
            vraiment des atouts non négligeables pour échanger en équipe et mener à bien le projet.

            <br><br> D'autre part, je peux intervenir autant dans des projets fronts ou backs, mes langages de
            prédilections sont le PHP et le Javascript.

            <br><br> J'affectionne tout particulièrement l'intégration de contenu HTML/CSS Sass.

            <br><br> De ce fait que j'aime par-dessus tout, m'inforner sur les tendances pour rendre mes projets
            différents.
            Je mets en valeur l'expérience client qui est pour moi l'un des fondements pour se démarquer.

            <br><br> Maintenant, mon objectif principal est de continuer mon évolution dans le métier en intégrant une
            équipe ouverte et dynamique afin de réaliser des projets de plus grande envergure en alternance avec
            OpenClassrooms.
          </p>
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
      const content = document.querySelector('.content')
      const about = document.querySelector('.description')
      const button = document.querySelectorAll('.btn')
      const mouseCursor = document.querySelector('.cursor')


      gsap.timeline(100)
        .fromTo(transition, { opacity: 1, y: '100%', duration: 3 }, { y: '-100%', duration: 2.5 })
      gsap.timeline(100)
        .fromTo(content, { opacity: 0, yPercent: 100 }, {
          opacity: 1,
          yPercent: 0,
          ease: 'power1',
          duration: 5
        })
      gsap.timeline(100)
        .fromTo(about, { opacity: 0, yPercent: 100 }, {
          opacity: 1,
          yPercent: 0,
          ease: 'power1',
          duration: 3
        })
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
@media only screen and  (max-width: 992px) {
  .container {
    margin-top: 5%;
    display: block;
    align-items: center;
    position: relative;
  }

  .cover {
    margin: 10px;
    z-index: 1;
    max-width: 90%;
  }

  .cover2 {
    margin: 10px;
    z-index: 1;
    max-width: 90%;
  }

  .content {
    position: relative;
    width: 100%;
  }
}

@media only screen and  (min-width: 992.5px) {


  .container {
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: start;
    grid-column: 5/8;
    position: absolute;
    width: 100%;
  }

  .cover2 {
    margin: 10px;
    grid-column: 1/9;
    max-width: 90%;
  }

  .cover {
    position: absolute;
    z-index: 2;
    margin: 10px;
    grid-column: 2/7;
    max-width: 80%;
  }

  .content {
    grid-column: 7/12;
    position: absolute;
    width: 100%;
  }

  .description {
    font-size: 22px;
  }
}

.title {
  text-align: center;
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

.technos {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}

.contact {
  display: flex;
  justify-content: space-evenly;
}


</style>
