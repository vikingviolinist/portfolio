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
  class="fixed top-[50%] right-8 flex flex-col items-center justify-center -translate-y-[50%] gap-5"
>
  {#each icons as { icon, tooltip }}
    <NavBarButton
      {icon}
      {tooltip}
      {toggleActive}
      active={icon === selectedIcon}
    />
  {/each}
</div>
