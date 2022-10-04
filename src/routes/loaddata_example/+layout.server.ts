// +layout.server.js
// runs server side, typically used to protect secrets

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	// reference to a higher level layout.server.js if required
	//const higherLayoutServerData = await parent();
	// json data serialized back to layout.ts as parameter 'data'
	return {
		'layout.server.ts': 'load'
	};
};
