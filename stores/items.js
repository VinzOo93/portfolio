import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: [],
    total: 0,
    shipping: 0
  }),
  actions: {
    registerItems(newData, total, shipping) {
      this.items = [...newData];
      this.total = total;
      this.shipping = shipping;
    },
  },
})
