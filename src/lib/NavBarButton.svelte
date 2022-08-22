<script lang="ts">
  export let icon: string;
  export let tooltip: string;
  export let toggleActive;
  export let active: boolean = icon === 'home';
</script>

<button
  on:click={toggleActive(icon)}
  class="control p-4 cursor-pointer w-10 lg:w-12 h-10 lg:h-12 rounded-3xl hover:bg-secondary hover:rounded-xl
  transition-all duration-300 ease-linear group flex justify-center items-center
  shadow-[0_3px_15px_rgba(0,0,0,0.3);] {active ? 'bg-secondary' : 'bg-gray-4'}"
>
  <i
    class="fas fa-{icon} text-xl pointer-events-none group-hover:text-white
        {active ? 'text-white' : 'text-gray-2 dark:text-gray-400'}"
  />
  <span
    class="hidden lg:block absolute w-auto p-2 m-2 min-w-max right-14 rounded-md shadow-md
      text-white bg-gray-4 text-xs font-bold
      transition-all duration-300 scale-0 origin-right group-hover:scale-100"
    >{tooltip}</span
  >
</button>
