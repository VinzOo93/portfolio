<template>
  <div>
    <div class='gallery scroll' id='trigger'>
      <div class='transition'></div>
      <div class='photos container'>
        <template v-for='(photo) in dataPhotos'>
          <div v-if='photo.contentInfo.image.height < 4000' class='inner-item img-hidden'>
            <img class='cover zoom' v-bind:alt='photo.originalFilename'
              v-bind:src="'https://ucarecdn.com/' + photo.uuid + '/-/preview/1880x864/-/quality/smart/-/format/auto/'">
            <div class='container-button'>
              <div id='wrap' class='flex'>
                <button id='like-button' class='btn' v-bind:data-name='photo.uuid'>
                  <span class='heart-icon'></span>
                  <span class='counter-like'>0</span>
                </button>
                <div v-for='(print) in printFormats'>
                  <button v-on:click='addToCart(print.taxPrice, print.preTaxPrice , photo.uuid, print.name)' class='btn'>
                    <span class="name">{{ print.name }}</span>
                    <span class="price">{{ print.taxPrice }} €</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useItemsStore } from '/stores/items'

gsap.registerPlugin(ScrollTrigger);

export default {

  async setup() {
    useRuntimeConfig()
    const dataPhotos = ref([]);
    const printFormats = ref([]);
    const items = ref([]);

    let client = [];


    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    async function fetchImage() {
      const route = 'getPhotos'
      await useFetch('/api/photo/' + route, {
        method: 'GET'
      }).then(response => {
        dataPhotos.value = response.data.value.results;
        shuffle(dataPhotos.value);
      }).catch((e) => console.log(e))
    };

    async function getPrintFormats() {
      const route = 'getPrintsFormat';
      await useFetch('/api/shop/' + route,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(print => {
          printFormats.value = print.data.value
        }).catch((error) => console.log('error fetch ' + error));
    }

    async function getClient() {
      const cookie = useCookie('clientInfo');
      try {
        if (cookie.value) {
          client = cookie.value;
        }
      } catch (err) {
        console.log('getCookieValue' + err);
      }
    }

    function getLikesFromClient(inner) {
      let route = 'getLikes';
      setTimeout(function () {
        let loop = true;
        let count = 0;
        if (inner) {
          let observer = new MutationObserver(async function () {
            if (inner.style.visibility !== 'hidden' && loop) {
              try {
                loop = false;
                const imgFile = inner.querySelector('#like-button');

                const data = { fileId: imgFile.getAttribute('data-name'), client: client }

                const counterLikes = inner.querySelector('.counter-like');
                const heartIcon = inner.querySelector('.heart-icon');
                const result = await
                  useFetch('/api/like/' + route, {
                    method: 'POST',
                    body: data,
                    key: imgFile.getAttribute('data-name'),
                  });
                const likesImg = result.data.value.likes;
                const arrayKeys = Object.keys(likesImg);
                count = arrayKeys.length;
                counterLikes.innerText = count;

                if (count > 0) {
                  if (result.data.value.liked && !heartIcon.classList.contains('active')) {
                    heartIcon.classList.toggle('active');
                  }
                }
              } catch (err) {
                console.log('getLikes' + err);
              }
            }
          })
          try {
            observer.observe(inner, { attributes: true, childList: true });
          } catch (err) {
            console.log('observer ' + err);
          }
        }
      }, 400)
    }

    async function likeAction(target) {
      let route = 'deleteLike';
      if (target.firstChild.classList.contains('active')) {
        route = 'addLike'
      }
      const liked = {
        ip: useCookie('clientInfo').value,
        fileId: target.getAttribute('data-name')
      }
      await useFetch('/api/like/' + route, {
        method: 'POST',
        body: liked
      }).then(response => {
        if (response.data.value.success === 1) {
          let value = target.querySelector('.counter-like').innerText;
          if (route === 'addLike') {
            target.querySelector('.counter-like').innerText = ++value;
          } else {
            target.querySelector('.counter-like').innerText = --value;
          }
        }
      }
      ).catch((e) => console.log(e)
      )
    }

    function activeHearts() {
      const likeButtons = document.querySelectorAll('#like-button')
      likeButtons.forEach(button => {
        const heartIcon = button.querySelector('.heart-icon')
        button.addEventListener('click', target => {
          heartIcon.classList.toggle('active')
          likeAction(target.currentTarget)
        })
      })
    }

    function startAnimation() {
      const transition = document.querySelector('.transition');
      const mouseCursor = document.querySelector('.cursor');
      const gallery = document.querySelectorAll('.gallery .photos');
      const windowSize = screen.width;
      let top = 'top 80%';
      let countGrid = 0;

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      gallery.forEach(img => {
        setTimeout(function () {
          const inners = img.querySelectorAll('.inner-item');
          inners.forEach(inner => {
            countGrid++
            if (windowSize >= 769) {
              inner.addEventListener('mouseleave', () => {
                mouseCursor.classList.remove('overImage');
              })
              inner.addEventListener('mouseover', () => {
                mouseCursor.classList.add('overImage');
              })
              if (countGrid % 2 === 0) {
                top = 'top 20%'
              } else {
                top = 'top 90%'
                inner.style.position = 'relative';
                inner.style.top = '350px';
              }
            } else {
              let imgZoom = inner.querySelector('.zoom');
              let clone = imgZoom.cloneNode(true);
              imgZoom.parentNode.replaceChild(clone, imgZoom);
            }

            gsap.to(
              inner, {
              visibility: 'visible',
              opacity: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: inner,
                start: top,
                onEnter: getLikesFromClient(inner)
              }
            }
            )
          })
        }.bind(this), 1000);
      })

      gsap.timeline(50)
        .fromTo(transition,
          {
            opacity: 1,
            y: '100%',
            duration: 3
          },
          {
            y: '-100%',
            duration: 2.5
          })
    }

    function addToCart(taxPrice, preTaxPrice, photoUuid, printFormat) {
      manageItem(taxPrice, preTaxPrice, photoUuid, printFormat);
      const cart = document.querySelector('.cart-container');
      cart.style.visibility = 'visible';
      ++document.querySelector('.counter-cart').innerText;

    }

    function manageItem(taxPrice, preTaxPrice, photoUuid, printFormat) {
      const store = useItemsStore();
      if (!(updateQuantityItem(photoUuid, printFormat))) {
        const item = {
          quantity: 1,
          taxPrice: taxPrice,
          preTaxPrice: preTaxPrice,
          image: photoUuid,
          printFormat: printFormat,
          cart: null
        };
        items.value.push(item);
      }
      store.registerItems(items.value);
    }

    function updateQuantityItem(photoUuid, printFormat) {
      return items.value.some(item => {
        if (item['image'] === photoUuid && item['printFormat'] === printFormat) {
          item['quantity']++;
          return true;
        }
      });
    }

    onMounted(() => {
      nextTick(async () => {
        await getPrintFormats()
        await fetchImage()
        await getClient()
        activeHearts()
      })
    })

    onBeforeUpdate(() => {
      startAnimation()
    })

    return {
      dataPhotos,
      printFormats,
      addToCart
    }
  }
}
</script>

