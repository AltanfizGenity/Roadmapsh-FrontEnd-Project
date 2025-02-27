<script lang="ts">
  let { progressMeter, totalLength }: ProgressBarProps = $props();
</script>

<div class="progress-bar">
  <div class="progress">
    <div class="progress-glow"></div>
    <div class="progress-rect"></div>
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
