import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'dark' | 'light';

const defaultTheme: Theme = 'dark';
const prefersDarkTheme = browser ?? window.matchMedia('(prefers-color-scheme: dark)').matches;
const hasThemeSet = browser ? 'theme' in window.localStorage : false;
let initialValue: Theme;

if (browser) {
	initialValue =
		(window.localStorage.getItem('theme') as Theme) ||
		((!hasThemeSet && prefersDarkTheme) ?? defaultTheme);
} else {
	initialValue = defaultTheme;
}

if (browser && initialValue === 'dark') {
	document.documentElement.classList.add('dark');
} else {
	document.documentElement.classList.remove('dark');
}

const theme = writable<string>(initialValue);

theme.subscribe((theme) => {
	if (browser) {
		window.localStorage.setItem('theme', theme);
	}
});

export default theme;
