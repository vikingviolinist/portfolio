export const fetchRepos = async () => {
	try {
		const res = await fetch('https://api.github.com/users/vikingviolinist/repos?per_page=60');
		const repos = (await res.json()).filter(({ topics }) => topics.includes('portfolio'));
		return repos;
	} catch (error) {
		console.log(`Error fetching GitHub repos: ${error}`);
	}
};
