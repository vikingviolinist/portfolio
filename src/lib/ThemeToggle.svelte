<script>
	export let dark = true;

	if (dark) {
		// window.document.documentElement.classList.add('dark');
	}
	const toggleTheme = () => {
		dark = !dark;
		// window.document.documentElement.classList.toggle('dark');
		// localStorage.prefersDarkTheme = !prefersDarkTheme ? 'false' : 'true';
	};
</script>

<button
	on:mousedown={toggleTheme}
	class="active:-translate-y-2 ease-in-out duration-100 theme-btn top-[5%] right-[3%] w-12 h-12 rounded-full border-none fixed bg-gray-4 cursor-pointer shadow-lg z-10"
>
	<i
		class="theme-icon fas text-gray-2 text-2xl pointer-events-none {dark ? 'fa-sun' : 'fa-moon'}"
	/>
</button>
