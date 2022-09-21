<script lang="ts">
	import '../app.css';
	import { sections } from './sections';
	import NavBarButton from '../lib/NavBarButton.svelte';
	import ThemeToggle from '../lib/ThemeToggle.svelte';
</script>

<main class="min-h-screen transition-all duration-500 ease-in-out">
	<ThemeToggle />
	<nav
		class="fixed left-[50%] xl:left-auto bottom-5 xl:top-[50%] xl:right-3 -translate-x-[50%] xl:-translate-y-[50%] flex xl:flex-col items-center justify-center gap-4 xl:gap-5
		transition-all duration-300 ease-in-out z-10"
	>
		{#each sections as section}
			<NavBarButton {section} />
		{/each}
	</nav>

	<slot />
</main>
