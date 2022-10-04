<script lang="ts">
	import type { PageData } from './$types';

	// references data from page.ts load()
	export let data: PageData;

	// console.log(page.data);
	console.log('page', data);
</script>

<h1>Loaddata Example</h1>
<p>This example demonstrates how load functions can be evaluated client & server sides</p>
{JSON.stringify(data, null, 2)}
