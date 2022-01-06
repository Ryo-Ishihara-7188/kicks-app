<script lang="ts">
	import { onMount } from 'svelte'
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

	function currentUser() {
		const auth = getAuth()
		const user = auth.currentUser
		console.log(user)

		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid
				console.log(uid)
				$userStore = uid
			}
		})
	}

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

	onMount(() => {
		test()
		currentUser()
	})

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
<button on:click={currentUser}>ユーザー</button>
<p>{$userStore}</p>
