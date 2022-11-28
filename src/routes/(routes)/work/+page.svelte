<script lang="ts">
	import TimelineItem from '../../../lib/TimelineItem.svelte';
	import { jobs } from './jobs';

	import Header from '../../../lib/Header.svelte';
</script>

<Header title="Min Arbeidserfaring" />
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12 pl-4">
	{#each jobs as item}
		<TimelineItem {item} />
	{/each}
</div>
