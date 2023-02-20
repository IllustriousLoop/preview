<script lang="ts">
	import { Card, Button, P } from 'flowbite-svelte';
	import Clipboard from 'svelte-clipboard';
	import AsyncIcon from './AsyncIcon.svelte';
	import BsCodeSlash from 'svelte-symbols/bs/BsCodeSlash.svelte';

	export let icon: string = 'XX',
		test: boolean = false,
		idIcon: string = 'XX';
</script>

<Card padding="none" class="min-w-[200px] max-w-md ">
	<div class="flex justify-center items-center flex-col p-5 pb-6 relative">
		{#if test}
			<slot />
		{/if}

		<AsyncIcon {icon} {idIcon} />

		<P size="lg" class="my-4">
			{icon.slice(2)}
		</P>

		<div class="absolute flex justify-start items-center m-1 bottom-1 left-0">
			<Clipboard
				text={`import ${icon} from 'svelte-symbols/${idIcon}/${icon}.svelte';`}
				let:copy
				on:copy={() => {
					console.log('Has Copied');
				}}
			>
				<Button
					outline={true}
					pill={true}
					class="!p-2 border-none"
					size="xs"
					shadow="cyan"
					on:click={copy}
				>
					<BsCodeSlash size={16} />
				</Button>
			</Clipboard>
		</div>
	</div>
</Card>
