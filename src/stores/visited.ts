import { writable } from 'svelte/store';

export const visited = writable({
	home: false,
	work: false,
	education: false,
	technologies: false,
	projects: false,
	contact: false
});
