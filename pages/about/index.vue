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
               href='https://www.linkedin.com/in/vincent-orru-b7a53b120/?originalSubdomain=fr' target='_blank'>
              <img src='~/assets/about/linked.png' width='15' height='15' alt='linkedin'> Linkedin</a>
            <a class='btn button-to-website' href='mailto:v.orru@live.fr'>📤 Email</a>
          </div>
          <div class='technos'>
            <img class='html' height='50px' src='~/assets/about/html.png' alt='html'>
            <img class='css' height='50px' src='~/assets/about/css.png' alt='css'>
            <img class='javascript' height='50px' src='~/assets/about/javascript.png' alt='javacript'>
            <img class='nuxtJs' height='50px' src='~/assets/about/nuxtJS.png' alt='nuxtJs'>
            <img class='symfony' height='50px' src='~/assets/about/symfony.png' alt='symfony'>
          </div>
        </div>
      </div>
      <div class='container'>
        <p class='description scroll cover'>
          Hi there, I'm Vincent... 😃

          <br><br>J'ai eu l'opportunité d'avoir plusieurs expériences professionnelles significatives de terrain au
          sein d'acteurs majeurs dans le secteur de la banque, du recrutement et du multimédia.

          <br><br> De plus, ayant l'esprit voyageur et ouvert. J'ai pris plusieurs fois l'initiative de sortir de ma
          zone
          de confort. Dans le but de découvrir de nouvelles cultures et personnalités, comme lors de mon année de WHV
          en
          Australie.

          <br><br> Je suis aussi passionné de photographie de cuisine et de nouvelles technologies.

          <br><br> J'aime apprendre par moi-même, ainsi que m'adapter pour étendre mes compétences et ma créativité pour
          relever des défis.

          <br><br> J'apprécie tout particulièrement m'inspirer des nouvelles tendances pour rendre mes projets
          différents afin d'améliorer au maximum l'expérience client.

          <br><br>je peux intervenir autant dans des projets fronts ou backs, contactez moi directement pour en savoir
          plus

        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  setup() {
    function startAnimation() {
      const transition = document.querySelector('.transition');
      const content = document.querySelector('.content');
      const about = document.querySelector('.description');
      const button = document.querySelectorAll('.btn');
      const mouseCursor = document.querySelector('.cursor');
      let windowSize = screen.width;
      const body = document.body;
      if (windowSize <= 768) {
        body.style.height = 1000 + 'px';
      }
      gsap.timeline(100)
        .fromTo(transition, { opacity: 1, y: '100%', duration: 3 }, { y: '-100%', duration: 2.5 });
      gsap.timeline(100)
        .fromTo(content, { opacity: 0, yPercent: 100 }, {
          opacity: 1,
          yPercent: 0,
          ease: 'power1',
          duration: 5
        });
      gsap.timeline(100)
        .fromTo(about, { opacity: 0, yPercent: 100 }, {
          opacity: 1,
          yPercent: 0,
          ease: 'power1',
          duration: 3
        });
      button.forEach(b => {
        b.addEventListener('mouseover', () => {
          mouseCursor.classList.add('link-grow');

          b.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow');
          });
        });
      });
    }

    onMounted(() => {
      startAnimation()
    })
  }
}
</script>

<style scoped>
@media only screen and  (max-width: 992px) {

  body {
    height: 1000px;
  }

  .container {
    margin-top: 5%;
    display: block;
    align-items: center;
    position: relative;
  }

  .cover {
    margin: 8%;
    z-index: 1;
    width: 80%;
  }

  .cover2 {
    margin: 8%;
    z-index: 1;
    width: 80%;
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

  .technos {
    margin-bottom: 5% !important;
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
  line-height: 16px;
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

.btn-linked {
  display: flex !important;
}

.btn-linked img {
  margin-right: 3px;
}


</style>
