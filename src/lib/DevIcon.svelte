<script lang="ts">
	import { scale } from 'svelte/transition';
	import Tooltip from '../lib/Tooltip.svelte';

	export let component;
	export let tooltip: string;
	export let delay: number;
	export let shouldAnimate: boolean;
</script>

<div
	class="group relative flex justify-center items-center 
			"
>
	<div
		in:scale={{ delay: shouldAnimate ? delay : 0, duration: shouldAnimate ? 1000 : 0 }}
		class="w-12 lg:w-20 grayscale-[30%] hover:scale-150 hover:grayscale-0 transition-all 
          ease-in-out group"
	>
		<svelte:component this={component} />
	</div>
	<Tooltip position="bottom-16 lg:bottom-24" origin="bottom" {tooltip} />
</div>
