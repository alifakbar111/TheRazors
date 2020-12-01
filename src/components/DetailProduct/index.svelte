<script lang="ts">
  import { link } from "svelte-routing";
  export let product: any;
  const { title, image, price, id } = product;
  export const location: any = "";
</script>

<a href={`/products/${id}`} use:link class="custom-card">
  <div class="card" style="border-radius: 1rem;">
    <div class="card-image">
      <figure class="image is-4by3"><img src={image} alt={title} /></figure>
    </div>
    <div class="content m-3">
      <div class="my-1">
        <p class="is-size-6 has-text-weight-bold">{title}</p>
      </div>
      <div class="my-1 has-text-weight-bold has-text-danger">
        <p class="is-size-6">${price}</p>
      </div>
    </div>
  </div>
</a>
