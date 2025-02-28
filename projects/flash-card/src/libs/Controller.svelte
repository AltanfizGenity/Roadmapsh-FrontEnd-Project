<script lang="ts">
  import FlipButton from "./FlipButton.svelte";
  import NextButton from "./NextButton.svelte";
  import PreviousButton from "./PreviousButton.svelte";

  let { flipCard, currentTest, changeTest, isFlipped }: ControllerProps =
    $props();
</script>

<div class="controller">
  <PreviousButton onclick={() => changeTest("previous")} />
  <FlipButton onclick={flipCard} {isFlipped} />
  <NextButton onclick={() => changeTest("next")} isOpen={currentTest.isOpen} />
</div>

<style>
  .controller {
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: var(--radius);
  }
</style>
