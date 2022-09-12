<script lang="ts">
  import Go from './icons/Go.svelte';
  import React from './icons/React.svelte';
  import Svelte from './icons/Svelte.svelte';
  import Button from './Button.svelte';

  export let path: string;
</script>

<div class="relative group">
  <div class="image">
    <img
      class="w-full h-72 object-cover rounded-2xl"
      src={path}
      alt="Project 1"
    />
  </div>
  <div
    class="w-full h-full bg-secondary absolute left-0 top-0 
                rounded-2xl flex flex-col justify-center items-center
                opacity-0 scale-0 transition-all duration-500 ease-in-out
                group-hover:opacity-80 group-hover:scale-100"
  >
    <div class="flex justify-center items-center">
      <Button icon="fa fa-rocket" link="https://github.com/vikingviolinist" />
      <Button icon="fab fa-github" link="https://github.com/vikingviolinist" />
    </div>
    <div
      class="absolute flex justify-start flex-wrap gap-2 w-full p-1 bottom-0"
    >
      <span class="w-8"> <Go /></span>
      <span class="w-8"><React /></span>
      <span class="w-8"><Svelte /></span>
      <span class="w-8"> <Go /></span>
      <span class="w-8"><React /></span>
      <span class="w-8"><Svelte /></span>
      <span class="w-8"> <Go /></span>
      <span class="w-8"><React /></span>
      <span class="w-8"><Svelte /></span>
    </div>
  </div>
</div>
