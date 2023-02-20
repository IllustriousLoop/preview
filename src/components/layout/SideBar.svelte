<script lang="ts">
	import Icons from 'svelte-symbols/tb/TbIcons.svelte';

	import { page } from '$app/stores';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;

	import { namesAllIcons } from 'svelte-symbols/lib/iconsManifest';
</script>

<Sidebar
	asideClass="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
>
	<div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
		<SidebarWrapper>
			<SidebarGroup>
				<div class="flex items-center">
					<h5
						id="drawer-navigation-label-3"
						class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
					>
						Menu
					</h5>
				</div>
				{#each namesAllIcons as icon}
					<SidebarItem
						label={icon.name}
						href={`/icons/${icon.id}/`}
						active={activeUrl === `/icons/${icon.id}`}
					>
						<Icons slot="icon" />
					</SidebarItem>
				{/each}
			</SidebarGroup>
		</SidebarWrapper>
	</div>
</Sidebar>
