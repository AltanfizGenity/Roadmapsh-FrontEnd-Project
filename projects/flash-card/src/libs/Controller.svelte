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

<style lang="scss">
  @forward "../styles/controller.scss";
</style>