<style scoped>
button {
  cursor: pointer;
}

.flex {
  display: flex;
}

.img-hidden {
  visibility: visible;
  opacity: 0;
  transition: all 0.25s ease-in;
}

img {
  position: relative;
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 0;
  align-items: start;
  position: relative;
  width: 100%;
}

@media (hover: hover) {
  button.btn .price {
    display: none;
  }

  button.btn:hover .name {
    display: none;
  }

  button.btn:hover .price {
    display: inline;
  }
}

@media only screen and (max-width: 768px) {

  button.btn {
    top: 0;
    padding: 0 12px;
  }

  .btn .name,
  .btn .price {
    font-size: 9px;
    display: block;
    /* Affiche chaque élément sur sa propre ligne */
  }

  .heart-icon::before {
    top: 6px;
  }

  .heart-icon::after {
    top: 6px;
  }

  .container-button {
    margin: 7%;
  }

  .counter-like {
    top: 7px;
  }

  .like-text {
    top: 6px;
    left: 43px;
  }

  .container {
    margin-top: 5%;
    display: block;
    align-items: center;
    position: relative;
  }

  .cover {
    z-index: 1;
    max-width: 85vw;
    margin: 3vh 6vw;
  }

  .inner-item {
    top: 0 !important;
  }
}

@media only screen and (min-width: 980px) {

  button.btn {
    top: 10px;
    padding: 10px 24px;
  }

  .like-text {
    left: 53px;
    top: 8px;
  }

}

