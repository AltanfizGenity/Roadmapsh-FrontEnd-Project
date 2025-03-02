<script lang="ts">
  let { progressMeter, totalLength }: ProgressBarProps = $props();
  $inspect(progressMeter, totalLength);
</script>

<div class="progress-bar">
  <div class="progress">
    <div
      class="progress-glow"
      style:width={`${(progressMeter / totalLength) * 100}%`}
    ></div>
    <div
      class="progress-rect"
      style:width={`${(progressMeter / totalLength) * 100}%`}
    ></div>
  </div>
  <div class="indicator">{progressMeter} of {totalLength}</div>
</div>

<style lang="scss">
  @forward "../styles/progressbar.scss";
</style>
