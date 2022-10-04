<script lang="ts">
	import type { PageData } from './$types';

	// references data from page.ts load()
	export let data: PageData;

	// console.log(page.data);
	console.log('page', data);
</script>

<h1>Fetch Example</h1>
<p>In this example, the data below comes from a server api and is retrieved via a fetch() call</p>
{JSON.stringify(data, null, 2)}
