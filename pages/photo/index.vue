<template>
  <div>
    <div class='gallery'>
      <div class='transition'></div>
      <div class='container'>
        <div class='content'>
          <img v-for='photo of this.shuffle(covertRight)'
               class='cover2 js-transition zoom' v-bind:alt='photo.name'
               v-bind:src="'https://ucarecdn.com/'+photo.uuid+'/-/preview/-/quality/smart/-/format/auto/'">
          <div class='cover2 text-content js-transition'>
            <div class='trigger'>
              <img src='https://media.giphy.com/media/wH8aFVGkdmOjxBxR3I/giphy.gif' width='74px' class='birdy'
                   height='64px' alt='gif-owl'>
            </div>
          </div>
        </div>
      </div>
      <div class='container'>
        <img src='https://media.giphy.com/media/lbHljU6UhczE6dSeXI/giphy.gif' width='74px' class='star' height='64px'
             alt='gif-star'>
        <div class='cover'>
          <img v-for='photo of this.shuffle(coverLeft)'
               class='cover js-transition zoom' v-bind:alt='photo.name'
               v-bind:src="'https://ucarecdn.com/'+photo.uuid+'/-/preview/-/quality/smart/-/format/auto/'">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { gsap } from 'gsap'
import mediumZoom from 'medium-zoom'



export default {

  data() {
    return {
      coverLeft: [],
      covertRight: []
    }
  },

  mounted: function() {
    this.fetchImages(),
    this.startAnimation()
  },


  methods: {
    fetchImages: function() {
      const Url = 'https://upload.uploadcare.com/group/info/'
      const PublicKey = '3c5ff03c50ae52a4f8bf'
      const Uri = '0b14b09e-8173-4cdf-95b3-60f07143d765~83'

      fetch(Url + '?pub_key=' + PublicKey + '&group_id=' + Uri, {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        },
      }).then(response => response.json()
      ).then(data => {
        this.coverLeft = data.files;
        this.covertRight = data.files;
      }).catch((e) => console.log(e));
    },
    startAnimation: function() {
      let mouseCursor = document.querySelector('.cursor')
      let galleryimg = document.querySelectorAll('.gallery img')
      let windowSize = screen.width
  if (windowSize >= 769)
  {
    galleryimg.forEach(img => {
      img.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('overImage')
      })
      img.addEventListener('mouseover', () => {
        mouseCursor.classList.add('overImage')
      })
    })
  }
      mediumZoom('.zoom', {
        background: 'auto',
        margin: 10,
        scrollOffset: 150
      })
    },
    shuffle: function(array) {
     return array.sort(() => Math.random() - 0.5);
    }
  }
}


</script>

<style scoped>


.trigger {
  opacity: 0;
  visibility: hidden;

}

.trigger2 {
  opacity: 0;
  visibility: hidden;

}


.trigger3 {
  opacity: 0;
  visibility: hidden;

}


.trigger4 {
  opacity: 0;
  visibility: hidden;

}


.gallery {
  z-index: 0;
}


img {
  position: relative;
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
    margin-top: 5%;
    display: block;
    align-items: center;
    position: relative;
  }

  .cover {
    z-index: 1;
    max-width: 90%;
    margin: 10px 10px 10px 5vw;
  }

  .cover2 {
    z-index: 1;
    max-width: 90%;
    margin: 10px 10px 10px 5vw;
  }

  .content {
    position: relative;
    width: 100%;
  }
}

@media only screen and  (min-width: 768px) {


  .container {
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(12, 2fr);
    grid-gap: 0;
    align-items: start;
    grid-column: 6/9;
    position: absolute;
    width: 100%;
  }

  .cover {
    margin: 10px;
    grid-column: 2/9;
    z-index: 1;
    max-width: 80%;
  }

  .cover2 {
    margin: 10px;
    z-index: 1;
    grid-column: 1/9;
    max-width: 90%;
  }

  .content {
    grid-column: 7/12;
    position: absolute;
    width: 100%;
  }

}

.text-content {
  position: relative;
  display: flex;
  max-width: 70%;
  z-index: 1;

}


.description {
  font-size: 30px;

}

.medium-zoom-image--opened {
  z-index: 2 !important;
}


</style>
