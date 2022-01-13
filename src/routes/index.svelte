<script lang="ts">
	import { collection, doc, getDoc } from 'firebase/firestore'
	import { getFunctions, httpsCallable } from 'firebase/functions'
	import { db } from '$lib/firebase/client'
	import { userStore } from '$lib/store/user'

	import {
		getAuth,
		signInWithPopup,
		GoogleAuthProvider,
		signOut,
		onAuthStateChanged
	} from 'firebase/auth'
	import {} from 'firebase/auth'

	async function logout() {
		const auth = getAuth()
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			})
	}

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
<button on:click={logout}>ログアウト</button>
{#if $userStore}
	<p>{$userStore?.name}</p>
{/if}
