<script lang="ts">
  import NavBarButton from './NavBarButton.svelte';

  let selectedIcon: string = 'home';

  const toggleActive = (icon) => (selectedIcon = icon);
</script>

<div
  class="fixed top-[50%] right-8 flex flex-col items-center justify-center -translate-y-[50%] gap-5"
>
  {#each ['home', 'briefcase', 'user-graduate', 'laptop', 'envelope'] as icon}
    <NavBarButton {icon} {toggleActive} active={icon === selectedIcon} />
  {/each}
</div>
