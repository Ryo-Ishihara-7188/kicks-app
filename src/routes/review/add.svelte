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

<h1 class="">New Review</h1>
<img
	src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MiAyNCIgd2lkdGg9IjcyIiBoZWlnaHQ9IjI0IiBkYXRhLXU9Imh0dHBzJTNBJTJGJTJGYW5hdGFub2VuZ2luZWVyLmpwJTJGd3AtY29udGVudCUyRnBsdWdpbnMlMkZzaXRlZ3VhcmQlMkZyZWFsbHktc2ltcGxlLWNhcHRjaGElMkZ0bXAlMkYxOTc2MjE1MzUwLnBuZyIgZGF0YS13PSI3MiIgZGF0YS1oPSIyNCIgZGF0YS1iaXA9IiI+PC9zdmc+"
	data-spai="1"
	alt="CAPTCHA"
/>
