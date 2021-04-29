<template>
  <div>
      <div class="transition"></div>
    <article>
      <div class="separator">
        <span class="separator__year">2020</span>
        <span class="separator__line"></span>
      </div>
      <div class="card">
        <h2 class="name"></h2>
      </div>
    </article>
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
