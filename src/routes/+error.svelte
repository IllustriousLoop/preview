<script lang="ts">
	import { ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte';
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<Skeleton class="mt-16 mb-8" />
<ImagePlaceholder class="my-8" />
<TextPlaceholder class="my-8" />
