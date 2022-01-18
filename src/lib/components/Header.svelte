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
					Log in
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
			<div class="p-4" role="none">
				<a href="/" class="-m-3 p-3 mb-2 flex items-center rounded-md hover:bg-gray-50">
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
							d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
						/>
					</svg>
					<span class="ml-3 text-base font-medium text-gray-900"> Log out </span>
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
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x -->
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
						<nav class="grid gap-y-8">
							<a href="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<!-- Heroicon name: outline/chart-bar -->
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
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> Analytics </span>
							</a>

							<a href="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<!-- Heroicon name: outline/cursor-click -->
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
										d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> Engagement </span>
							</a>

							<a href="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<!-- Heroicon name: outline/shield-check -->
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

							<a href="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<!-- Heroicon name: outline/view-grid -->
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
										d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> Integrations </span>
							</a>

							<a href="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 border-b">
								<!-- Heroicon name: outline/refresh -->
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
								<!-- Heroicon name: outline/view-grid -->
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
										d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> Log out </span>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
