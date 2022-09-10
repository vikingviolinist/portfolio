<script lang="ts">
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
                group-hover:opacity-100 group-hover:scale-100"
  >
    <h3 class="text-2xl mb-6">Project Source</h3>
    <div class="flex justify-center items-center">
      <Button icon="fab fa-github" link="https://github.com/vikingviolinist" />
    </div>
  </div>
</div>
