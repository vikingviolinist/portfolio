<script lang="ts">
	import { fly } from 'svelte/transition';
	import Button from '../../../lib/Button.svelte';
	import type { Project } from '../../../interfaces/Project';

	export let delay: number = 100;
	export let project: Project;
</script>

<div in:fly={{ x: -1000, delay, duration: 1000 }} class="relative group text-white">
	<div class="relative flex justify-center items-center ">
		<div class="absolute top-10 text-xl font-bold z-10 text-center">
			<h1>{project.name}</h1>
		</div>
		{#if project.path}
			<img
				class="w-full h-72 object-cover rounded-2xl grayscale-[70%]"
				src={project.path}
				alt={project.name}
			/>
		{:else}
			<div
				class="w-full h-72 object-cover rounded-2xl grayscale-[70%]"
				style="background: {project.background}"
			/>
		{/if}
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
		<div class="absolute flex justify-start flex-wrap gap-2 w-full p-1 bottom-0">
			{#each project.icons as icon}
				<span class="w-8">
					<svelte:component this={icon.component} />
				</span>
			{/each}
		</div>
	</div>
</div>
