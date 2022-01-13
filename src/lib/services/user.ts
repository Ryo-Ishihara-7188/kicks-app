import type { User } from '$lib/entities/User'
import { authentication } from '$lib/repositories/auth'
import { createUser, getUser } from '$lib/repositories/user'
import { Timestamp } from 'firebase/firestore'

/**
 * Uidでユーザーデータを一件取得する
 */
export const getUserDataByUid = async (uid: string) => {
	return await getUser(uid)
}
