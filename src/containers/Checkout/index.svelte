<script lang="ts">
  import { onMount } from "svelte";
  import { navigate, link } from "svelte-routing";
  import user from "../../stores/user";
  import cart, { cartTotal } from "../../stores/cart";
  import type { AxiosResponse } from "axios";
  import globalStore from "../../stores/globalStore";
  import submitOrders from "../../strapi/submitOrders";

  let name: string = "";
  let avatar: any;
  let fileinput: any;
  let image: File;

  $: isEmpty = !name || !image;
  onMount(() => {
    if (!$user.jwt) {
      navigate("/");
    }
  });

  const onFileSelected = (e: any) => {
    image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      avatar = e.target.result;
    };
    console.log(image);
  };

  async function handleSubmit() {
    let order = await submitOrders({
      name,
      total: $cartTotal,
      items: $cart,
      image,
      userToken: $user.jwt,
    });
    if (order) {
      globalStore.toggleItem("alert", true, "your order is complete!");
      cart.set([]);
      localStorage.setItem("cartStorage", JSON.stringify([]));
      navigate("/");
      return;
    } else {
      globalStore.toggleItem(
        "alert",
        true,
        "there was an error with your order. please try again",
        true
      );
    }
  }
</script>

<div class="section">
  <div class="container">
    {#if $cartTotal > 0}
      <h2 class="title is-2 has-text-centered is-family-secondary">Checkout</h2>
      <div class="columns is-centered">
        <article class="card is-rounded">
          <div class="card-content">
            <form on:submit|preventDefault={handleSubmit}>
              <p class="is-size-4">
                Total:
                <strong class="is-size-4 has-text-danger">${$cartTotal}</strong>
              </p>
              <hr />
              <div class="field">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">Your name</label>
                <p class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="uncle jhon"
                    bind:value={name} />
                </p>
              </div>
              <div class="file">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="resume"
                    on:change={(e) => onFileSelected(e)}
                    bind:this={fileinput} />
                  <span class="file-cta">
                    <span class="file-icon"> <i class="fas fa-upload" /> </span>
                    <span class="file-label"> Upload payment </span>
                  </span>
                </label>
              </div>
              {#if avatar}
                <div class="py-3">
                  <figure class="image is-9by16">
                    <img src={avatar} alt="uploaded-media" />
                  </figure>
                </div>
              {/if}
              <!-- stripe setup -->
              {#if isEmpty}
                <p class="is-size-6 has-text-danger">
                  Please fill out name field
                </p>
              {/if}
              <button
                class="button is-link is-fullwidth"
                type="submit"
                disabled={isEmpty}>Submit</button>
            </form>
          </div>
        </article>
      </div>
    {:else}
      <div class="has-text-centered">
        <p class="is-size-4">
          Sorry your cart is empty
          <a href="/products" use:link>fill it</a>
        </p>
      </div>
    {/if}
  </div>
</div>
