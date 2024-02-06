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
      const unitTaxPrice = item.unitPrice * item.quantity;
      const unitPreTaxPrice = item.unitPrice * item.quantity;
      item.taxPrice = unitTaxPrice.toFixed(2);
      item.preTaxPrice = unitPreTaxPrice.toFixed(2);
      return true;
    }

  },
})