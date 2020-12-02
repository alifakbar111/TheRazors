<script lang="ts">
  import storeProducts from "../../stores/products";
  import { Loading } from "../../components";
  import { addToCart } from "../../stores/cart";
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore";
  export let id: string;
  export const location: any = "";
  $: productItem = $storeProducts.find((item) => item.id === parseInt(id));
</script>

<svelte:head>
  <title>{!productItem ? 'Product Detail' : productItem.title}</title>
</svelte:head>
{#if !productItem}
  <Loading />
{:else}
  <section class="section">
    <a href="/products" class="button" use:link>
      <span class="icon is-vcentered"> <i class="fas fa-chevron-left" /> </span>
      <span>back</span>
    </a>
    <div class="container">
      <div class="columns is-gapless">
        <div class="column has-text-centered">
          <img src={productItem.image} alt={productItem.title} />
        </div>
        <div class="column">
          <h1 class="title is-1 is-uppercase">{productItem.title}</h1>
          <h3 class="title is-3 has-text-danger has-text-weight-bold ">
            ${productItem.price}
          </h3>
          <p class="is-size-5">{productItem.description}</p>
          <button
            class="button is-link has-text-weight-bold is-medium"
            on:click={() => {
              addToCart(parseInt(id), productItem);
              globalStore.toggleItem('cart', true);
            }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </section>
{/if}
