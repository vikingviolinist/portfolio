<script lang="ts">
	import theme from '../stores/theme';

	const toggleTheme = () => theme.set($theme === 'dark' ? 'light' : 'dark');
</script>

<button
	on:mousedown={toggleTheme}
	aria-label="Theme toggle"
	class="outline group active:-translate-y-2 ease-in-out duration-100 top-[5%] right-[3%] w-12 h-12 rounded-full fixed bg-gray-4 cursor-pointer shadow-lg z-10"
>
	<i
		class="theme-icon fas text-gray-2 text-2xl group-hover:text-white group-focus:text-white pointer-events-none {$theme ===
		'dark'
			? 'fa-sun'
			: 'fa-moon'}"
	/>
</button>
