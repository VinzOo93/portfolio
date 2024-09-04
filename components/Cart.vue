<template>
  <div v-if='reveleModalCart' class='bloc-modale-cart'>
    <div class='overlay' v-on:click='openCartModal'></div>
    <div class='modale-cart'>
      <div class='btn-modale' v-on:click='openCartModal'></div>
      <div class='content-cart'>
        <div class="center">
          <div v-if="items.length > 0" class="Cart">
            <h2>Mon Panier</h2>
            <table class="CartListView">
              <thead>
                <tr>
                  <th>Impressions</th>
                  <th>Quantité</th>
                  <th class='mobile-not-visible'>Prix Uni </th>
                  <th class='mobile-not-visible'>Prix HT</th>
                  <th>Prix TTC</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items" class="CartRow">
                  <td class="CartCell--item">
                    <div class="CartItem">
                      <img
                        v-bind:src="'https://ucarecdn.com/' + item.image + '/-/preview/250x250/-/quality/smart/-/format/auto/'" />
                      <span>{{ item.printFormat.name }}</span>
                    </div>
                  </td>
                  <td class="CartCell--quantity">
                    <div class="CartButtons">
                      <span class="NumericInput">
                        <button class="NumericInput-button b-minus visible .minus" v-on:click='updateItemQuantity(item.id, true)' :disabled="item.quantity <= 1">
                          <i class="fas fa-minus">-</i>
                        </button>
                        <span v-bind:class="'NumericInput-value item-quantity-' + index">{{ item.quantity }}</span>
                        <button class="NumericInput-button b-more visible" v-on:click='updateItemQuantity(item.id, false)'>
                          <i class="fas fa-plus">+</i>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td class="CartCell--unitprice">{{ item.unitPrice }} €</td>
                  <td class="CartCell--price">{{ item.preTaxPrice }} €</td>
                  <td class="CartCell--subtotal"><span>{{ item.taxPrice }} €</span></td>
                  <td class="CartCell--subtotal">
                    <span><button class="delete" v-on:click='deleteItem(item.id)'>x</button></span>
                  </td>
                </tr>
                <tr>
                  <td class="shipping"> Expédition: <span class='shipping-value'>{{ shipping }} €</span> </td>
                  <td class="Total">Total: <span class="Total-value">{{ total }} €</span></td>
                  <td><button class='button-validate validate' v-on:click='validateCart' ></button></td>
                  <td><button class='button-pay hidden'>Payer</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <h2>Votre panier est vide !! 😢</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useItemsStore } from '/stores/items'

export default {
  name: 'Cart',
  props: ['openCartModal', 'reveleModalCart'],

  setup() {
    const store = useItemsStore();
    const items = ref(store.items);
    const cart = ref([]);
    const total = ref(0);
    const shipping = ref(0);
    let requestQueue = Promise.resolve();

    watch(() => store.items, (newItems) => {
      items.value = newItems;
    });


    async function deleteItem(id) {
      requestQueue = requestQueue.then(async () => {
        const route = 'deleteItemToCart';
        const body = { id: id };
        await useFetch('/api/shop/' + route, {
          method: 'POST',
          body: body
        }).catch((e) => console.log(e));
      });
      await requestQueue;
      await getCart();
    }

    async function updateItemQuantity(id, less) {
      requestQueue = requestQueue.then(async () => {
        const route = 'patchItemToCart';
        const increment = {
          less: less,
          id: id
        }

        await useFetch('/api/shop/' + route, {
          method: 'POST',
          body: increment
        }).catch((e) => console.log(e));
      })
      await requestQueue;
      await getCart();
    }

    async function getCart() {

      const route = 'getCart';
      cart.value = {
        cartToken: getCookieCartToken()
      }

      await useFetch('/api/shop/' + route, {
        method: 'POST',
        body: cart.value
      }).then(response => {
        store.registerItems(response.data.value.items);
        items.value = store.items;
        shipping.value = response.data.value.shipping;
        total.value = response.data.value.total;

        if (items.value.length > 0) {
          const cart = document.querySelector('.cart-container');
          cart.style.visibility = 'visible';
        }
        document.querySelector('.counter-cart').innerText = items.value.length;
      }).catch((e) => console.log(e));
    }

    function getCookieCartToken() {
      const cookie = useCookie('clientCart');
      return cookie.value;
    }

    function validateCart() {
      const mores = document.querySelectorAll('.b-more');
      const minus = document.querySelectorAll('.b-minus');
      const deletes = document.querySelectorAll('.delete');
      const pay = document.querySelector('.button-pay');
      const validate = document.querySelector('.button-validate');

      mores.forEach(more => toggleVisibility(more));
      minus.forEach(min => toggleVisibility(min));
      deletes.forEach(del => toggleVisibility(del));
      toggleVisibility(pay);
      changerValidateButton(validate);
    }

    function toggleVisibility(element) {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
        element.classList.add('hidden');
      }
    }

    function changerValidateButton(element) {
      if (!element.classList.contains('update')) {
        element.classList.add('update');
        element.classList.remove('validate');

      } else {
        element.classList.add('validate');
        element.classList.remove('update');
      }
    }

    onMounted(async () => {
      await getCart();
    })

    return {
      items,
      shipping,
      total,
      deleteItem,
      updateItemQuantity,
      validateCart
    }
  }

}
</script>

