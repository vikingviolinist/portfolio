<script context="module" lang="ts">
	import { fetchImages } from './fetchImages';
	import repos from '../../../data/repos.json';

	import * as icons from '../../(routes)/icons/index';

	const loadProjects = async () => {
		const images = await fetchImages(repos.length);

		const projects = repos.map(
			(repo, index: number): IProject => ({
				name: repo.name.replaceAll('_', ' '),
				description: repo.description || '',
				homepage: repo.homepage,
				repoLink: repo.html_url,
				path: images[index].path,
				background: images[index].background,
				icons: repo.topics
					.filter((icon) => icons[icon.charAt(0).toUpperCase() + icon.slice(1)])
					.map((icon) => ({
						component: icons[icon.charAt(0).toUpperCase() + icon.slice(1)]
					}))
			})
		);

		return projects;
	};

	let projects = loadProjects();
</script>

<script lang="ts">
	import Header from '../../../lib/Header.svelte';
	import Project from './Project.svelte';
	import type { Project as IProject } from '../../../interfaces/Project';

	$: searchValue = '';
	projects.then((res) => console.log(res));
</script>

<Header title="Mine Prosjekter" />
<input
	bind:value={searchValue}
	type="text"
	name="filter"
	class="outline text-lg font-bold max-w-3xl w-full self-center shadow-lg bg-white dark:bg-gray-5 rounded-2xl p-5 dark:text-white text-primary"
	placeholder="Search for technology"
/>
{#await projects then projects}
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl-grid-cols-4 gap-6">
		{#each projects.filter( (project) => (searchValue ? project.icons.some( (icon) => icon.component.name
									.toLowerCase()
									.slice(6)
									.startsWith(searchValue
											.trim()
											.toLowerCase()) ) : true) ) as project, index (project.name)}
			<Project {project} delay={index * 100} />
		{:else}
			<div class="col-span-full text-center font-bold text-white">
				<h1>Ingen treff på</h1>
				<p class="my-4 font-extrabold text-red-600 text-xl">{searchValue}</p>
				<h1>Prøv noe annet</h1>
			</div>
		{/each}
	</div>
{:catch}
	<div class="col-span-full text-center font-bold text-white">
		<h1>Rate limit exceeded 🧨</h1>
		<h1>Please come back later</h1>
	</div>
{/await}
