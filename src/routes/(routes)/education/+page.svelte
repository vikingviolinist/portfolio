<script lang="ts">
	import TimelineItem from '../../../lib/TimelineItem.svelte';
	import { schools } from './schools';
	import { certificates } from './certificates';
	import Header from '../../../lib/Header.svelte';
</script>

<Header title="Min Utdanning" />
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12 pl-4">
	{#each schools as school}
		<TimelineItem item={school} />
	{/each}
</div>

<Header title="Mine sertifiseringer" />
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12 pl-4">
	{#each certificates as certificate}
		<TimelineItem item={certificate} />
	{/each}
</div>
