import { writable } from 'svelte/store';

// Set up our MediaQueryList
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

// Initial theme config from current state
export const theme = writable(prefersDarkMode.matches ? 'dark' : 'light');
