import type { User } from '$lib/entities/User'
import { authentication } from '$lib/repositories/auth'
import { createUser, getUser } from '$lib/repositories/user'
import { Timestamp } from 'firebase/firestore'
import { getUserDataByUid } from './user'

/**
 * Google loginを実施
 * @returns
 */
export const authAndCreateUser = async () => {
	const user = await authentication()
	if (!user) {
		// ログイン失敗
		return null
	}

	const uid = user.uid
	const userDoc = await getUser(uid)

	// 既にFirestoreに登録済みなら処理を終了
	if (userDoc) {
		return userDoc
	}
	console.log('登録に進む')

	const createUserDoc: User = {
		name: user.displayName,
		imageUrl: user.photoURL,
		postCount: 0,
		followCount: 0,
		flollowerCount: 0,
		createdAt: Timestamp.fromDate(new Date()),
		updatedAt: Timestamp.fromDate(new Date())
	}

	// Firestoreにユーザーデータを追加する
	const res = await createUser(uid, createUserDoc)
	if (!res) {
		// TODO
		// 追加失敗のため、Authからも削除する
		return null
	}

	return createUserDoc
}
