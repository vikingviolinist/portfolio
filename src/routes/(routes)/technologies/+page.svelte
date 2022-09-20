<script lang="ts">
	import * as icons from '../../(routes)/icons/index';
	import DevIcon from '../../../lib/DevIcon.svelte';
	import Header from '../../../lib/Header.svelte';
</script>

<Header title="Min Tech Stack" />
<div class="dev-icons flex justify-center flex-wrap gap-8">
	{#each Object.keys(icons) as icon, index}
		<DevIcon component={icons[icon]} tooltip={icon} delay={index * 100} />
	{/each}
</div>
