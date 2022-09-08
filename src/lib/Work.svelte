<script lang="ts">
  import DevIcon from '../lib/DevIcon.svelte';
  import { technologies } from '../technologies';
  import { jobs } from '../jobs';

  import TimelineItem from './TimelineItem.svelte';

  export let active: boolean;
</script>

<section
  class="min-h-screen px-8 lg:px-72 py-10 lg:py-12 {active
    ? 'animate-scale'
    : 'hidden'}"
  id="experience"
>
  <div class="text-center">
    <h2 class="uppercase text-3xl lg:text-6xl relative font-bold">
      Min <h2 class="text-secondary">Arbeidserfaring</h2>
      <span
        class="text-gray-5 hidden lg:block lg:text-7xl absolute top-1/2 left-1/2 font-extrabold w-full -z-10 -translate-x-1/2 -translate-y-1/2"
        >min <br />arbeidserfaring</span
      >
    </h2>
  </div>
  <div class="py-8">
    <div class="text-justify">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
        provident eaque vel doloremque totam tenetur atque ut unde quidem maxime
        quae cumque eveniet deserunt dolores facilis neque quia id! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Maiores, illo provident
        eaque vel doloremque totam tenetur atque ut unde quidem maxime quae
        cumque eveniet deserunt dolores facilis neque quia id!
      </p>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
    {#each jobs as job}
      <TimelineItem {job} />
    {/each}
  </div>

  <div class="dev-icons flex justify-center flex-wrap gap-8 pb-20">
    {#each technologies as technology}
      <DevIcon {technology} />
    {/each}
  </div>
</section>
