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

<style>
  .progress-bar {
    position: relative;
    width: 100%;
    height: 48px;
    border: 1px solid #000;
    border-radius: var(--radius);
    background-color: #fff;
  }

  .progress {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: inherit;

    .progress-rect {
      width: 100%;
      height: 100%;
      background-color: var(--accent);
      border-radius: inherit;
      transition: 0.5s ease;
      transform-origin: left;
    }

    .progress-glow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--accent);
      border-radius: inherit;
      filter: blur(25px);
      z-index: 100;
      transition: 0.5s ease;
      transform-origin: left;
    }
  }

  .indicator {
    position: absolute;
    top: 50%;
    right: 2.5%;
    translate: 0 -50%;
    z-index: 100;
  }
</style>
