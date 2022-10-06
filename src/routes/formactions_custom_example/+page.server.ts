// +page.ts

import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types';

const REGEX_EMAIL = new RegExp(
	"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
);

export const actions: Actions = {
	subscribe: async ({ request }) => {
		const form = await request.formData();
		const email = form.get('email');
		if (!email || email.toString().length === 0) {
			return invalid(400, { email, missing: true });
		}
		if (REGEX_EMAIL.test(email.toString()) === false) {
			return invalid(400, { email, invalid: true });
		}
		console.log(email);
	},
	register: async ({ request }) => {
		const form = await request.formData();
		const email = form.get('email');
		console.log('register ' + email);
	}
};
