<script lang="ts">
  type FlipButtonProps = {
    onclick?: (event: MouseEvent) => void;
    isOpen: boolean;
  };
  let props: FlipButtonProps = $props();
</script>

<button class="primary-button flip-button controller-button" {...props}>
  {props.isOpen ? "Hide Answer" : "Show Answer"}
</button>
