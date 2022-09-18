<script lang="ts">
	import type { TimelineItem } from '../interfaces/TimelineItem';

	export let job: TimelineItem;
</script>

<div class="relative pl-12 border-l-2 border-gray-5">
	<div
		class="absolute -left-[27px] -top-[5px] bg-gray-4 dark:bg-secondary w-[50px] h-[50px] rounded-3xl flex items-center justify-center"
	>
		<i class="fas fa-briefcase dark:text-white text-gray-2" />
	</div>
	<p class="text-gray-2 bg-gray-5 py-1 px-2 rounded-2xl inline-block text-sm font-medium">
		{job.from} - {job.to}
	</p>
	<h5 class="dark:text-white py-4 text-xl font-semibold">
		{job.title}
		<span class="text-white dark:text-gray-2 font-medium text-xl">- {job.institution}</span>
	</h5>
	<p class="text-white dark:ext-gray-2 text-justify">
		{job.description}
	</p>
</div>
