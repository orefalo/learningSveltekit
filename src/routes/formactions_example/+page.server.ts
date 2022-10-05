// +page.ts
// typically used to preload data
// this page is optional, in it's simplest form it's a proxy

import type { Actions } from './$types';

export const actions: Actions = {
	subscribe: async ({ request }) => {
		const form = await request.formData();
		console.log(form.get('email'));
	}
};
