<script lang="ts">
  import { About, Home, Login, ProductTemplate, Products, Cart } from "./pages";
  import { Navbar } from "./components";
  import { Router, Route } from "svelte-routing";
</script>

<!-- <h1 class="title is-1">Hello World</h1> -->
<Router>
  <Navbar />
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductTemplate} />
  <Route path="/cart" component={Cart} />
</Router>
