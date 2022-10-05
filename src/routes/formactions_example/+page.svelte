<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';

	let success: boolean;

	$: if (success) {
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
	use:enhance={() => {
		return ({ result }) => {
			if (result.type === 'success') {
				success = true;
			}
		};
	}}
>
	Please subscribe with your email
	<input name="email" placeholder="your@email" />
	<button>Subscribe</button>
</form>
{#if success}
	<p in:fade={{ duration: 150 }} out:fade={{ duration: 350 }}>Saved</p>
{/if}
