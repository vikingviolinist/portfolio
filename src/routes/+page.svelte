<script lang="ts">
	import { browser } from '$app/environment';
	import Clef from '../lib/Clef.svelte';
	import ClefCircuitBoard from '../lib/ClefCircuitBoard.svelte';
	import LineLeft from '../lib/LineLeft.svelte';
	import LineRight from '../lib/LineRight.svelte';
</script>

<header
	class="header  min-h-screen bg-secondary dark:bg-primary overflow-hidden
        transition-all ease-in-out"
>
	<div class="header-content grid lg:grid-cols-[800px,1fr] min-h-screen">
		<div class="left-header relative w-[70%] lg:w-full">
			<div
				class="left-header-left py-2 transition-all duration-500 ease-in-out flex items-center justify-center h-full bg-primary dark:bg-secondary clip-path-left"
			>
				<div class="g-clef g-clef-left w-[20%] lg:w-[40%] z-[4] text-center">
					<Clef toggle={false} />
				</div>
				<div
					class="lines lines-left flex flex-col gap-4 lg:gap-[6.5rem] absolute left-[10%] lg:left-[20%] w-full"
				>
					{#each Array(5) as _, index (index)}
						<LineLeft />
					{/each}
				</div>
			</div>
			<div
				class="left-header-right absolute top-0 flex justify-center items-center w-full h-full clip-path-right"
			>
				<div class="g-clef g-clef-right w-[20%] lg:w-[40%] z-[3] text-center">
					{#if browser ? window.screen.availWidth > 1024 : false}
						<ClefCircuitBoard />
					{:else}
						<Clef toggle={false} />
					{/if}
				</div>
				<div
					class="g-clef g-clef-right w-[20%] lg:w-[40%] text-center g-clef-right-bg absolute z-[2]"
				>
					<Clef toggle={true} />
				</div>

				<div
					class="lines lines-right flex flex-col gap-4 lg:gap-[6.5rem] absolute w-full left-[40%]"
				>
					{#each Array(5) as _, index (index)}
						<!-- {#if document.screen.availWidth > 1024} -->
						<LineRight />
						<!-- {:else} -->
						<!-- <LineLeft /> -->
						<!-- {/if} -->
					{/each}
				</div>
			</div>
		</div>
		<div class="right-header p-4 lg:pr-36 flex text-justify items-start lg:items-center">
			<div>
				<div
					class="empty w-[200px] h-[400px] float-left clip-path-text shape-outside hidden lg:inline"
				/>
				<div class="relative lg:-left-10">
					<h1 class="text-white text-3xl lg:text-5xl font-bold">
						Hei, jeg er <span
							class="dark:text-secondary text-primary transition-all duration-500 ease-in-out"
							>Michal</span
						>, en utvikler med stor motivasjon og interesse for tech
					</h1>
					<p class="my-4 lg:my-10 text-white font-medium lg:text-lg">
						Jeg har jobbet som Frontend / Backend / DevOps utvikler hos tech-selskaper som lager
						digitale B2B løsninger. I mine roller har jeg hatt ansvar for å bl.a. utvikle nye
						features, designe APIer, sette opp CI/CD pipelines, skrive tester, lage data warehouses
						og utvikle verktøy for analytics. Jeg elsker utfordringer, har stor arbeidskapasitet,
						samt stort driv for å lære seg nye teknologier. Det at jeg er utdannet musiker og tolk /
						oversetter viser mitt øye for detaljer.
					</p>
					<div class="btn-container inline-block absolute lg:relative right-0 -top-[17%]">
						<a
							href="./Michal_Petrik.pdf"
							download
							class="main-btn z-0 relative rounded-[30px] font-semibold border border-primary dark:border-secondary flex items-center overflow-hidden
                before:absolute before:-z-[1] before:w-full before:h-full before:translate-x-full before:transition-all before:duration-500 before:ease-in-out
                group hover:before:bg-primary dark:hover:before:bg-secondary hover:before:translate-x-0"
						>
							<span
								class="btn-text text-sm lg:text-lg px-4 lg:px-8 text-primary dark:text-secondary group-hover:text-white
                    transition-all">Last ned CV</span
							>
							<span
								class="btn-icon p-3 lg:p-4 bg-primary dark:bg-secondary flex items-center justify-center rounded-full"
								><i class="fas fa-download text-gray-2 dark:text-white" /></span
							>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	@tailwind utilities;

	@layer utilities {
		.clip-path-left {
			clip-path: polygon(0 0, 40% 0, 66% 100%, 0% 120%);
		}
		.clip-path-right {
			clip-path: polygon(0 0, 40% 0, 66% 100%, 120% 0%);
		}
		.clip-path-text {
			clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
		}
		.shape-outside {
			shape-outside: polygon(0% 0%, 100% 0%, 0% 100%);
		}
	}
</style>
