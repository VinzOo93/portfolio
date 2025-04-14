

<template>
  <div v-if='reveleModalPayment'>
    <div class='payment'>
      <div class='board'>
        <div class='paymentForm'>
          <form v-on:submit.prevent='addPayment'>
            <h2>Commande (Sandbox)</h2>
            <label>email</label>
            <input
              id="email"
              type="email"
              v-model="email"
              :class="['form-input', errors.email ? 'has-error' : '']"
            />
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
            <label>nom</label>
            <input
              id="secondName"
              type="text"
              v-model="secondName"
              :class="['form-input', errors.secondName ? 'has-error' : '']"
            />
            <p v-if="errors.secondName" class="error-message">{{ errors.secondName }}</p>
            <label>prénom</label>
            <input
              id="firstname"
              type="text"
              v-model="firstname"
              :class="['form-input', errors.firstname ? 'has-error' : '']"
            />
            <p v-if="errors.firstname" class="error-message">{{ errors.firstname }}</p>
            <label>adresse</label>
            <input
              id="address"
              type="text"
              v-model="address"
              :class="['form-input', errors.address ? 'has-error' : '']"
            />
            <p v-if="errors.address" class="error-message">{{ errors.address }}</p>
            <label>code postal</label>
            <input
              id="postalCode"
              type="text"
              v-model="postalCode"
              :class="['form-input', errors.postalCode ? 'has-error' : '']"
            />
            <p v-if="errors.postalCode" class="error-message">{{ errors.postalCode }}</p>
            <label>ville</label>
            <input
              id="city"
              type="text"
              v-model="city"
              :class="['form-input', errors.city ? 'has-error' : '']"
            />
            <p v-if="errors.city" class="error-message">{{ errors.city }}</p>
            <label>pays</label>
            <input
              id="country"
              type="text"
              v-model="country"
              :class="['form-input', errors.country ? 'has-error' : '']"
            />
            <p v-if="errors.country" class="error-message">{{ errors.country }}</p>
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
    const errors = ref({})

    function validateForm() {
      errors.value = {}

      if (!email.value || !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.value.email = 'Email invalide'
      }

      if (!firstname.value) {
        errors.value.firstname = 'Le prénom est requis'
      }

      if (!secondName.value) {
        errors.value.secondName = 'Le nom est requis'
      }

      if (!address.value) {
        errors.value.address = 'Adresse manquante'
      }

      if (!postalCode.value || !postalCode.value.match(/^\d{5}$/)) {
        errors.value.postalCode = 'Code postal invalide'
      }

      if (!city.value) {
        errors.value.city = 'Ville requise'
      }

      if (!country.value) {
        errors.value.country = 'Pays requis'
      }

      return Object.keys(errors.value).length === 0
    }

    async function addPayment() {

      if (!validateForm()) {
        console.log('Validation échouée', errors.value)
        return
      }

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
        link = paymentData.data.value.payment.link + paymentData.data.value.payment.token;
      }).catch((error) => console.log('error fetch ' + error));

      if (link != null) {
        alert('sandbox email : pepin.lebref@gmail.com & password : pepinpin')
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
      addPayment,
      errors,
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6; /* bleu focus */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); /* léger halo bleu */
}

.form-input.has-error {
  border-color: #e53935; /* rouge vif */
  background-color: #fff5f5;
}

.error-message {
  color: #e53935;
  font-size: 0.875rem;
  margin-top: 4px;
}

.error-message {
  opacity: 0;
  transform: translateY(-5px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.form-group .error-message {
  opacity: 1;
  transform: translateY(0);
}


.paymentForm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
