<script lang="ts">
	export let tooltip: string;
	export let position: string;
	export let origin: string;
</script>

<span
	class="hidden xl:block absolute w-auto p-2 m-2 min-w-max rounded-md shadow-md
      text-white bg-gray-4 text-xs font-bold pointer-events-none
      transition-all duration-300 scale-0 origin-{origin} group-hover:scale-100 {position}"
	>{tooltip}</span
>
