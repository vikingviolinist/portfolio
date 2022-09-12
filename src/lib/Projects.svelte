<script lang="ts">
  import { technologies } from '../technologies';
  import DevIcon from './DevIcon.svelte';
  import Section from './Section.svelte';
  import Project from './Project.svelte';
  export let active: boolean;
  export let images;
</script>

<Section {active} type="Prosjekter">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    {#if images instanceof Array}
      {#each images as image}
        <Project path={image.urls.small} />
      {/each}
    {/if}
  </div>
  <div class="dev-icons flex justify-center flex-wrap gap-8 pb-20">
    {#each technologies as technology}
      <DevIcon {technology} />
    {/each}
  </div>
</Section>
