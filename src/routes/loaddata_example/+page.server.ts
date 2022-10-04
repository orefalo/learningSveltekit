// +page.server.js

import type { PageServerLoad } from './$types';

// runs server side, typically used to protect secrets
export const load: PageServerLoad = async ({ parent }) => {
	const layoutServerData = await parent();
	console.log(layoutServerData);
	// json data serialized back to page.ts as parameter 'data'
	return {
		'page.server.ts': 'load'
	};
};
