<script lang="ts">
	import { page } from '$app/stores';
	import Tooltip from '../lib/Tooltip.svelte';
	import type { Section } from '../interfaces/Section';

	export let section: Section;
	let currentPath: string;
	$: currentPath = $page.url.pathname;
</script>

<a
	data-sveltekit-prefetch
	href={section.route}
	class="control p-6 cursor-pointer w-10 lg:w-12 h-10 lg:h-12 rounded-3xl hover:bg-secondary hover:rounded-xl
  transition-all duration-300 ease-linear group flex justify-center items-center
  shadow-[0_3px_15px_rgba(0,0,0,0.3);] {currentPath === section.route
		? 'bg-secondary'
		: 'bg-gray-4'}"
>
	<i
		class="fas fa-{section.icon} text-xl pointer-events-none group-hover:text-white
        {currentPath === section.route ? 'text-white' : 'text-gray-2 dark:text-gray-400'}"
	/>
	<Tooltip position="right-14" origin="right" tooltip={section.tooltip} />
</a>
