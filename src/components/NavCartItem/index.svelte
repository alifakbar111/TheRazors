<script lang="ts">
  export let id: number = null;
  export let title: string = "";
  export let price: number = null;
  export let image: string = "";
  export const amount: number = null;
</script>

<hr class="navbar-divider" />
<a class="navbar-item" href={`/products/${id}`}>
  <div class="media">
    <div class="media-left"><img src={image} alt={title} /></div>
    <div class="media-content">
      <p class="is-size-6"><strong>{title}</strong></p>
    </div>
    <div class="media-right">
      <p class="is-size-6">$ {price}</p>
    </div>
  </div>
</a>
