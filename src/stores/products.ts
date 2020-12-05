import { derived, writable } from "svelte/store";
import getProducts from "../strapi/getProducts";
import url from "../strapi/URL";
import type { ProductType } from "../types/product.type";

const store = writable([], () => {
  setProducts();
  return () => { };
});
async function setProducts() {
  let products = await getProducts();
  if (products) {
    products = flattenProducts(products);
    store.set(products);
  }
}
// subscribe
// set
// update
function flattenProducts(data: ProductType[]) {
  return data.map(item => {
    let image: string = item.image.url;
    // let image = `${url}${item.image.url}`;
    return { ...item, image };
  })
}

export const featuredStore = derived(store, $featured => {
  return $featured.filter(item => item.featured === true);
});

export default store;