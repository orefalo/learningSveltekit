// +page.ts
// typically used to preload data
// this page is optional, in it's simplest form it's a proxy

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	//const { user } = await parent();
	// json data passed back to page.svelte
	// return { ...data }
	return {
		'page.ts': 'load',
		...data
	};
};
