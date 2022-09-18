<script lang="ts">
	import TimelineItem from '../../lib/TimelineItem.svelte';
	import { jobs } from './jobs';

	import Header from '../../lib/Header.svelte';
</script>

<section class="px-8 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 flex flex-col gap-16">
	<Header title="Min Arbeidserfaring" />
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
		{#each jobs as job}
			<TimelineItem {job} />
		{/each}
	</div>
</section>
