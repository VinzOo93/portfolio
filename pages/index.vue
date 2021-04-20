<template>

  <div>
    <div class='transition'></div>
    <section>
      <div class='d-flex flex-column hero__wrap justify-content-center min-vh-100 '>
        <div class='hero__lineWrap overflow-hidden is-inview'>
          <p class='welcome line p-0 m-0'><span class='customFont'>HEY</span> <img src='https://media.giphy.com/media/VDNDX5BhKKz0YsJkl0/giphy.gif' class='eyes'  alt='eyes'> WELCOME</p>
          <p class='welcome line p-0 m-0'>  <img src='https://media.giphy.com/media/RSgKTx5RRZj34rbbu7/giphy.gif' class='covid' alt='covid'> IN MY <span class='customFont'>WORLD</span><img src='https://media.giphy.com/media/dvgjUJsZ60Wyw8UNyM/giphy.gif' class='world' width='70px'  alt='world'></p>
          <p class='welcome line p-0 m-0'> 20<img src='~/assets/home/rock.jpg' class='rock' alt='rock'><span class='customFont'>CENT</span><img src='https://media.giphy.com/media/f4DxcVLlIOAgsYDJCG/giphy.gif' class='gin'  alt='gin'> 2021 </p>
          <p class='welcome line p-0 m-0'>(<img src='https://media.giphy.com/media/qNSRPyKLJIzZb0IJnB/giphy.gif' class='lemon' alt='lemon'>)=><span class='customFont'>ENJOY</span><=(<img src='https://media.giphy.com/media/MAms0vmRszwHe/giphy.gif' class='strawberry'  alt='strawberry'>)</p>
        </div>
      </div>
    </section>
      </div>
</template>
<script>
import { gsap } from 'gsap'

export default {
  mounted: function() {
    this.startAnimation();
  },
  methods: {
    startAnimation: function() {
      const transition = document.querySelector('.transition')
      gsap.timeline(100)
        .fromTo(transition, { opacity: 1, y: '100%', duration: 3 }, { y: '-100%', duration: 2.5 })
    }
  }
}
</script>

<style scoped>

img {
  width: 6.416666667vw;
  image-rendering: auto;
}

.rock {
  width: 12.416666667vw;
  margin-left: 20px;
  margin-right: 20px;

}

.lemon  {
  height: 6.416666667vw;
}

.strawberry {
  height: 6.416666667vw;
}

.world {
  margin-left: 20px;
}



body * {
  letter-spacing: .05em;
  box-sizing: border-box;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

.p-0 {
  padding: 0;
}

.m-0 {
  margin: 0;
}

.line {
  white-space: nowrap;
  font-family: "Helvetica",sans-serif;

}
section {
  display: block;
}

.welcome {
  font-size: 10.027777778vw;
  line-height: .886722663;
}

.hero__wrap {
  margin-right: 7%;
  margin-left: 7%;
  position: relative;
  bottom: 80px;

}

.min-vh-100 {
  min-height: 100vh;
}

.d-flex {
  display: flex;
}
.justify-content-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.customFont {
  font-family: "Shree Devanagari 714",sans-serif;
  font-weight: lighter;
}
</style>
