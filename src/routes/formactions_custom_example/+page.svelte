<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';
	import { fade } from 'svelte/transition';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let success: boolean;

	$: if (success) {
		// allow resubmit after 1 second
		setTimeout(() => {
			success = false;
		}, 1000);
	}

	async function handleSubmit(event) {
		const data = new FormData(this);

		const response = await fetch(this.action, {
			method: 'POST',
			headers: {
				// this is to ensure the POST hits +page.server.js even if there is a server.js overlap
				'x-sveltekit-action': 'true'
			},
			body: data
		});
		/** @type {import('@sveltejs/kit').ActionResult} */
		const result = await response.json();

		if (result.type === 'success') {
			// re-run all `load` functions, following the successful update
			await invalidateAll();
		}

		applyAction(result);
	}
</script>

<h1>FormAction Custom Example</h1>
<p>In this example, we show how we can further customize FormActions</p>

<form action="?/subscribe" method="POST" on:submit|preventDefault={handleSubmit}>
	<p>Please subscribe with your email</p>
	{#if form?.missing}<p>The email field is required</p>{/if}
	{#if form?.invalid}<p>Invalid email!</p>{/if}
	<input name="email" type="email" placeholder="your@email" value={form?.email ?? ''} />
	<button>Subscribe</button>
	<button formaction="?/register">Register</button>
</form>

{#if success}
	<p in:fade={{ duration: 150 }} out:fade={{ duration: 350 }}>Saved</p>
{/if}
