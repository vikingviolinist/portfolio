<script lang="ts">
  import Tooltip from './Tooltip.svelte';

  export let component;
  export let tooltip: string;
</script>

<div class="group relative flex justify-center">
  <div
    class="w-12 grayscale-[30%] hover:scale-150 hover:grayscale-0 transition-all duration-200 
          ease-in-out group"
  >
    <svelte:component this={component} />
  </div>
  <Tooltip position="bottom-16" origin="bottom" {tooltip} />
</div>
