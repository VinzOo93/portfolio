<template>
  <div class='bloc-modale-cookie' v-if='!cookieAccepted'>
    <div class='overlay-cookie'></div>
    <div class='modale-cookie'>
      <div class='content-cookie'>
        <div>
          <img class='img-cookie' src='https://media.giphy.com/media/R52934IAVt4jK/giphy.gif' alt='cookie-img'>
        </div>
        <p>Ce site utilise des cookies et collecte des données pour améliorer votre expérience utilisateur.</p>
        <button v-on:click='this.addCookie'>J'accepte l'utilisation des cookies</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cookie',
  data() {
    return {
      cookieAccepted: true
    }
  },
  mounted() {
    this.checkCookie()
  },
  methods: {
    async addCookie() {
      const year = 31556962
      const cookie = useCookie('clientInfo', {
        maxAge: year
      })
      const promise = await useFetch('/api/client/getClientIp')
      cookie.value = promise.data.value.ipClient
      this.cookieAccepted = !this.cookieAccepted
    },
    checkCookie() {
      if (process.client) {
        const cookie = useCookie('clientInfo')
        if (!cookie.value){
          this.cookieAccepted = false
        }
      }
    }
  }
}

</script>

<style scoped>

@media only screen and (max-width: 768.5px) {
  .content-cookie {
    width: 40vw;
  }
}

@media only screen and (min-width: 768.5px) {
  .content-cookie {
    width: 20vw;
  }
}

.bloc-modale-cookie {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.overlay-cookie {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.modale-cookie {
  background: #f1f1f1;
  padding: 50px;
  position: fixed;
}

.modale-cookie p {
  text-align: center;
}

.content-cookie {
  display: grid;
}

.img-cookie {
  width: 100%;
  align-items: center;
}
</style>
