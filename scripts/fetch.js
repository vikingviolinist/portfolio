import fs from 'fs';

import { fetchImages } from './fetchImages.js';
import { fetchRepos } from './fetchRepos.js';

const repos = await fetchRepos();
const images = await fetchImages(50);

if (images.length < repos.length) {
	throw new Error(`There is less images(${images.length}) than repos(${repos.length})`);
}

const projects = repos.map((repo, index) => ({
	name: repo.name.replaceAll('_', ' '),
	description: repo.description || '',
	topics: repo.topics.filter((topic) => topic !== 'portfolio'),
	homepage: repo.homepage,
	repoLink: repo.html_url,
	urls: images[index].urls
}));

fs.writeFile('src/data/repos.json', JSON.stringify(projects, null, 2), (error) => {
	if (error) throw new Error(error);
	console.log('Fetched repos from GitHub and updated src/data/repos.json file');
});
