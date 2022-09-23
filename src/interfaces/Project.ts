export interface Project {
	name: string;
	description: string;
	topics: string[];
	homepage: string;
	repoLink: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
		small_s: string;
	};
	background: string;
	icons: [];
}
