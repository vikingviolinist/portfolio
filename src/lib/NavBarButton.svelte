<script lang="ts">
  export let icon: string;
  export let toggleActive;
  export let active: boolean = icon === 'home';
</script>

<button
  on:click={toggleActive(icon)}
  class="control p-4 cursor-pointer w-14 h-14 rounded-full
  shadow-[0_3px_15px_rgba(0,0,0,0.3);] {active ? 'bg-secondary' : 'bg-gray-4'}"
>
  <i
    class="fas fa-{icon} text-xl pointer-events-none ${active
      ? 'text-white'
      : 'text-gray-2 dark:text-gray-400'}"
  />
</button>
