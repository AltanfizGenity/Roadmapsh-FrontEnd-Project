<script lang="ts">
  type CardProps = { testData: Test; isOpen: boolean };
  let { testData, isOpen }: CardProps = $props();
</script>

<div class="card">
  <div class="test-board">
    <p class={`test-text ${isOpen ? "answer" : "question"}`}>
      {isOpen ? testData.answer : testData.question}
    </p>
  </div>
</div>

<style>
  .card {
    width: 100%;
    height: 36rem;
    background-color: #fff;
    border: 1px solid black;
    border-radius: var(--radius);
    padding: 4rem;
  }

  .test-board {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .test-text {
    font-size: 2rem;
    text-align: center;
    line-height: 1.5;

    &.answer {
      font-size: 1.5rem;
    }
  }
</style>
