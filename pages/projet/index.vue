<template>
  <div>
    <div>
      <div class='transition'></div>

    </div>
    <h1>projet</h1>
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

</style>
