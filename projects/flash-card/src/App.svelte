<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./libs/Card.svelte";
  import Controller from "./libs/Controller.svelte";
  import ProgressBar from "./libs/ProgressBar.svelte";
  import Timer from "./libs/Timer.svelte";
</script>

<main class="flash-card">
  <Timer />
  <ProgressBar />
  <Card />
  <Controller />
</main>

<style>
  .flash-card {
    width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    background-color: var(--background);
  }
</style>
