<script lang="ts">
  export let id: number;
  export let title: string;
  export let price: number;
  export let image: string;
  export let amount: number;
  import {
    increaseAmount,
    decreaseAmount,
    removeItem,
  } from "../../stores/cart";
</script>

<div class="media">
  <figure class="media-left">
    <p class="image is-64x64"><img src={image} alt={title} /></p>
  </figure>
  <div class="media-content">
    <h4 class="is-size-4">{title}</h4>
    <h5 class="is-size-5 has-text-danger">$ {price}</h5>
    <div class="level is-mobile">
      <div class="level-left" />
      <div class="level-left is-inline-flex">
        <div class="level-item">
          <span
            class="button icon has-text-grey-light is-medium"
            on:click={() => {
              removeItem(id);
            }}
            style="border: none !important;">
            <i class="fas fa-trash" />
          </span>
        </div>
        <div class="level-item">
          <button
            class="button icon has-text-primary is-medium"
            on:click={() => {
              decreaseAmount(id);
            }}
            disabled={amount <= 1}
            style="border: none !important;">
            <i class="fas fa-minus-circle" />
          </button>
        </div>
        <div class="level-item">
          <p class="is-size-6">{amount}</p>
        </div>
        <div class="level-item">
          <button
            class="button icon has-text-primary is-medium"
            on:click={() => {
              increaseAmount(id);
            }}
            style="border: none !important;">
            <i class="fas fa-plus-circle" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
