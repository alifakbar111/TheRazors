<script lang="ts">
  import type { AxiosResponse } from "axios";
  import { navigate } from "svelte-routing";
  import loginUser from "../../strapi/loginUser";
  import registerUser from "../../strapi/registerUser";
  import globalStore from "../../stores/globalStore";

  let email: string = "";
  let password: string = "";
  let username: string = "default";
  let isMember: boolean = true;
  // add alert
  $: isEmpty = !email || !password || !username || $globalStore.alert;
  function toggleMember() {
    isMember = !isMember;
    if (!isMember) {
      username = "";
    } else {
      username = "default";
    }
  }
  async function handleSubmit() {
    // add alert
    let user: void | AxiosResponse<any>;
    if (isMember) {
      user = await loginUser({ email, password });
    } else {
      user = await registerUser({ email, password, username });
    }
    console.log(user);
    if (user) {
      navigate("/products");
      return;
    }
    // add alert
    globalStore.toggleItem(
      "alert",
      true,
      "There was an error ! \n Please try again",
      true
    );
  }
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<section class="section">
  <div class="container">
    <h2 class="title is-2 has-text-centered is-family-secondary">
      {#if isMember}sign in{:else}register{/if}
    </h2>
    <div class="columns is-centered">
      <article class="card is-rounded">
        <div class="card-content">
          <form on:submit|preventDefault={handleSubmit}>
            <div class="field">
              <label class="label">Email</label>
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="email"
                  placeholder="e.g. unclejhon@gmail.com"
                  bind:value={email} />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope" />
                </span>
              </p>
            </div>
            <div class="field">
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="label">Password</label>
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="password"
                  placeholder="*******"
                  bind:value={password} />
                <span class="icon is-small is-left">
                  <i class="fas fa-key" />
                </span>
              </p>
            </div>
            {#if !isMember}
              <div class="field">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">Username</label>
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="e.g unclejhon"
                    bind:value={username} />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user" />
                  </span>
                </p>
              </div>
            {/if}
            {#if isEmpty}
              <p class="is-size-6 has-text-danger has-text-centered pb-3">
                please fill out all form field
              </p>
            {/if}
            <button
              class="button is-link is-fullwidth"
              type="submit"
              disabled={isEmpty}>submit</button>
            {#if isMember}
              <p class="is-size-6">
                need to register?
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={toggleMember}>click here</a>
              </p>
            {:else}
              <p class="is-size-6">
                already a member?
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={toggleMember}>click here</a>
              </p>
            {/if}
          </form>
        </div>
      </article>
    </div>
  </div>
</section>
