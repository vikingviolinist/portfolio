<script lang="ts">
  import TimelineItem from './TimelineItem.svelte';
  import { jobs } from '../jobs';
  import Section from './Section.svelte';

  export let active: boolean;
</script>

<Section {active} type="Utdanning">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
    {#each jobs as job}
      <TimelineItem {job} />
    {/each}
  </div>
</Section>
