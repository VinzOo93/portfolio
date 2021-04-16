<template>

  <div>
    <div class='transition'></div>
    <p class='welcome line-1'>Hola! || JEUNE VISITEUR</p>
    <p class='welcome line-2'> ICI // 100% NEW WORLD</p>
    <p class='welcome line-3'> 20-100 FROM 2021 </p>
    <p class='welcome line-4'>DON'T FORGET TO SCROLL</p>
    <p class='welcome line-5'>()=> ENJOY <=()</p>
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
.welcome {
  font-size: 9.027777778vw;
}
</style>
