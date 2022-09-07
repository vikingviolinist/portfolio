<script lang="ts">
  import { sections } from '../sections';
  import NavBarButton from './NavBarButton.svelte';

  export let toggleActive: (icon: string) => boolean;
  export let selectedIcon: string;
</script>

<div
  class="fixed left-[50%] lg:left-auto bottom-5 lg:top-[50%] lg:right-3 -translate-x-[50%]  lg:-translate-y-[50%] flex lg:flex-col items-center justify-center gap-4 lg:gap-5
        transition-all duration-300 ease-in-out z-10"
>
  {#each sections as { icon, tooltip }}
    <NavBarButton
      active={icon === selectedIcon}
      {toggleActive}
      {tooltip}
      {icon}
    />
  {/each}
</div>
