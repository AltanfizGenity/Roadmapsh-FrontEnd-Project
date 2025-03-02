<script lang="ts">
  import FlipButton from "./FlipButton.svelte";
  import NextButton from "./NextButton.svelte";
  import PreviousButton from "./PreviousButton.svelte";

  let {
    flipCard,
    currentTest,
    changeTest,
    isFlipped,
    testData,
    testIndex,
  }: ControllerProps = $props();

  function canForward() {
    if (testIndex == testData.length - 1) {
      return false;
    }

    return true;
  }

  function canBack() {
    if (testIndex == 0) {
      return false;
    }

    return true;
  }
</script>

<div class="controller">
  <PreviousButton
    onclick={() => {
      if (canBack()) {
        changeTest("previous");
      }
    }}
    index={testIndex}
  />
  <FlipButton onclick={flipCard} {isFlipped} />
  <NextButton
    onclick={() => {
      if (canForward()) {
        changeTest("next");
      }
    }}
    {...{ testData, index: testIndex, isOpen: currentTest.isOpen }}
  />
</div>

<style lang="scss">
  @forward "../styles/controller.scss";
</style>
