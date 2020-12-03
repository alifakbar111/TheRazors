<script lang="ts">
  import { CartItem } from "../../components";
  import cart, { cartTotal, setStorageCart } from "../../stores/cart";
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore";
  import user from "../../stores/user";
  import { afterUpdate } from "svelte";
  afterUpdate(() => {
    setStorageCart($cart);
  });
</script>

<section class="section">
  <div class="container px-6">
    <div class="columns">
      <div class="column is-8">
        {#each $cart as cartItem}
          <CartItem {...cartItem} />
        {:else}
          <h2 class="title is-2">is curently empty...</h2>
        {/each}
      </div>
      <div class="column is-fullwidth pl-5">
        <div class="box">
          <div>
            <span class="is-size-3"><strong>Total:</strong></span>
            <span class="is-size-3 is-pulled-right "><p class="has-text-danger">
                ${$cartTotal}
              </p></span>
          </div>
          <hr />
          {#if $user.jwt}
            <a
              href="/checout"
              class="button is-primary is-fullwidth"
              on:click={() => {
                globalStore.toggleItem('cart', false);
              }}
              use:link>Checkout</a>
          {:else}
            <a
              href="/login"
              class="button is-link is-fullwidth"
              on:click={() => {
                globalStore.toggleItem('cart', false);
              }}
              use:link>Login</a>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
