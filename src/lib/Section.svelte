<script lang="ts">
  export let active: boolean = false;
  export let type: string;

  const title: string = type === 'Prosjekter' ? 'Mine' : 'Min';
</script>

<section
  class="min-h-screen px-8 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 {active
    ? 'animate-scale'
    : 'hidden'}"
>
  <div class="text-center">
    {#if type !== 'Kontakt'}
      <h2 class="uppercase text-white text-3xl lg:text-6xl relative font-bold">
        {title}
        <span
          class="text-gray-500 dark:text-gray-5 hidden lg:block lg:text-7xl absolute top-1/2 left-1/2 font-extrabold w-full -z-10 -translate-x-1/2 -translate-y-1/2"
          >{title}
        </span>
      </h2>
    {/if}
    <h2
      class="uppercase text-3xl lg:text-6xl font-bold relative text-primary dark:text-secondary"
    >
      {type}
      <span
        class="text-gray-500 dark:text-gray-5 hidden lg:block lg:text-7xl absolute top-1/2 left-1/2 font-extrabold w-full -z-10 -translate-x-1/2 -translate-y-1/2"
        >{type}</span
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

  <slot />
</section>
