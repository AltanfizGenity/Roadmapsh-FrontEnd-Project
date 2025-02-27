<script lang="ts">
  import FlipButton from "./FlipButton.svelte";
  import NextButton from "./NextButton.svelte";
  import PreviousButton from "./PreviousButton.svelte";

  type ControllerProps = {
    flipCard: ClickEventHandler;
    changeTest: Function;
    currentTest: Test;
  };

  let { flipCard, currentTest, changeTest }: ControllerProps = $props();
</script>

<div class="controller">
  <PreviousButton onclick={() => changeTest("previous")} />
  <FlipButton onclick={flipCard} {currentTest} />
  <NextButton onclick={() => changeTest("next")} />
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
