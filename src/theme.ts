import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let defaultTheme: 'dark' | 'light' = 'dark';

if (browser) {
	defaultTheme =
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			? 'dark'
			: 'light';
}

const theme = writable<string>(defaultTheme);

theme.subscribe((theme) => {
	if (browser) {
		window.localStorage.setItem('theme', theme);
	}
});

export default theme;
