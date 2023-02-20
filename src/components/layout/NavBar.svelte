<script lang="ts">
	import HiMenu from 'svelte-symbols/hi/HiMenu.svelte';
	import { Navbar, NavBrand, NavLi, NavUl, Button } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import SearchBar from './SearchBar.svelte';
	import BsFillSunFill from 'svelte-symbols/bs/BsFillSunFill.svelte';
	import BsMoonStarsFill from 'svelte-symbols/bs/BsMoonStarsFill.svelte';

	let activeUrl: string;
	$: activeUrl = $page.url.pathname;
	import { DarkMode } from 'flowbite-svelte';
</script>

<nav
	class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
>
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img
				src="https://static.jhairparis.com/avatar.png"
				class="mr-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Svelte-Symbols
			</span>
		</NavBrand>

		<SearchBar />
		<Button
			aria-label="Open main menu"
			outline
			gradient
			color="greenToBlue"
			class="md:hidden block"
			on:click={toggle}
		>
			<HiMenu class="w-6 h-6 dark:text-white" />
		</Button>
		<NavUl {hidden}>
			<NavLi href="/" active={activeUrl === '/'}>Home</NavLi>
			<NavLi href="/icons/ri" active={activeUrl.includes('/icons/')}>Icons</NavLi>
			<NavLi href="/settings">Settings</NavLi>
		</NavUl>
		<DarkMode class="text-lg">
			<BsFillSunFill slot="lightIcon" />
			<BsMoonStarsFill slot="darkIcon" />
		</DarkMode>
	</Navbar>
</nav>
