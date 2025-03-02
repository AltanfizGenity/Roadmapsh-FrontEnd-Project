<script lang="ts">
  let { currentTest, isFlipped }: CardProps = $props();
</script>

<div class="card">
  {#if currentTest}
    <div class="test-board">
      <p class={`test-text ${isFlipped ? "answer" : ""}`}>
        {isFlipped ? currentTest.answer : currentTest.question}
      </p>
    </div>
  {/if}
</div>

<style lang="scss">
  @forward "../styles/card.scss";
</style>
