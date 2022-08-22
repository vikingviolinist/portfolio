<script lang="ts">
  import NavBarButton from './NavBarButton.svelte';

  const icons = [
    { icon: 'home', tooltip: 'Home' },
    { icon: 'briefcase', tooltip: 'Work' },
    { icon: 'user-graduate', tooltip: 'Education' },
    { icon: 'laptop', tooltip: 'Projects' },
    { icon: 'envelope', tooltip: 'Contact' },
  ];
  let selectedIcon: string = 'home';

  const toggleActive = (icon) => (selectedIcon = icon);
</script>

<div
  class="fixed left-[50%] lg:left-auto bottom-5 lg:top-[50%] lg:right-3 -translate-x-[50%]  lg:-translate-y-[50%] flex lg:flex-col items-center justify-center gap-3 lg:gap-5
        transition-all duration-300 ease-in-out"
>
  {#each icons as { icon, tooltip }}
    <NavBarButton
      active={icon === selectedIcon}
      {toggleActive}
      {tooltip}
      {icon}
    />
  {/each}
</div>
