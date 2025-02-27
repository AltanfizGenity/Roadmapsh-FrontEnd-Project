<script lang="ts">
  let props: FlipButtonProps = $props();
</script>

<button class="primary-button flip-button controller-button" {...props}>
  {props.isFlipped ? "Hide Answer" : "Show Answer"}
</button>
