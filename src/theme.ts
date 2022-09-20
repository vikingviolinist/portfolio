import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let defaultTheme: 'dark' | 'light' = 'dark';

if (browser) {
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		defaultTheme = 'dark';
	} else {
		defaultTheme = 'light';
	}
}

const theme = writable<string>(defaultTheme);

theme.subscribe((theme) => {
	if (browser) {
		window.localStorage.setItem('theme', theme);
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
});

export default theme;
