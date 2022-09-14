<script lang="ts">
  import * as icons from './icons';
  import DevIcon from './DevIcon.svelte';
  import Section from './Section.svelte';
  import Project from './Project.svelte';

  export let active: boolean;
  export let projects;
  export let images;
</script>

<Section {active} type="Prosjekter">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    {#if images instanceof Array && projects instanceof Array}
      {#each projects as project, index}
        <Project
          {project}
          path={images[index].urls.small}
          icons={project.topics
            .filter((icon) => icon !== 'portfolio')
            .map((icon) => ({ component: icons[icon] }))}
        />
      {/each}
    {/if}
  </div>
  <div class="dev-icons flex justify-center flex-wrap gap-8 pb-20">
    {#each Object.keys(icons) as icon}
      <DevIcon component={icons[icon]} tooltip={icon} />
    {/each}
  </div>
</Section>
