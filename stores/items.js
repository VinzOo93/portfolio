import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: []
  }),
  actions: {
    registerItems(newData) {
      this.items = [...newData];
    },
  },
})
