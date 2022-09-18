<script lang="ts">
	import TimelineItem from '../../lib/TimelineItem.svelte';
	import { schools } from './schools';
	import Header from '../../lib/Header.svelte';
</script>

<section class="px-8 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 flex flex-col gap-16">
	<Header title="Min Utdanning" />
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
		{#each schools as school}
			<TimelineItem job={school} />
		{/each}
	</div>
</section>
