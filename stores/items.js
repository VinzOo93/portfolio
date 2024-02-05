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
    addOneQuantity(index) {
        this.items[index].quantity++
        return true
    },
    removeOneQuantity(index) {
      this.items[index].quantity--
      return true
  }

  },
})