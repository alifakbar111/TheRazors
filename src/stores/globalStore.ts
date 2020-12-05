import { writable } from "svelte/store";

const globalStore = writable({
  cart: false,
  alert: false,
  alertText: "default alert",
  alertWarning: false
})

const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (item: string, value: boolean, alertText = "default", alertWarning = false) => {
    if (item === "alert") {
      globalStore.update(storeValues => {
        return { ...storeValues, [item]: value, alertText, alertWarning };
      });
    } else {
      globalStore.update(storeValues => {
        return { ...storeValues, [item]: value };
      });
    }
  }
}

export default store;