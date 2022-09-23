import fs from 'fs';

try {
	const res = await fetch('https://api.github.com/users/vikingviolinist/repos?per_page=60');
	const repos = (await res.json())
		.filter(({ topics }) => topics.includes('portfolio'))
		.map((repo) => ({
			name: repo.name.replaceAll('_', ' '),
			description: repo.description,
			topics: repo.topics.filter((topic) => topic !== 'portfolio'),
			homepage: repo.homepage,
			html_url: repo.html_url
		}));
	fs.writeFile('src/data/repos.json', JSON.stringify(repos, null, 2), (error) => {
		if (error) throw new Error(error);
		console.log('Fetched repos from GitHub and updated src/data/repos.json file');
	});
} catch (error) {
	console.log(`Error fetching GitHub repos: ${error}`);
}
