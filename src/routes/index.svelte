<script lang="ts">
	import { doc, getDoc } from 'firebase/firestore'
	import { db } from '$lib/firebase/client'
	import { userStore } from '$lib/store/user'

	import {} from 'firebase/auth'

	async function test() {
		const ref = doc(db, 'test', '1')
		const res = await getDoc(ref)
		console.log(res.data())
	}

	// demo functions
	// async function testfunc() {
	// 	const functions = getFunctions();
	// 	const addMessage = httpsCallable(functions, 'test');
	// 	await addMessage();
	// }
</script>

<h1 class="">Stage</h1>
{#if $userStore}
	<p>{$userStore?.name}</p>
{/if}
