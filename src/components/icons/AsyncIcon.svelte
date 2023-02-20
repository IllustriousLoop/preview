<script lang="ts">
	import { Button, Spinner } from 'flowbite-svelte';
	import Clipboard from 'svelte-clipboard';

	export let icon: string = 'XX',
		idIcon: string = 'XX';

	const getAsyncIcon = async () => {
		return import(`../../lib/assets/${idIcon}/${icon}.svg`);
	};
</script>

{#await getAsyncIcon()}
	<Spinner />
{:then value}
	<Clipboard
		text={`<${icon}/>`}
		let:copy
		on:copy={() => {
			console.log('Has Copied');
		}}
	>
		<Button outline={true} pill={true} class="!p-4" on:click={copy}>
			<svelte:component this={value.default} width="32" height="32" />
		</Button>
	</Clipboard>
{/await}
