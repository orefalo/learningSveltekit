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
</script>

<h1>FormAction Example</h1>
<p>In this example, we show how the new sveltekit manages forms</p>

<form
	action="?/subscribe"
	method="POST"
	use:enhance={({ form, data, action, cancel }) => {
		return async ({ result, update }) => {
			if (result.type === 'success') {
				success = true;
				// re-run all `load` functions, following the successful update
				// this does not really apply to this example, but can be used to refresh the UI upon sucessfull authentication
				await invalidateAll();
			}
			await applyAction(result);
		};
	}}
>
	<p>Please subscribe with your email</p>
	{#if form?.missing}<p>The email field is required</p>{/if}
	{#if form?.invalid}<p>Invalid email!</p>{/if}
	<input name="email" type="email" placeholder="your@email" value={form?.email ?? ''} />
	<button>Subscribe</button>
</form>

{#if success}
	<p in:fade={{ duration: 150 }} out:fade={{ duration: 350 }}>Saved</p>
{/if}
