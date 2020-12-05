<script lang="ts">
  import {
    About,
    Home,
    Login,
    ProductTemplate,
    Products,
    Cart,
    Checkout,
  } from "./pages";
  import { Navbar, Alert } from "./components";
  import globalStore from "./stores/globalStore";
  import { Router, Route } from "svelte-routing";
</script>

<Router>
  <Navbar />
  {#if $globalStore.alert}
    <Alert />
  {/if}
  <!-- <Alert /> -->
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductTemplate} />
  <Route path="/cart" component={Cart} />
  <Route path="/checkout" component={Checkout} />
</Router>
