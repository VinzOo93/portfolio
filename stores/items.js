import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: []
  }),
  actions: {
    registerItems(newData) {
      this.items = [...newData];
    },
    removeItem(index) {
      this.items.splice(index, 1);
      return true;
    },
    addItem(newItem) {
      this.items.push(newItem);
      return true;
    },
    addOneItemQuantity(index) {
      this.items[index].quantity++
      return true
    },
    removeOneItemQuantity(index) {
      this.items[index].quantity--
      return true
    },
    updateItemPrices(index) {
      const item = this.items[index];
      item.quantity++;
      const taxPrice = item.unitPrice * item.quantity;
      const reTaxPrice = item.unitPreTaxPrice * item.quantity;
      item.taxPrice = taxPrice.toFixed(2);
      item.preTaxPrice = reTaxPrice.toFixed(2);
      return true;
    }
  },
})
