// +page.ts
// typically used to preload data
// this page is optional, in it's simplest form it's a proxy

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch, setHeaders }) => {
	//	const url = `/myapi`;
	const response = await fetch(url.href + `/myapi`);

	setHeaders({
		age: response.headers.get('age') || '',
		'cache-control': response.headers.get('cache-control') || ''
	});

	return response.json();
};
