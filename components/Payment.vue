

<template>
  <div v-if='reveleModalPayment'>
    <div class='payment'>
      <div class='board'>
        <div class='paymentForm'>
          <form v-on:submit.prevent='addPayment'>
            <h2>Commande</h2>
            <label>email</label>
            <input type='text' v-model='email'>
            <label>nom</label>
            <input type='text' v-model='secondName'>
            <label>prénom</label>
            <input type='text' v-model='firstname'>
            <label>adresse</label>
            <input type='text' v-model='address'>
            <label>code postal</label>
            <input type='text' v-model='postalCode'>
            <label>ville</label>
            <input type='text' v-model='city'>
            <label>pays</label>
            <input type='text' v-model='country'>
            <button>Payer avec Paypal</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Payment',
  props: [
    'reveleModalPayment',
    'openPaymentModal'
  ],
  data() {
    return {
      text: {
        email: '',
        firstname: '',
        secondName: '',
        address: '',
        postalCode: '',
        city: '',
        country: '',
      }
    }
  },
  async setup() {
    const email = ref('');
    const firstname = ref('');
    const secondName = ref('');
    const address = ref('');
    const postalCode = ref('');
    const city = ref('');
    const country = ref('');

    async function addPayment() {

      const route = 'getPaypalPaymentService';
      let link = null;

      await useFetch('/api/shop/' + route, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: {
          cart: '/carts/' +  useCookie('clientCart').value,
          email: email.value,
          firstname: firstname.value,
          secondName: secondName.value,
          address: address.value,
          postalCode: postalCode.value,
          city: city.value,
          country: country.value,
        }
      }).then(paymentData => {
        console.log(paymentData);
        link = paymentData.data.value.payment.link + paymentData.data.value.payment.token;
      }).catch((error) => console.log('error fetch ' + error));

      if (link != null) {
        await navigateTo(link, { external: true });
      }
    }
    return {
      email,
      firstname,
      secondName,
      address,
      postalCode,
      city,
      country,
      addPayment
    }
  }
}
</script>

<style scoped>
.paymentForm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.paymentForm form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  max-width: 800px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.paymentForm input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.paymentForm button {
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.paymentForm button:hover {
  background-color: #0056b3;
}



</style>
