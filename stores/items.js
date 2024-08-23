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
    }
  },
})
