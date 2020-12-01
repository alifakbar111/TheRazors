import { derived, writable } from "svelte/store";
import localProducts from '../localProducts';
import type { ProductType } from "../types/product.type";
const storeProducts = writable(flattenProducts([...localProducts]));

// subscribe
// set
// update
function flattenProducts(data: ProductType[]) {
  return data.map(item => {
    let image: string = item.image.url;
    return { ...item, image };
  })
}

export const featuredStore = derived(storeProducts, $featured => {
  return $featured.filter(item => item.featured === true);
});

export default storeProducts;