<script lang="ts">
	import { onMount } from 'svelte';
	import { collection, doc, getDoc } from 'firebase/firestore';
	import { getFunctions, httpsCallable } from 'firebase/functions';
	import { db } from '$lib/firebase/client.ts';
	// import firebase from 'firebase/app';
	// import 'firebase/db';

	onMount(() => {
		test();
		// testfunc();
	});

	async function test() {
		// const db = getFirestore(app);
		const ref = doc(db, 'test', '1');
		const res = await getDoc(ref);
		console.log(res.data());
	}

	async function testfunc() {
		const functions = getFunctions();
		const addMessage = httpsCallable(functions, 'test');
		await addMessage();
	}
</script>

<h1 class="">Stage</h1>
