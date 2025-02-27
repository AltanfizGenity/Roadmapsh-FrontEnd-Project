<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./libs/Card.svelte";
  import Controller from "./libs/Controller.svelte";
  import ProgressBar from "./libs/ProgressBar.svelte";
  import Timer from "./libs/Timer.svelte";

  let testData = $state<Test[]>([]);
  let index = $state<number>(0);
  let currentTest = $derived<Test>(testData[index]);

  onMount(async () => {
    try {
      let response = await fetch("/data/test.json");
      let data: Awaited<TestRaw[]> = await response.json();
      testData = data.map((test, index) => {
        return { id: Date.now().toString() + index, isOpen: false, ...test };
      });
      index = 0;
    } catch (error) {
      console.log(error);
    }
  });

  function flipCard() {
    let updatedData: Partial<Test> = { isOpen: !currentTest.isOpen };
    let updatedTest = { ...currentTest, ...updatedData };
    testData = testData.map((test) => {
      if (test.id === updatedTest.id) {
        return updatedTest;
      }
      return test;
    });
  }
</script>

{#if testData && currentTest}
  <main class="flash-card">
    <header>
      <Timer />
      <ProgressBar />
    </header>
    <Card {currentTest} />
    <Controller {...{ currentTest, flipCard }} />
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
