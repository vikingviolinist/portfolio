<script lang="ts">
	export let title: string;
	const first = title !== 'Kontakt' ? title.split(' ')[0] : '';
	const second = title !== 'Kontakt' ? title.split(' ').slice(1).join(' ') : title;
</script>

<div class="text-center">
	<h2 class="uppercase text-white text-3xl lg:text-6xl relative font-bold">
		{first}
		<span
			class="text-gray-500 dark:text-gray-5 hidden lg:block lg:text-7xl absolute top-1/2 left-1/2 font-extrabold w-full -z-10 -translate-x-1/2 -translate-y-1/2"
			>{first}
		</span>
	</h2>
	<h2 class="uppercase text-3xl lg:text-6xl font-bold relative text-primary dark:text-secondary">
		{second}
		<span
			class="text-gray-500 dark:text-gray-5 hidden lg:block lg:text-7xl absolute top-1/2 left-1/2 font-extrabold w-full -z-10 -translate-x-1/2 -translate-y-1/2"
			>{second}</span
		>
	</h2>
</div>
