import type { Timestamp } from 'firebase/firestore'

export interface User {
	uid?: string
	name: string
	imageUrl: string
	postCount: number
	followCount: number
	flollowerCount: number
	createdAt?: Timestamp
	updatedAt?: Timestamp
}
