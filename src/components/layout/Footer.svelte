<script>
	import { Footer, FooterCopyright, FooterIcon } from 'flowbite-svelte';
	import AiOutlineInstagram from 'svelte-symbols/ai/AiOutlineInstagram.svelte';
	import AiOutlineTwitter from 'svelte-symbols/ai/AiOutlineTwitter.svelte';
	import FaGithub from 'svelte-symbols/fa/FaGithub.svelte';
</script>

<Footer footerType="socialmedia">
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="https://jhairparis.com" by="IllustriouLoop" />
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<FooterIcon href="https://www.instagram.com/jhairparis/" class="text-gray-400 hover:text-gray-900">
				<AiOutlineInstagram />
			</FooterIcon>
			<FooterIcon href="https://twitter.com/@jhairparis" class="text-gray-400 hover:text-gray-900">
				<AiOutlineTwitter />
			</FooterIcon>
			<FooterIcon href="https://github.com/illustriousloop/" class="text-gray-400 hover:text-gray-900">
				<FaGithub />
			</FooterIcon>
		</div>
	</div>
</Footer>
