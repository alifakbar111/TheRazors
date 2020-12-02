<script lang="ts">
  import { DetailProduct, Loading } from "../../components";
  import storeProducts from "../../stores/products";
  export let title: string = "";
  export const location: any = "";
</script>

<section class="section">
  <div class="container">
    <h2 class="title is-2 has-text-centered is-family-secondary">{title}</h2>
    <div class="columns is-mobile is-multiline">
      {#each $storeProducts as product (product.id)}
        <div class="column is-2-desktop is-3-tablet is-6-mobile is-6-touch">
          <DetailProduct {product} />
        </div>
      {:else}
        <Loading />
      {/each}
    </div>
  </div>
</section>
