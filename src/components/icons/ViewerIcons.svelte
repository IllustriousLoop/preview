<script lang="ts">
	import { P } from 'flowbite-svelte';
	import InfiniteScroll from 'svelte-infinite-scroll';
	import CardIcons from './CardIcons.svelte';

	export let allIcons: string[] = [];
	export let idIcon: string;

	let page = 1;
	let size = 20;
	const fullSize = allIcons.length;

	let IconsByPage: string[] = [];

	$: if (IconsByPage[0]?.toLowerCase().startsWith(idIcon) || IconsByPage.length === 0) {
		IconsByPage = [...IconsByPage, ...allIcons.slice((page - 1) * size, (page - 1) * size + size)];
	} else {
		IconsByPage = [...allIcons.slice((page - 1) * size, (page - 1) * size + size)];
	}
</script>

<section class="bg-white dark:bg-gray-900 px-6 py-10 mx-auto rounded-lg mt-5">
	<div class="w-full max-h-[80vh] overflow-scroll">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4 ">
			{#each IconsByPage as icon}
				<div class="lg:flex">
					<CardIcons {icon} {idIcon} />
				</div>
			{/each}
			{#if IconsByPage.length < fullSize}
				<P>info: {fullSize}/{IconsByPage.length}</P>
			{/if}
		</div>

		<InfiniteScroll on:loadMore={() => page++} />
	</div>
</section>
