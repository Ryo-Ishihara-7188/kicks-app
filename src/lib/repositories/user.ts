import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '$lib/firebase/client'
import type { User } from '$lib/entities/User'

/**
 * Firestoreにユーザー情報を追加する
 */
export const createUser = async (uid: string, userDoc: User) => {
	try {
		const ref = doc(db, 'users', uid)
		const res = await setDoc(ref, userDoc)
		console.log(res)

		return uid
	} catch (error) {
		// TODO:
		// エラー通知を飛ばす処理

		return null
	}
}

/**
 * FirestoreからUidでユーザー情報を一件取得する
 */
export const getUser = async (uid: string): Promise<User | null> => {
	try {
		const ref = doc(db, 'users', uid)
		const userDoc = await getDoc(ref)
		return Object.assign({ uid: userDoc.id }, userDoc.data()) as User
	} catch (error) {
		// TODO:
		// エラー通知を飛ばす処理

		return null
	}
}
