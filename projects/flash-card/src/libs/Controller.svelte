<script lang="ts">
  import FlipButton from "./FlipButton.svelte";
  import NextButton from "./NextButton.svelte";
  import PreviousButton from "./PreviousButton.svelte";

  type ControllerProps = { flipCard: Function; isOpen: boolean };

  let { flipCard, isOpen }: ControllerProps = $props();
</script>

<div class="controller">
  <PreviousButton />
  <FlipButton onclick={() => flipCard()} {isOpen} />
  <NextButton />
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
