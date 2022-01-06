<script lang="ts">
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-1 overflow-x-hidden container mx-auto">
		<slot />
	</main>
	<footer>kicks app</footer>
</div>
