<script lang="ts">
  let props: PreviousButtonProps = $props();
</script>

<button
  class={`previous-button ${props.index == 0 ? "disabled" : ""}`}
  {...props}
>
  <div class="icon previous-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
      ><path
        d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
      /></svg
    >
  </div>
  <p>Previous</p>
</button>