<style>
@media only screen and (max-width: 968.5px) {

  th {
    width: 5vw;
  }

  .CartItem img {
    width: 20vw;
    padding: 0.1rem;
  }

  .CartItem>* {
    margin-top: 0.4rem;
    margin-right: 0.4rem;
    font-size: 4vw;
  }

  .CartCell--price,
  .CartCell--subtotal ,
  .CartCell--unitprice,
  .CartCell--quantity {
    font-size: 3vw;
  }

  .modale-cart {
    width: 100%
  }

  .Cart {
    width: 90%;
  }

  .Total-value {
    font-size: 20px;
  }

  .shipping-value {
    font-size: 15px;
  }
  .CartListView th,
  .CartListView td {
    padding: 0;
  }

  .CartCell--unitprice,
  .CartCell--price,
  .mobile-not-visible
  {
    display: none;
  }

}

@media only screen and (min-width: 968.5px) {

  .modale-cart {
    width: 80%
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .CartListView th,
  .CartListView td {
    padding: 0.3rem;
  }

  .CartItem>* {
    margin-right: 30px;
  }

  .CartItem img {
    width: 100px;
  }


}

.delete, .NumericInput-button {
  border: 2px solid #cec3aa;
  border-radius: 10px;
  background: #e9e9e9;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 2px 3px 0 #9e9e9e;
  box-sizing: border-box;
  font-family: "verdana",serif !important;
}

.delete:hover {
  background: #999;
  color: #cb0000;
}

.bloc-modale-cart {
  position: fixed;
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


.modale-cart {
  background: #f1f1f1;
  padding: 10px;
  position: fixed;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
}

.content_cart {
  align-items: center;
}

button {
  cursor: pointer;
}


html {
  font-family: sans-serif;
  font-size: 1.2rem;
}


.CartListView {
  border-collapse: collapse;
}

.CartListView th {
  color: #999;
  text-align: center;
  border-bottom: 1px solid #cdcdcd;
}

.CartRow {
  border-bottom: 1px solid #cdcdcd;
}

.CartCell--price,
.CartCell--subtotal,
.CartCell--unitprice {
  text-align: center
}

.CartCell--quantity {
  margin-top: 30px;
  text-align: center;
  min-width: 30vw;
}

.CartCell--subtotal {
  color: #cb0000;
}

.CartItem {
  display: flex;
  align-items: center;
}

.Total, .shipping {
  font-weight: bold;
  font-size: 15px;
}

.Total-value {
  color: #cb0000;
}

h2 {
  display: flex;
  justify-content: center;
}

.NumericInput button {
  width: 2rem;
  margin-bottom: 10px;
  margin-top: 10px;
}

.NumericInput-value {
  margin: 0 0.5rem;
}

.hidden {
  opacity: 0;
  transition: opacity 0.5s ease-out;
  visibility: hidden;
}

.visible {
  opacity: 1;
  transition: opacity 0.5s ease-in;
  visibility: visible;
}

.update::after {
  content: 'Modifier';
}

.validate::before {
  content: 'Valider';
}

tbody tr:last-child {
  margin-top: 20px;
}

tbody tr:last-child td {
  padding-top: 10px;
}

tbody tr {
  margin-top: 20px;
}

.button-pay {
  margin-left: 10px;
}

.NumericInput-button:disabled {
  opacity: 0.6;
  background-color: #cccccc;
  color: #666666;
  border: 1px solid #999999;
  cursor: not-allowed;
  box-shadow: none;
}

</style>

