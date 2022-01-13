<script lang="ts">
	import { onMount } from 'svelte'
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import { userStore } from '$lib/store/user'
	import {
		getAuth,
		signInWithPopup,
		GoogleAuthProvider,
		signOut,
		onAuthStateChanged
	} from 'firebase/auth'
	import { getUserDataByUid } from '$lib/services/user'

	onMount(() => {
		getCurrentUser()
	})

	// ログインユーザー情報を取得する
	function getCurrentUser() {
		const auth = getAuth()
		const user = auth.currentUser

		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const uid = user.uid
				const userDoc = await getUserDataByUid(uid)
				$userStore = userDoc

				return uid
			}
			return null
		})
	}
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-1 overflow-x-hidden container mx-auto">
		<slot />
	</main>
	<footer>kicks app</footer>
</div>
