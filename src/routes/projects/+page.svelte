<script context="module" lang="ts">
	import { createApi } from 'unsplash-js';

	import * as icons from '../icons/index';
	import { colors } from './colors';

	const fetchRepos = async () => {
		let repos;
		try {
			const res = await fetch('https://api.github.com/users/vikingviolinist/repos?per_page=60');
			repos = await res.json();
		} catch (error) {
			repos = [];
		}

		return repos.filter((repo: any) => repo.topics.includes('portfolio'));
	};

	const fetchImages = async (count: number) => {
		const accessKey = '2jacHDYybwpIjozi70jBxq_FdkhUhap37l99qairwI0';
		const unsplash = createApi({ accessKey });
		let images = colors.map((background) => ({ path: '', background }));

		try {
			const res = await unsplash.photos.getRandom({
				collectionIds: ['7P0uGtLS0rY'],
				count
			});

			images = await res.response;
			if (images && images instanceof Array) {
				images = images.map((image) => ({ path: image.urls.small, background: '' }));
			}
		} catch (error) {}

		return images;
	};

	const loadProjects = async () => {
		const repos = await fetchRepos();
		const images = await fetchImages(repos.length);

		if (images instanceof Array && images[0].path && repos.length !== images.length) {
			return console.log('this should not happen');
		}

		const projects = repos.map(
			(repo, index: number): IProject => ({
				name: repo.name.replaceAll('_', ' '),
				description: repo.description || '',
				homepage: repo.homepage,
				repoLink: repo.html_url,
				path: images[index].path,
				background: images[index].background,
				icons: repo.topics
					.filter(
						(icon) => icon !== 'portfolio' && icons[icon.charAt(0).toUpperCase() + icon.slice(1)]
					)
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
	import Header from '../../lib/Header.svelte';
	import Project from './Project.svelte';
	import type { Project as IProject } from '../../interfaces/Project';
</script>

<section class="min-h-screen px-4 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 flex flex-col gap-16">
	<Header title="Mine Prosjekter" />
	{#await projects then projects}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project}
				<Project {project} />
			{/each}
		</div>
	{:catch error}
		<div class="flex flex-1 justify-center text-white font-bold h-full">
			<h1>
				Rate limit exceeded 🧨 <br />
				Please come back later
				{error}
			</h1>
		</div>
	{/await}
</section>
