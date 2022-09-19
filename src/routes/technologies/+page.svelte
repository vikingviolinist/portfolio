<script lang="ts">
	import * as icons from '../icons/index';
	import DevIcon from '../../lib/DevIcon.svelte';
	import Header from '../../lib/Header.svelte';
</script>

<section class="px-4 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 flex flex-col gap-16">
	<Header title="Min Tech Stack" />
	<div class="dev-icons flex justify-center flex-wrap gap-8">
		{#each Object.keys(icons) as icon, index}
			<DevIcon component={icons[icon]} tooltip={icon} delay={index * 100} />
		{/each}
	</div>
</section>
