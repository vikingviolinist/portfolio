<script lang="ts">
  import Button from './Button.svelte';

  export let path: string;
  export let project;
  export let icons = [];
</script>

<div class="relative group">
  <div class="relative flex justify-center items-center ">
    <h1 class="absolute mb-32 text-xl font-bold z-10">{project.name}</h1>
    <img
      class="w-full h-72 object-cover rounded-2xl grayscale-[70%]"
      src={path}
      alt={project.name}
    />
  </div>
  <div
    class="w-full h-full bg-secondary absolute left-0 top-0 
                rounded-2xl flex flex-col justify-center items-center
                opacity-0 scale-0 transition-all duration-500 ease-in-out
                group-hover:opacity-80 group-hover:scale-100"
  >
    <div class="flex justify-center items-center">
      {#if project.homepage}
        <Button icon="fa fa-rocket" link={project.homepage} />
      {/if}
      <Button icon="fab fa-github" link={project.url} />
    </div>
    <div
      class="absolute flex justify-start flex-wrap gap-2 w-full p-1 bottom-0"
    >
      {#each icons as icon}
        <span class="w-8">
          <svelte:component this={icon.component} />
        </span>
      {/each}
    </div>
  </div>
</div>
