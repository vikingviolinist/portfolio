<script lang="ts">
	export let icon: string;
	export let link: string;
</script>

<a
	on:mouseenter
	on:focus
	on:mouseleave
	on:focusout
	class="outline bg-gray-4 hover:bg-secondary rounded-3xl w-[50px] h-[50px] flex shadow-[0_3px_15px_rgba(0,0,0,0.3);]
  			items-center justify-center mx-2 my-0 cursor-pointer 
  			transition-all duration-500 ease-in-out group"
	href={link}
	target="_blank"
>
	<slot />
	{#if icon}
		<i
			class="{icon} text-gray-2 dark:text-gray-400 group-hover:text-white group-focus:text-white flex items-center justify-center text-xl"
		/>
	{/if}
</a>
