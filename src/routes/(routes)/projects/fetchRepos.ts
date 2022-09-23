export const fetchRepos = async () => {
	let repos;
	try {
		const res = await fetch('https://api.github.com/users/vikingviolinist/repos?per_page=60');
		repos = await res.json();
	} catch (error) {
		repos = [];
	}

	return repos.filter((repo) => repo.topics.includes('portfolio'));
};
