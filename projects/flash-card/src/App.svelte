<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./libs/Card.svelte";
  import Controller from "./libs/Controller.svelte";
  import ProgressBar from "./libs/ProgressBar.svelte";
  import Timer from "./libs/Timer.svelte";

  let testData = $state<Test[]>([]);
  let index = $state<number>(0);
  let isFlipped = $state<boolean>(false);
  let currentTest = $derived<Test>(testData[index]);
  let progressMeter = $derived<number>(
    testData.filter((test) => test.isOpen).length
  );
  let timer = $state<number>(0);

  onMount(async () => {
    try {
      let response = await fetch("/data/test.json");
      let data: Awaited<TestRaw[]> = await response.json();
      testData = data.map((test, index) => {
        return { id: Date.now().toString() + index, isOpen: false, ...test };
      });
      index = 0;
      timerStart();
    } catch (error) {
      console.log(error);
    }
  });

  function flipCard() {
    isFlipped = !isFlipped;

    if (currentTest.isOpen) {
      return;
    }

    let updatedData: Partial<Test> = { isOpen: !currentTest.isOpen };
    let updatedTest = { ...currentTest, ...updatedData };
    testData = testData.map((test) => {
      if (test.id === updatedTest.id) {
        return updatedTest;
      }
      return test;
    });
  }

  function changeTest(direction: "next" | "previous") {
    let newIndex = direction == "next" ? index + 1 : index - 1;

    if (newIndex < 0 || newIndex > testData.length - 1) {
      console.log(
        direction == "next" ? "reached last test" : "reached first test"
      );
      return;
    }

    isFlipped = false;
    index = newIndex;
  }

  function timerStart() {
    let intervalID: number = setInterval(() => {
      timer += 1;
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }
</script>

{#if testData && currentTest}
  <main class="flash-card">
    <header>
      <Timer {timer} />
      <ProgressBar {...{ progressMeter, totalLength: testData.length }} />
    </header>
    <Card {...{ currentTest, isFlipped }} />
    <Controller {...{ currentTest, flipCard, changeTest, isFlipped }} />
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
