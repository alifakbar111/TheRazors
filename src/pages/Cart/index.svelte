<script lang="ts">
  // import { Item } from "../../components";
  // import cart, { cartTotal } from "../../stores/cart";
  // export const location: any = "";
  import { Cart } from "../../containers";
</script>

<Cart />
<!-- <section class="section">
  <div class="container px-6">
    <div class="columns">
      <div class="column is-8">
        {#each $cart as cartItem (cartItem.id)}
          <Item {...cartItem} />
        {:else}
          <h2 class="title is-2">is curently empty...</h2>
        {/each}
      </div>
      <div class="column is-fullwidth pl-5">
        <div class="box">
          <span class="is-size-3">Total:</span>
          <span class="is-size-3 has-tex-danger is-pulled-right">${$cartTotal}</span>
        </div>        
      </div>
    </div>
  </div>
</section> -->
