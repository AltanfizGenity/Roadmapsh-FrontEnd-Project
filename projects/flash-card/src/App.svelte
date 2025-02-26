<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./libs/Card.svelte";
  import Controller from "./libs/Controller.svelte";
  import ProgressBar from "./libs/ProgressBar.svelte";
  import Timer from "./libs/Timer.svelte";
</script>

<main class="flash-card">
  <header>
    <Timer />
    <ProgressBar />
  </header>
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

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
  }
</style>
