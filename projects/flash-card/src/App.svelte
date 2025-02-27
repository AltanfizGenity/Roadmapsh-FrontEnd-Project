<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./libs/Card.svelte";
  import Controller from "./libs/Controller.svelte";
  import ProgressBar from "./libs/ProgressBar.svelte";
  import Timer from "./libs/Timer.svelte";

  let testData: Test[];
  let currentTest: Test;
  let isOpen: boolean;
  let testPosition: number;

  function flipCard() {
    isOpen = !isOpen;
  }

  function nextTest() {
    let newPosition = testPosition + 1;

    if (!testData[newPosition]) {
      console.log(
        "Cannot switch to next test because you already came on last test"
      );
      return;
    }

    currentTest = testData[newPosition];
    testPosition++;
  }

  onMount(async () => {
    try {
      let response = await fetch("/data/test.json");
      let data: Awaited<TestRaw[]> = await response.json();
      testData = data.map((test) => {
        return { id: Date.now().toString(), isOpen: false, ...test };
      });
      testPosition = 1;
      currentTest = testData[testPosition - 1];
      isOpen = currentTest.isOpen;
    } catch (error) {
      console.log(error);
    }
  });
</script>

{#if testData}
  <main class="flash-card">
    <header>
      <Timer />
      <ProgressBar />
    </header>
    <Card testData={currentTest} {isOpen} />
    <Controller {flipCard} {isOpen} {nextTest} />
  </main>
{/if}

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
