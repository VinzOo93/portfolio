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
      item.taxPrice = item.taxPrice * item.quantity;
      item.preTaxPrice = item.preTaxPrice * item.quantity;
      return true;
    }

  },
})