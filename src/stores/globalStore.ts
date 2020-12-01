import { writable } from "svelte/store";

const globalStore = writable({
  cart: false
})

const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (item: string, value: boolean) => {
    globalStore.update(storeValues => {
      return { ...storeValues, [item]: value };
    });
  }
}

export default store;