@media only screen and (max-width: 1080px) {
  #like-button {
    border-width: 0;
    padding: 15px 19px 15px 23px !important
  }

  .heart-icon::before {
    box-sizing: border-box;
    height: 15px;
    width: 8px;
    left: 2px;
    top: 0;
    border-radius: 50% 50% 0 0;
    transform: rotate(-45deg);

  }

  .heart-icon::after {
    box-sizing: border-box;
    height: 15px;
    width: 8px;
    left: 6px;
    top: 0;
    bottom: 20px !important;
  }

  .counter-like {
    top: 14px !important;
  }
}

@media only screen and (min-width: 768px) {

  #like-button {
    border-width: 0
  }

  .counter-like {
    top: 9px;
  }

  .like-text {
    left: 53px;
    top: 8px;
  }

  .img-hidden {
    padding-bottom: 40px;
  }

  .container {
    margin-top: 5%;
    display: grid;
    grid-gap: 0;
    align-items: start;
    position: absolute;
    width: 100%;
  }

  .cover {
    align-items: center;
    margin: 10px;
    grid-column: 2/7;
    z-index: 1;
    max-width: 95%;
  }
}

.medium-zoom-image--opened {
  z-index: 2 !important;
}

.container-button {
  width: 85%;
  display: flex;
  justify-content: center;
}

.heart-icon::before,
.heart-icon::after {
  content: "";
  position: absolute;
  background-color: transparent;
  border-top: 2px ridge #bd0000;
  border-bottom: 0.5px solid #a10000;
}

.heart-icon::before {
  box-sizing: border-box;
  height: 15px;
  width: 10px;
  left: 5px;
  bottom: 14px;
  border-radius: 50% 50% 0 0;
  transform: rotate(-45deg);

}

.heart-icon::after {
  box-sizing: border-box;
  height: 15px;
  width: 10px;
  left: 9px;
  bottom: 14px;
  border-radius: 50% 50% 0 0;
  transform: rotate(45deg);
}

.heart-icon.active::before,
.heart-icon.active::after {
  background-color: red;
  border-top: 2px ridge transparent;
  border-bottom: 0.5px solid transparent;
}

.like-text {
  color: #f6f1f1;
  position: absolute;
  display: inline-block;
}

.counter-like {
  font-size: 12px;
  position: absolute;
  display: inline-block;
  left: 26px;
  top: 12px;
}

.gallery {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
}

html {
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

.gallery::-webkit-scrollbar {
  width: 0 !important
}

#wrap {
  margin: -10px auto;
  text-align: center;
}

button.btn {
  display: inline-block;
  position: relative;
  text-decoration: none;
  font-weight: 700;
  background: transparent;
  letter-spacing: .5px;
  margin: 10px;
  color: #E8D7ACFF !important;
  box-shadow: inset 0 0 0 #22313F;
  font-size: 11px;
  border-radius: 6px;
  transition: all 0.3s ease-out;
}

button.btn:hover {
  background: #000000;
  color: #fff;
  box-shadow: inset 0px -50px 0px #22313F;
}

button.btn:active {
  color: #05555e;
  box-shadow: inset 0px -50px 0px #f5f7fa;
}

button.btn.warn {
  background: #f5f7fa;
  color: #05555e;
  box-shadow: inset 0 0 0 #30abd5;
}

button.btn.warn:hover {
  background: #f5f7fa;
  color: #fff;
  box-shadow: inset 0px -50px 0px #30abd5;
}

button.btn.warn:active {
  color: #fff;
  box-shadow: inset 0px -50px 0px #30abd5;
}
</style>
