<script lang="ts">
  import { Hero } from "../../components";
  import { FeaturedProd } from "../../containers";
  import { link } from "svelte-routing";
  export const location: any = "";
</script>

<Hero><a href="/products" class="button is-outlined is-inverted is-link" use:link>Shop Now</a></Hero>
<FeaturedProd title="Featured Products"/>
