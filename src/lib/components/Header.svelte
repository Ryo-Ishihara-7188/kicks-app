<script lang="ts">
	import { fly } from 'svelte/transition'
	import { userStore } from '$lib/store/user'
	import LoginModal from './LoginModal.svelte'
	import { logout } from '$lib/repositories/auth'

	let drowerMenu = false
	let loginModal = false
	let userMenu = false

	function handleMenu() {
		drowerMenu = !drowerMenu
	}

	function handleLoginModal() {
		loginModal = !loginModal
	}

	function handleUserMenu() {
		userMenu = !userMenu
	}

	async function handleLogout() {
		const isLogedOut = await logout()
		if (isLogedOut) {
			$userStore = null
			drowerMenu = false
			userMenu = false
		}
	}
</script>

<header class="relative bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div class="flex justify-between items-center border-b-2 border-gray-100 py-2 md:space-x-10">
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<!-- <span class="sr-only">Kisks app</span>
					<img
						class="h-8 w-auto sm:h-10"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
						alt=""
					/> -->
					Kisks app
				</a>
			</div>

			{#if !$userStore}
				<button
					on:click={handleLoginModal}
					type="button"
					class="whitespace-nowrap inline-flex items-center justify-center px-4 py-1.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 ease-in-out"
					aria-expanded="false"
				>
					ログイン
				</button>
			{:else}
				<!-- mobile -->
				<div class="-mr-2 -my-2 md:hidden">
					<button
						on:click={handleMenu}
						type="button"
						class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
						aria-expanded="false"
					>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				<!-- pc -->
				<div class="hidden relative md:flex items-center justify-end md:flex-1 lg:w-0">
					<img
						on:click={handleUserMenu}
						class="cursor-pointer rounded-full border-2 p-0.5 w-12 hover:opacity-90"
						src={$userStore.imageUrl}
						alt=""
					/>
				</div>
			{/if}
		</div>
	</div>
	{#if loginModal}
		<LoginModal on:closeEvent={handleLoginModal} />
	{/if}

	{#if userMenu}
		<div
			class="origin-top-right absolute top-14 right-2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
			in:fly={{ y: -20, duration: 500 }}
			out:fly={{ y: -20, duration: 500 }}
		>
			<div on:click={handleUserMenu} class="p-4" role="none">
				<a href="/review/add" class="-m-3 p-3 mb-2 flex items-center rounded-md hover:bg-gray-50">
					<svg
						class="flex-shrink-0 h-6 w-6 text-indigo-600"
						viewBox="0 0 27 27"
						width="19"
						height="19"
					>
						<path
							fill="currentColor"
							d="M4.2 3.2v20.4c0 .5.4.8.8.8h16.6c.3 0 .6-.3.6-.6V8.1l-.2-.3-4.5-5c-.2-.2-.4-.3-.6-.3h-12c-.4 0-.7.3-.7.7zm2 1.3h9V9c0 .3.2.5.5.5h4.5v13h-14v-18zm11.2.9l2.1 2.2h-2.1V5.4zm-9.2 7.1v2h10v-2h-10zm0 4v2h10v-2h-10z"
						/>
					</svg>
					<span class="ml-3 text-base font-medium text-gray-900"> レビューを書く </span>
				</a>
				<a href="/" class="-m-3 p-3 mb-2 flex items-center rounded-md hover:bg-gray-50 border-b">
					<svg
						class="flex-shrink-0 h-6 w-6 text-indigo-600"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
						/>
					</svg>
					<span class="ml-3 text-base font-medium text-gray-900"> Security </span>
				</a>
				<div
					on:click={handleLogout}
					class="-m-3 p-3 mt-1 flex items-center rounded-md hover:bg-gray-50 cursor-pointer"
				>
					<svg
						class="flex-shrink-0 h-6 w-6 text-indigo-600"
						viewBox="0 0 27 27"
						width="19"
						height="19"
					>
						<path
							fill="currentColor"
							class="logout_svg__st0"
							d="M13.3 23.6l-7.8-.1c-1.1 0-1.9-.9-1.9-2.1l.1-15.5c0-1.1.9-2 2-2l7.8.1c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1l-7.6-.1-.2 15.2 7.6.1c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
						/>
						<path
							fill="currentColor"
							class="logout_svg__st1"
							d="M17.3 19.7c-.3 0-.6-.1-.8-.4-.3-.4-.3-1.1.2-1.4l3.4-2.6-9.2-.1c-.6 0-1-.5-1-1s.5-1 1-1l9.2.1-3.3-2.7c-.4-.4-.5-1-.2-1.4.4-.4 1-.5 1.4-.2l5.6 4.5.1.1.1.1c.2.2.3.4.2.7 0 .3-.1.5-.3.7l-.1.1-.1.1-5.7 4.4c-.1-.1-.3 0-.5 0z"
						/>
					</svg>
					<span class="ml-3 text-base font-medium text-gray-900"> ログアウト </span>
				</div>
			</div>
		</div>
	{/if}

	{#if drowerMenu}
		<div
			class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
			in:fly={{ x: 100, duration: 500 }}
			out:fly={{ x: 100, duration: 500 }}
		>
			<div
				class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
			>
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between">
						<div>
							<img
								class="h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
								alt="Workflow"
							/>
						</div>
						<div class="-mr-2">
							<button
								on:click={handleMenu}
								type="button"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav on:click={handleUserMenu} class="grid gap-y-8">
							<a href="/review/add" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<svg
									class="flex-shrink-0 h-6 w-6 text-indigo-600"
									viewBox="0 0 27 27"
									width="19"
									height="19"
								>
									<path
										fill="currentColor"
										d="M4.2 3.2v20.4c0 .5.4.8.8.8h16.6c.3 0 .6-.3.6-.6V8.1l-.2-.3-4.5-5c-.2-.2-.4-.3-.6-.3h-12c-.4 0-.7.3-.7.7zm2 1.3h9V9c0 .3.2.5.5.5h4.5v13h-14v-18zm11.2.9l2.1 2.2h-2.1V5.4zm-9.2 7.1v2h10v-2h-10zm0 4v2h10v-2h-10z"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> レビューを書く </span>
							</a>

							<a href="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 border-b">
								<svg
									class="flex-shrink-0 h-6 w-6 text-indigo-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> Automations </span>
							</a>

							<div
								on:click={handleLogout}
								class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer"
							>
								<svg
									class="flex-shrink-0 h-6 w-6 text-indigo-600"
									viewBox="0 0 27 27"
									width="19"
									height="19"
								>
									<path
										fill="currentColor"
										class="logout_svg__st0"
										d="M13.3 23.6l-7.8-.1c-1.1 0-1.9-.9-1.9-2.1l.1-15.5c0-1.1.9-2 2-2l7.8.1c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1l-7.6-.1-.2 15.2 7.6.1c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
									/>
									<path
										fill="currentColor"
										class="logout_svg__st1"
										d="M17.3 19.7c-.3 0-.6-.1-.8-.4-.3-.4-.3-1.1.2-1.4l3.4-2.6-9.2-.1c-.6 0-1-.5-1-1s.5-1 1-1l9.2.1-3.3-2.7c-.4-.4-.5-1-.2-1.4.4-.4 1-.5 1.4-.2l5.6 4.5.1.1.1.1c.2.2.3.4.2.7 0 .3-.1.5-.3.7l-.1.1-.1.1-5.7 4.4c-.1-.1-.3 0-.5 0z"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> ログアウト </span>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
