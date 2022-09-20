<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode: boolean;

	function toggleTheme() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<button
	on:mousedown={toggleTheme}
	class="active:-translate-y-2 ease-in-out duration-100 theme-btn top-[5%] right-[3%] w-12 h-12 rounded-full border-none fixed bg-gray-4 cursor-pointer shadow-lg z-10"
>
	<i
		class="theme-icon fas text-gray-2 text-2xl pointer-events-none {darkMode
			? 'fa-sun'
			: 'fa-moon'}"
	/>
</button>
