<script lang="ts">
	import AiOutlineSearch from 'svelte-symbols/ai/AiOutlineSearch.svelte';
	import { Listgroup, Input } from 'flowbite-svelte';
	let links = [
		{ name: 'Icons1', current: true },
		{ name: 'Icons2' },
		{ name: 'Icons3' },
		{ name: 'Icons4' }
	];
	let show = false;
</script>

<div class="hidden md:block md:w-[20vw] lg:w-[45vw] relative">
	<div class="relative">
		<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
			<AiOutlineSearch />
		</div>
		<Input
			id="search-navbar"
			class="pl-10"
			placeholder="Search..."
			on:mouseenter={() => (show = true)}
			on:mouseleave={() => (show = false)}
		/>
	</div>

	{#if show}
		<Listgroup
			active
			items={links}
			let:item
			class="hidden md:block md:w-[20vw] lg:w-[45vw] absolute mt-4"
		>
			{item.name}
		</Listgroup>
	{/if}
</div>
