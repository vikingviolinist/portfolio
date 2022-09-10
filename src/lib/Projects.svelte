<script lang="ts">
  import { technologies } from '../technologies';
  import DevIcon from './DevIcon.svelte';
  import Section from './Section.svelte';
  import Project from './Project.svelte';
  export let active: boolean;
</script>

<Section {active} type="Prosjekter">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    <Project path="./images/port1.jpeg" />
    <Project path="./images/port2.jpeg" />
    <Project path="./images/port3.jpeg" />
    <Project path="./images/port5.jpeg" />
    <Project path="./images/port6.jpeg" />
    <Project path="./images/port7.jpeg" />
  </div>
  <div class="dev-icons flex justify-center flex-wrap gap-8 pb-20">
    {#each technologies as technology}
      <DevIcon {technology} />
    {/each}
  </div>
</Section>
