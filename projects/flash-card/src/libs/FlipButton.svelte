<script lang="ts">
  let props: FlipButtonProps = $props();
</script>

<button class="flip-button" {...props}>
  {props.isFlipped ? "Hide Answer" : "Show Answer"}
</button>
