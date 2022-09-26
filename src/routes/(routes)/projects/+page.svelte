<script lang="ts">
	import { visited } from '../../../stores/visited';
	import { onDestroy } from 'svelte';
	import Header from '../../../lib/Header.svelte';
	import Project from './Project.svelte';
	import type { Project as IProject } from '../../../interfaces/Project';
	import repos from '../../../data/repos.json';

	import * as icons from '../../(routes)/icons/index';

	let shouldAnimate: boolean;

	const unsubscribe = visited.subscribe((obj) => {
		shouldAnimate = !obj.projects;
	});

	onDestroy(() => {
		visited.update((obj) => ({ ...obj, projects: true }));
		unsubscribe();
	});

	const projects = repos.map(
		(repo): IProject => ({
			...repo,
			icons: repo.topics
				.filter((icon) => icons[icon.charAt(0).toUpperCase() + icon.slice(1)])
				.map((icon) => ({
					component: icons[icon.charAt(0).toUpperCase() + icon.slice(1)]
				}))
		})
	);

	$: searchValue = '';
</script>

<Header title="Mine Prosjekter" />
<input
	bind:value={searchValue}
	type="text"
	name="filter"
	class="outline text-lg font-bold max-w-3xl w-full self-center shadow-lg bg-white dark:bg-gray-5 rounded-2xl p-5 dark:text-white text-primary"
	placeholder="Search for technology"
/>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl-grid-cols-4 gap-6">
	{#each projects.filter((project) => (searchValue ? project.topics.some((topic) => topic
						.toLowerCase()
						.startsWith(searchValue
								.trim()
								.toLowerCase())) : true)) as project, index (project.name)}
		<Project {project} delay={index * 100} {shouldAnimate} />
	{:else}
		<div class="col-span-full text-center font-bold text-white">
			<h1>Ingen treff på</h1>
			<p class="my-4 font-extrabold text-red-600 text-xl">{searchValue}</p>
			<h1>Prøv noe annet</h1>
		</div>
	{/each}
</div>
