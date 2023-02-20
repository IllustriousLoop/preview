import { sveltekit } from '@sveltejs/kit/vite';
import svelteSVG from 'vite-plugin-svelte-svg';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		svelteSVG({
			svgoConfig: {
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								removeViewBox: false
							}
						}
					}
				]
			},
			requireSuffix: false
		})
	]
};

export default config;
