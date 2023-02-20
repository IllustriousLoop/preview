<script lang="ts">
	import type { PageData } from './$types';
	import { P, A, Heading } from 'flowbite-svelte';
	import ViewerIcons from '../../../components/icons/ViewerIcons.svelte';

	export let data: PageData;
</script>

<section class="px-6 py-10 pb-0 mx-auto">
	<Heading class="mb-4">{data.info.name}</Heading>

	<P size="xl">
		License: <A href={data.info.licenseUrl}>{data.info.license}</A>
	</P>
	<P size="xl">
		Project: <A href={data.info.projectUrl}>{data.info.projectUrl}</A>
	</P>
	<P size="xl">How to import</P>
	<code>
		import Icon from "svelte-symbols/{data.info.id}/Icon.svelte;"
	</code>
</section>

<ViewerIcons allIcons={data.icons} idIcon={data.id} />
