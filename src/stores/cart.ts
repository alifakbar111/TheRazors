import { writable, derived } from "svelte/store";
// import localCart from "../localCart";
import { navigate } from "svelte-routing";
import type { productItem } from "../types/item.type"

const cart = writable(getStorageCart());

export const cartTotal = derived(cart, $cart => {
  let total = $cart.reduce((acc: number, curr: { amount: number; price: number; }) => {
    return (acc += curr.amount * curr.price);
  }, 0);
  return total.toFixed(2);
});
const remove = (id: number, items: productItem[]) => {
  return items.filter(item => item.id !== id);
};

const toggleAmount = (id: number, items: productItem[], action: string) => {
  return items.map(item => {
    let newAmount: number;
    if (action === "inc") {
      newAmount = item.amount + 1;
    } else if (action === "dec") {
      newAmount = item.amount - 1;
    } else {
      newAmount = item.amount;
    }
    return item.id === id ? { ...item, amount: newAmount } : { ...item };
  });
};
export const removeItem = (id: number) => {
  cart.update(storeValue => {
    return remove(id, storeValue);
  });
};
export const increaseAmount = (id: number) => {
  cart.update(storeValue => {
    return toggleAmount(id, storeValue, "inc");
  });
};
export const decreaseAmount = (id: number) => {
  cart.update(storeValue => {
    let item = storeValue.find((item: { id: number; }) => item.id === id);
    let cart: any[];
    if (item.amount === 1) {
      cart = remove(id, storeValue);
    } else {
      cart = toggleAmount(id, storeValue, "dec");
    }
    return [...cart];
  });
};
export const addToCart = (id: number, product: any) => {
  cart.update(storeValue => {
    let item = storeValue.find((item: { id: number; }) => item.id === id);
    let cart: any[];
    if (item) {
      cart = toggleAmount(id, storeValue, "inc");
      navigate("/cart");
    } else {
      const { id, image, title, price } = product;
      let newItem = { id, image, title, price, amount: 1 };
      cart = [...storeValue, newItem];
      navigate("/cart");
    }
    return [...cart];
  });
};
// localStorage
function getStorageCart() {
  return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
}
export function setStorageCart(cartValues: any) {
  localStorage.setItem("cart", JSON.stringify(cartValues));
}
export default cart;