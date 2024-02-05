import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: []
}),
  actions: {
    registerItems(newData) {
        this.items = [...newData];
    },
    removeItem(itemToRemove) {
      const index = this.items.findIndex(item => item === itemToRemove);
      if (index > -1) {
         this.items.splice(index, 1);
         return true;
      }
    }
  },
})