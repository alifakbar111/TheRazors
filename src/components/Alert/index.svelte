<script lang="ts">
  import globalStore from "../../stores/globalStore";
  import { fly, fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";

  const handleClose = () => {
    globalStore.toggleItem("alert", false);
  };
  let timeout: number;
  onMount(() => {
    timeout = setTimeout(() => {
      globalStore.toggleItem("alert", false);
    }, 3000);
  });
  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

<div class="container pt-5">
  <div class="columns is-centered is-mobile">
    <div
      class="card is-rounded"
      in:fly={{ y: -200, duration: 1000 }}
      out:fade={{ duration: 0 }}>
      <article
        class="message is-primary"
        class:is-warning={$globalStore.alertWarning}>
        <div class="message-header">
          <p class="is-size-6">Warning</p>
          <button class="delete" aria-label="delete" on:click={handleClose} />
        </div>
        <div class="message-body">
          <p class="is-size-5">{$globalStore.alertText}</p>
        </div>
      </article>
    </div>
  </div>
</div>
