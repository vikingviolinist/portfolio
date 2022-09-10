<script lang="ts">
  import Tooltip from './Tooltip.svelte';

  export let icon: string;
  export let tooltip: string;
  export let toggleActive;
  export let active: boolean = icon === 'home';
</script>

<button
  on:click={toggleActive(icon)}
  class="control p-6 cursor-pointer w-10 lg:w-12 h-10 lg:h-12 rounded-3xl hover:bg-secondary hover:rounded-xl
  transition-all duration-300 ease-linear group flex justify-center items-center
  shadow-[0_3px_15px_rgba(0,0,0,0.3);] {active ? 'bg-secondary' : 'bg-gray-4'}"
>
  <i
    class="fas fa-{icon} text-xl pointer-events-none group-hover:text-white
        {active ? 'text-white' : 'text-gray-2 dark:text-gray-400'}"
  />
  <Tooltip position="right-14" origin="right" {tooltip} />
</button>
