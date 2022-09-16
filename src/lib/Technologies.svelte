<script lang="ts">
  import * as icons from './icons/index';
  import DevIcon from './DevIcon.svelte';
  import Section from './Section.svelte';

  export let active: boolean;
</script>

<Section {active} type="Tech Stack">
  <div class="dev-icons flex justify-center flex-wrap gap-8 pb-20">
    {#each Object.keys(icons) as icon}
      <DevIcon component={icons[icon]} tooltip={icon} />
    {/each}
  </div>
</Section>
