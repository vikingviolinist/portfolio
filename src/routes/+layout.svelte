<script lang="ts">
	import '../app.css';
	import { sections } from './sections';
	import NavBarButton from '../lib/NavBarButton.svelte';
	import ThemeToggle from '../lib/ThemeToggle.svelte';

	let dark = true;
</script>

<div class:dark>
	<main class="min-h-screen transition-all duration-500 ease-in-out dark:bg-primary bg-secondary">
		<ThemeToggle bind:dark />
		<nav
			class="fixed left-[50%] lg:left-auto bottom-5 lg:top-[50%] lg:right-3 -translate-x-[50%] lg:-translate-y-[50%] flex lg:flex-col items-center justify-center gap-4 lg:gap-5
		transition-all duration-300 ease-in-out z-10"
		>
			{#each sections as section}
				<NavBarButton {section} />
			{/each}
		</nav>

		<slot />
	</main>
</div>
