<script lang="ts">
	import { onMount } from 'svelte';
	import { collection, doc, getDoc } from 'firebase/firestore';
	import { getFunctions, httpsCallable } from 'firebase/functions';
	import { db } from '$lib/firebase/client';

	import {
		getAuth,
		signInWithPopup,
		GoogleAuthProvider,
		signOut,
		onAuthStateChanged
	} from 'firebase/auth';
	import {} from 'firebase/auth';

	function currentUser() {
		const auth = getAuth();
		const user = auth.currentUser;
		console.log(user);

		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				console.log(uid);
			}
		});
	}

	async function logout() {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	}

	async function login() {
		const auth = getAuth();
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(auth, provider);
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;

			// The signed-in user info.
			const user = result.user;
			console.log(token);
			console.log(user);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
		}
	}

	onMount(() => {
		test();
		// testfunc();
	});

	async function test() {
		const ref = doc(db, 'test', '1');
		const res = await getDoc(ref);
		console.log(res.data());
	}

	// demo functions
	// async function testfunc() {
	// 	const functions = getFunctions();
	// 	const addMessage = httpsCallable(functions, 'test');
	// 	await addMessage();
	// }
</script>

<h1 class="">Stage</h1>
<button on:click={login}>ログイン</button>
<button on:click={logout}>ログアウト</button>
<button on:click={currentUser}>ユーザー</button>
