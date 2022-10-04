// +layout.ts

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ data }) => {
	// json data passed back to layout.svelte
	return {
		'layout.ts': 'load',
		...data
	};
};
