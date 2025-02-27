<script lang="ts">
  interface FlipButtonProps extends EventProps {
    currentTest: Test;
  }
  let props: FlipButtonProps = $props();
</script>

<button class="primary-button flip-button controller-button" {...props}>
  {props.currentTest.isOpen ? "Hide Answer" : "Show Answer"}
</button>
