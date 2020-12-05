<script lang="ts">
  import { DetailProduct, Loading } from "../../components";
  import { featuredStore } from "../../stores/products";
  export let title: string = "";
</script>

{#if $featuredStore.length === 0}
  <Loading />
{:else}
  <section class="section has-background-white-ter pt-5">
    <div class="container">
      <h2 class="title is-2 has-text-centered is-family-secondary">{title}</h2>
      <div class="columns is-mobile is-multiline is-centered">
        {#each $featuredStore as product (product.id)}
          <div class="column is-2-desktop is-3-tablet is-6-mobile is-6-touch">
            <DetailProduct {product} />
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}
