<template>
  <div>
    <div class='gallery scroll' id='trigger'>
      <div class='transition'></div>
      <div class='photos container'>
        <template v-for='(photo) in data'>
          <div v-if='photo.image_info.height < 4000 ' class='inner-item img-hidden'>
            <img class='cover zoom' v-bind:alt='photo.name'
                 v-bind:src="'https://ucarecdn.com/'+photo.uuid+'/-/preview/1880x864/-/quality/smart/-/format/auto/'">
            <div class='container-button'>
              <button id='like-button' class='heart' v-bind:data-name='photo.file_id'>
                <span class='heart-icon'></span>
                <span class='counter-like'>0</span>
                <span class='like-text'>Like</span>
              </button>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CryptoJS from 'crypto-js'

gsap.registerPlugin(ScrollTrigger)
export default {

  liked: [],
  client: '',
  cryptedIp: '',
  data() {
    return {
      data: []
    }
  },
  beforeMount() {
    this.fetchImages()
    this.getClientIp()
  },
  beforeUpdate() {
    this.startAnimation()
  },
  updated() {
    this.activeHearts()
  },

  methods: {
    fetchImages() {
      const config = useRuntimeConfig()
      const Url = config.public.cdnUrl
      const PublicKey = config.public.cdnPublicKey
      const Uri = config.public.cdnUri

      fetch(Url + '?pub_key=' + PublicKey + '&group_id=' + Uri, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(response => response.json()
      ).then(data => {
        this.data = this.shuffle(data.files)
      }).catch((e) => console.log(e))
    },
    startAnimation: function() {
      const transition = document.querySelector('.transition')
      const mouseCursor = document.querySelector('.cursor')
      const gallery = document.querySelectorAll('.gallery .photos')
      const windowSize = screen.width
      let delay = 1
      let top = 'top 80%'
      let countGrid = 0

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })

      gallery.forEach(img => {
        setTimeout(function() {
          const inners = img.querySelectorAll('.inner-item')
          inners.forEach(inner => {
            countGrid++
            if (windowSize >= 769) {
              inner.addEventListener('mouseleave', () => {
                mouseCursor.classList.remove('overImage')
              })
              inner.addEventListener('mouseover', () => {
                mouseCursor.classList.add('overImage')
              })
              if (countGrid % 2 === 0) {
                top = 'top 90%'
              } else {
                top = 'top 90%'
                inner.style.position = 'relative'
                inner.style.top = '350px'
              }
            } else {
              let imgZoom = inner.querySelector('.zoom')
              let clone = imgZoom.cloneNode(true)
              imgZoom.parentNode.replaceChild(clone, imgZoom)
            }
            gsap.to(
              inner, {
                visibility: 'visible',
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
                scrollTrigger: {
                  trigger: inner,
                  start: top,
                  resistance: 400,
                  onEnter: setTimeout(() => {
                    this.getLikesFromClient(inner)
                  }, delay++ * 300)
                }
              }
            )
          })
        }.bind(this), 1000)
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

    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5)
    },
    activeHearts() {
      const likeButtons = document.querySelectorAll('#like-button')
      likeButtons.forEach(button => {
        const heartIcon = button.querySelector('.heart-icon')
        button.addEventListener('click', target => {
          heartIcon.classList.toggle('active')
          this.likeAction(target.currentTarget)
        })
      })
    },
    getLikesFromClient(inner) {
      const config = useRuntimeConfig()
      let loop = true
      const route = 'getLikes'
      const client = this.client
      let count = 0

      if (inner) {
        let observer = new MutationObserver(async function() {
          if (inner.style.visibility !== 'hidden' && loop) {
            try {
              loop = false
              const imgFile = inner.querySelector('#like-button')

              const data =
                { fileId: imgFile.getAttribute('data-name') }

              const counterLikes = inner.querySelector('.counter-like')
              const heartIcon = inner.querySelector('.heart-icon')

              let result = await
                useFetch('/api/like/' + route, {
                  method: 'POST',
                  body: data
                })

              const likesImg = result.data.value.likes
              const arrayKeys = Object.keys(likesImg)
              count = arrayKeys.length
              counterLikes.innerText = count

              if (count > 0) {
                arrayKeys.forEach((value) => {
                  const bytes = CryptoJS.AES.decrypt(likesImg[value].ip, config.public.encryptKey)
                  const ipDecrypt = bytes.toString(CryptoJS.enc.Utf8)

                  if (ipDecrypt === client && !heartIcon.classList.contains('active')) {
                    heartIcon.classList.toggle('active')
                  }
                })
              }
            } catch (err) {
              console.log('getLikes' + err)
            }
          }
        })
        try {
          observer.observe(inner, { attributes: true, childList: true })
          return true
        } catch (err) {
          console.log('observer' + err)
        }
      }
    },
    async likeAction(target) {
      let route = 'deleteLike'
      if (target.firstChild.classList.contains('active')) {
        route = 'addLike'
      }
      this.liked = {
        ip: useCookie('clientInfo').value,
        fileId: target.getAttribute('data-name')
      }
      await useFetch('/api/like/' + route, {
        method: 'POST',
        body: this.liked
      }).then(response => {
          if (response.data.value.success === 1) {
            let value = target.querySelector('.counter-like').innerText
            if (route === 'addLike') {
              target.querySelector('.counter-like').innerText = ++value
            } else {
              target.querySelector('.counter-like').innerText = --value
            }
          }
        }
      ).catch((e) => console.log(e)
      )
    },
    async getClientIp() {
      if (!this.client) {
        const cookie = useCookie('clientInfo')
        const config = useRuntimeConfig()

        try {
          let value
          if (cookie.value) {
            value = cookie.value
          }
          const bytes = CryptoJS.AES.decrypt(value, config.public.encryptKey)
          this.client = bytes.toString(CryptoJS.enc.Utf8)
        } catch (err) {
          console.log('getIp' + err)
        }
      }
    }
  }
}
</script>

<style scoped>

.img-hidden {
  visibility: hidden;
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


@media only screen and  (max-width: 768px) {

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

@media only screen and  (min-width: 768px) {

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

  #like-button {
    margin: 10px;
  }
}

.medium-zoom-image--opened {
  z-index: 2 !important;
}

#like-button {
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: bold;
  padding: 10px;
  position: relative;
  width: 90px;
  height: 28px;
  border-radius: 5px;
}

.container-button {
  width: 100%;
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
  top: 4px;
  left: 10px;
  border-radius: 50% 50% 0 0;
  transform: rotate(-45deg);

}

.heart-icon::after {
  box-sizing: border-box;
  height: 15px;
  width: 10px;
  top: 4px;
  left: 14px;
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
  top: 4px;
  left: 53px;
}

.counter-like {
  font-size: 12px;
  position: absolute;
  display: inline-block;
  top: 5px;
  left: 30px;
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


</style>
