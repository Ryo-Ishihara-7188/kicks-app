<script>
	import { createEventDispatcher } from 'svelte'
	import { fly } from 'svelte/transition'
	import { userStore } from '$lib/store/user'
	import { authAndCreateUser } from '$lib/services/auth'

	const dispatch = createEventDispatcher()

	function close() {
		dispatch('closeEvent')
	}

	async function handleLogin() {
		const user = await authAndCreateUser()
		if (user === null) {
			// ログイン失敗
			return
		}
		// ここでStoreに格納
		$userStore = user
		close()
	}
</script>

<div
	class="fixed z-10 inset-0 overflow-y-auto"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div
		class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
	>
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

		<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
			>&#8203;</span
		>
		<div
			class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-96"
			in:fly={{ y: 150, duration: 300 }}
			out:fly={{ y: 100, duration: 300 }}
		>
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="flex justify-end">
					<button
						on:click={close}
						type="button"
						class="ml-auto bg-white text-base font-medium text-gray-700 focus:outline-none"
					>
						<svg viewBox="0 0 27 27" width="15" height="15"
							><path
								fill="currentColor"
								class="close_svg__st0"
								d="M16.3 13.5l9.1-9.1c.3-.3.3-.9 0-1.2l-1.6-1.6c-.3-.3-.9-.3-1.2 0l-9.1 9.1-9.1-9.1c-.4-.4-.9-.4-1.2 0L1.6 3.2c-.4.3-.4.8 0 1.2l9.1 9.1-9.1 9.1c-.3.3-.3.9 0 1.2l1.6 1.6c.3.3.9.3 1.2 0l9.1-9.1 9.1 9.1c.3.3.9.3 1.2 0l1.6-1.6c.3-.3.3-.9 0-1.2l-9.1-9.1z"
							/></svg
						>
					</button>
				</div>
				<div class="my-3 sm:text-left">
					<h3 class="text-center text-lg leading-6 font-medium text-gray-900" id="modal-title">
						Kicks app
					</h3>
					<div class="mt-2">
						<p class="text-sm text-gray-500 leading-5">
							Kicks appは誰でも自由にシューズレビューを投稿できるプラットフォームです。
							<a href="/" class="text-blue-400 hover:text-blue-500">Kicks appってどんなアプリ？</a>
						</p>
					</div>
				</div>
				<div class="px-4 py-3 sm:px-6 mb-4 flex justify-center">
					<button
						on:click={handleLogin}
						type="button"
						class="flex justify-center items-center w-full rounded-md shadow-sm px-5 py-3 bg-gray-800 text-base font-medium text-white hover:opacity-95 focus:outline-none sm:w-auto sm:text-sm"
					>
						<svg class="mr-2" viewBox="0 0 533.5 544.3" width="18" height="18">
							<path
								d="M533.5 278.4a320.07 320.07 0 00-4.7-55.3H272.1v104.8h147a126 126 0 01-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
								fill="#4285f4"
							/>
							<path
								d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1a272.19 272.19 0 00243.2 149.9z"
								fill="#34a853"
							/>
							<path
								d="M119.3 324.3a163 163 0 010-104.2V150H28.9a272.38 272.38 0 000 244.4z"
								fill="#fbbc04"
							/>
							<path
								d="M272.1 107.7a147.89 147.89 0 01104.4 40.8l77.7-77.7A261.56 261.56 0 00272.1 0 272.1 272.1 0 0028.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
								fill="#ea4335"
							/>
						</svg>

						<span> Login with Google </span>
					</button>
				</div>
				<p class="text-xs text-gray-500 leading-5">
					<a href="/" class="border-b border-gray-300 hover:text-blue-500 hover:border-b-0"
						>利用規約</a
					>、
					<a href="/" class="border-b border-gray-300 hover:text-blue-500 hover:border-b-0"
						>プライバシーポリシー</a
					>
					に同意したうえでログインしてください。
				</p>
			</div>
		</div>
	</div>
</div>
