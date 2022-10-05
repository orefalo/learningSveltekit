<script lang="ts">
	import type { LayoutData } from './$types';

	// references data from layout.ts load()
	export let data: LayoutData;
	console.log('layout', data);
</script>

This is the Layout
<slot />
