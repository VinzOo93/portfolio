<template>
  <div>
    <h1>Payment Confirmation</h1>
    <p v-if="loading">Vérification du paiement...</p>
    <p v-if="error">Erreur lors de la vérification du paiement.</p>
    <p v-if="success">Votre paiement a été validé avec succès.</p>
  </div>
</template>

<script>
export default {
  async setup() {
    const route = useRoute();
    const loading = ref(true);
    const error = ref(false);
    const success = ref(false);
    try {
      const res = await useFetch('shop/verifyPayment', {
        query: route.query
      });
      if (res.status === 'PAID') {
        success.value = true;
      } else {
        error.value = true;
      }
    } catch (err) {
      error.value = true;
    } finally {
      loading.value = false;
    }
  }
}
</script>

<style scoped>

</style>
