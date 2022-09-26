<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import Button from '../../../lib/Button.svelte';
	import type { Project } from '../../../interfaces/Project';

	export let delay = 100;
	export let project: Project;
	export let shouldAnimate: boolean;

	let isInView: boolean;
	const options: Options = {
		rootMargin: '20%',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);
</script>

<div use:inview={options} on:change={handleChange} class="h-72">
	{#if isInView}
		<div
			in:fly={{ x: -1000, delay: shouldAnimate ? delay : 0, duration: shouldAnimate ? 500 : 0 }}
			class="relative group text-white"
		>
			<div class="relative flex justify-center items-center">
				<div class="absolute top-10 text-xl font-bold z-[2] text-center">
					<h1>{project.name}</h1>
				</div>
				<img
					class="w-full h-72 object-cover rounded-2xl grayscale-[70%]"
					src={project.urls.small}
					alt={project.name}
				/>
			</div>
			<div
				class="w-full h-full bg-secondary absolute left-0 top-0 
  						rounded-2xl flex flex-col justify-center items-center
  						opacity-0 scale-0 transition-all duration-500 ease-in-out
  						group-hover:opacity-90 group-hover:scale-100"
			>
				<p class="text-sm font-semibold text-start p-2">
					{project.description}
				</p>
				<div class="flex justify-center items-center">
					{#if project.homepage}
						<Button icon="fa fa-rocket" link={project.homepage} />
					{/if}
					<Button icon="fab fa-github" link={project.repoLink} />
				</div>
				<div class="absolute flex justify-center flex-wrap gap-2 w-full p-1 bottom-0">
					{#each project.icons as icon}
						<span class="w-8">
							<svelte:component this={icon.component} />
						</span>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
