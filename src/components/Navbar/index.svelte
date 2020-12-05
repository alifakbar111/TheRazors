<script lang="ts">
  import NavCartItem from "../NavCartItem/index.svelte";
  import LoginLink from "../LoginLink/index.svelte";
  import cart from "../../stores/cart";
  import links from "../../constants/links";
  import { link } from "svelte-routing";

  let isOpen: boolean = false;
  $: total = $cart.reduce((acc: number, curr: { amount: number }) => {
    return (acc += curr.amount);
  }, 0);
  function toggleNav() {
    isOpen = !isOpen;
  }
</script>

<nav class="navbar px-5" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <p class="navbar-item is-size-4 is-family-secondary">The Razors</p>

    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      role="button"
      class="navbar-burger burger"
      class:is-active={isOpen}
      on:click={toggleNav}
      aria-label="menu"
      aria-expanded="false">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div class="navbar-menu" class:is-active={isOpen}>
    <div class="navbar-start">
      {#each links as navLink}
        <a
          style="text-decoration: none !important;"
          class="navbar-item has-text-black"
          href={navLink.url}
          on:click={toggleNav}
          use:link>
          {navLink.text}
        </a>
      {/each}
      {#if $cart.length === 0}
        <div class="navbar-item is-hoverable">
          <a
            class="navbar-link is-arrowless has-text-dark"
            href="/cart"
            use:link>
            <span class="icon is-small">
              <i class="fas fa-shopping-cart" />
            </span>
          </a>
        </div>
      {:else}
        <div class="navbar-item is-hoverable">
          <a class="navbar-link is-arrowless" href="/cart" use:link>
            <span class="icon is-small">
              <i class="fas fa-shopping-cart" />
              <span class="badge">{total}</span>
            </span>
          </a>
          <div
            class="navbar-dropdown is-hidden-mobile is-boxed is-inline is-mobile">
            <p class="navbar-item is-size-6">cart ({total})</p>
            {#each $cart as cartItem}
              <NavCartItem {...cartItem} />
            {/each}
          </div>
        </div>
      {/if}
    </div>
    <div class="navbar-end">
      <LoginLink />
    </div>
  </div>
</nav>
