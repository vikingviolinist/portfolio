import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultTheme = 'dark';
const initialValue = browser
	? (window.localStorage.getItem('theme') ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ??
	  defaultTheme
	: defaultTheme;

// Set up our MediaQueryList
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

// Initial theme config from current state
const theme = writable<string>(initialValue);
console.log(theme);
theme.subscribe((theme) => {
	if (browser) {
		window.localStorage.setItem('theme', theme);
	}
});
