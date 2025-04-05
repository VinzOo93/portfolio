<template>
  <div>
    <div>
      <h1 class='title'>Paiement</h1>
    </div>

    <div v-if="loading" class='loading'>
      <p>Vérification du paiement...</p>
    </div>
    <div v-if="success" class='success'>
      <p>Votre paiement a été validé avec succès. Vous allez recevoir un mail de confirmation</p>
      <img src='https://media.giphy.com/media/4QFAH0qZ0LQnIwVYKT/giphy.gif' class='winner-img' alt='winner-img'>
    </div>
    <div v-if="error" class='error'>
      <p>Erreur lors de la vérification du paiement.</p>
      <img src='https://media.giphy.com/media/tNC2rod1uTrdC/giphy.gif' alt='bender'>
    </div>

  </div>
</template>

<script>

export default {
  async setup() {
    const loading = ref(true);
    const error = ref(false);
    const success = ref(false);
    const cookie = useCookie('clientCart');
    const { createCart, registerCookieCart } = useCart();

    try {
      const { data } = await useFetch('/api/shop/verifyPayment', {
          method: 'POST',
          body: {
            cart: '/carts/' + cookie.value
          }
      }).catch(e => { error.value = true; });


      data.value && data.value.status === 'PAID' ?
        success.value = true :
        error.value = true;

      const cart = document.querySelector('.cart-container');
      useCookie('clientCart').value = null;
      registerCookieCart(await createCart());
      cart.style.visibility = 'hidden';

    } catch (error) { console.log(error); }

    return {
      loading,
      success,
      error
    }
  }
}
</script>

<style scoped>
  .title {
  padding-top: 10%;
  }

  .error, .loading, .success, .title {
    text-align: center;
  }

</style>
