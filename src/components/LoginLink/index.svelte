<script lang="ts">
  import user from "../../stores/user";
  import { link } from "svelte-routing";
</script>

{#if $user.jwt}
  <a
    href="/"
    style="text-decoration: none !important;"
    class="navbar-item has-text-black"
    use:link>Logout</a>
{:else}
  <a
    href="/login"
    style="text-decoration: none !important;"
    class="navbar-item has-text-black"
    use:link>Login</a>
{/if}
