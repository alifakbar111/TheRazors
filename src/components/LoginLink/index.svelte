<script lang="ts">
  import userStorage from "../../stores/user";
  import { logoutUser } from "../../stores/user";
  import { link } from "svelte-routing";
</script>

{#if $userStorage.jwt}
  <a
    href="/"
    style="text-decoration: none !important;"
    class="navbar-item has-text-black"
    on:click={() => {
      logoutUser();
    }}
    use:link>Logout</a>
{:else}
  <a
    href="/login"
    style="text-decoration: none !important;"
    class="navbar-item has-text-black"
    use:link>Login</a>
{/if}
