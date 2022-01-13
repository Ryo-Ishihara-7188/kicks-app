import { writable } from 'svelte/store'
import type { User } from '$lib/entities/User'

export const userStore = writable<User>(null)
