import { error } from '@sveltejs/kit';
import IconsManifest, { namesAllIcons } from 'svelte-symbols/lib/iconsManifest';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { family } = params;

	const info = IconsManifest.filter((icon) => icon.id === family);
	const { content } = namesAllIcons.filter((icon) => icon.id === family)[0];

	if (info.length === 0) throw error(404, 'Not found Bx');

	return {
		id: family,
		icons: content,
		info: info[0]
	};
};
