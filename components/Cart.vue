<template>
  <div class='bloc-modale-cart'>
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
                  <th>Prix HT</th>
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
                      <span>{{ item.printFormat }}</span>
                    </div>
                  </td>
                  <td class="CartCell--quantity">
                    <span class="NumericInput">
                      <button class="NumericInput-button b-minus" v-on:click='addOnelessQuantity(index)' :disabled="item.quantity <= 1">
                        <i class="fas fa-minus">-</i>
                      </button>
                      <span v-bind:class="'NumericInput-value item-quantity-' + index">{{ item.quantity }}</span>
                      <button class="NumericInput-button b-more" v-on:click='addOneMoreQuantity(index)'>
                        <i class="fas fa-plus">+</i>
                      </button>
                    </span>
                  </td>
                  <td class="CartCell--price">{{ item.preTaxPrice }}</td>
                  <td class="CartCell--subtotal">{{ item.taxPrice }} €</td>
                  <td class="CartCell-actions">
                    <button class="delete" v-on:click='deleteItem(index)'>x</button>
                  </td>
                </tr>
                <tr>
                  <td class="Total">Total: <span class="Total-value">{{ total.toFixed(2) }} €</span></td>
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
    const items = store.items;
    const total = ref(0)

    getItems();
    getTotalPrice();

    function getItems() {
      items.value = store.items;
    }
    function getTotalPrice() {
      total.value = 0;
      store.items.forEach((item) => {
        total.value += parseFloat(item.taxPrice);
      });
    }

    function deleteItem(index) {
      if (store.removeItem(index)) {
        --document.querySelector('.counter-cart').innerText;
        getTotalPrice();
      };
    }

    function addOneMoreQuantity(index) {
      if (store.addOneQuantity(index)) {
        ++document.querySelector('.item-quantity-' + index).innerText;
        updatePrices(index);
        getTotalPrice();
      }
    }

    function addOnelessQuantity(index) {
      if (store.removeOneQuantity(index)) {
        --document.querySelector('.item-quantity-' + index).innerText;
        updatePrices(index);
        getTotalPrice();
      }
    }

    function updatePrices(index) {
      const item = items[index];
      item.taxPrice = item.taxPrice * item.quantity;
      item.preTaxPrice = item.preTaxPrice * item.quantity;
    }
    return {
      items,
      total,
      deleteItem,
      addOneMoreQuantity,
      addOnelessQuantity,
      updatePrices
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
    width: 13vw;
  }

  .CartItem>* {
    margin-right: 0.4rem;
    font-size: 4vw;
  }

  .CartCell--price,
  .CartCell--subtotal {
    font-size: 4vw;
  }

  .modale-cart {
    width: 100%
  }

}

@media only screen and (min-width: 968.5px) {

  .modale-cart {
    width: 80%
  }

  .CartItem>* {
    margin-right: 50px;
  }


  .CartItem img {
    width: 96px;
  }


}

.delete {
  border: 2px solid #000;
  border-radius: 3px;
  background: #e9e9e9;
  cursor: pointer;
  font-size: 15px;
  height: 4vh;
  box-shadow: 2px 3px 0px #9e9e9e;
  box-sizing: border-box;
  font-family: "verdana" !important;
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

.CartListView th,
.CartListView td {
  padding: 0.3rem;
  width: vw;
}

.CartRow {
  border-bottom: 1px solid #cdcdcd;
}

.CartCell--price,
.CartCell--subtotal {
  text-align: right
}

.CartCell--quantity {
  text-align: center;
}

.CartCell--subtotal {
  color: #cb0000;
}

.CartItem {
  display: flex;
  align-items: center;
}

.Total {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 0 0.7rem;
}

.Total-value {
  color: #cb0000;
}

h2 {
  display: flex;
  justify-content: center;
}


.center {
  display: flex;
  justify-content: center;
}

.NumericInput button {
  width: 2rem;
  height: 2rem;
}

.NumericInput-value {
  margin: 0 0.5rem;
}
</style>

