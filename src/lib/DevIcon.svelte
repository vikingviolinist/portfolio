<script lang="ts">
	import { fade } from 'svelte/transition';
	import Tooltip from '../lib/Tooltip.svelte';

	export let component;
	export let tooltip: string;
</script>

<div
	class="group relative flex justify-center items-center 
			"
>
	<div
		class="w-12 lg:w-20 grayscale-[30%] hover:scale-150 hover:grayscale-0 transition-all 
          ease-in-out group"
	>
		<svelte:component this={component} />
	</div>
	<Tooltip position="bottom-16 lg:bottom-24" origin="bottom" {tooltip} />
</div>
