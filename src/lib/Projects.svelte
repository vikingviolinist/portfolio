<script lang="ts">
  import { createApi } from 'unsplash-js';
  import { technologies } from '../technologies';
  import DevIcon from './DevIcon.svelte';
  import Section from './Section.svelte';
  import Project from './Project.svelte';
  export let active: boolean;

  const accessKey = '2jacHDYybwpIjozi70jBxq_FdkhUhap37l99qairwI0';
  const unsplash = createApi({ accessKey });
  const promise = unsplash.photos.getRandom({
    query: 'programming',
    count: 6,
  });
</script>

<Section {active} type="Prosjekter">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    {#await promise}
      <p>Loading...</p>
    {:then { response }}
      {#each response as image}
        <Project path={image.urls.small_s3} />
      {/each}
    {/await}
  </div>
  <div class="dev-icons flex justify-center flex-wrap gap-8 pb-20">
    {#each technologies as technology}
      <DevIcon {technology} />
    {/each}
  </div>
</Section>
