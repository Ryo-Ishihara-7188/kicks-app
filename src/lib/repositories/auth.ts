import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged
} from 'firebase/auth'

/**
 * Google loginを実施
 * @returns
 */
export const authentication = async () => {
	const auth = getAuth()
	const provider = new GoogleAuthProvider()
	try {
		const result = await signInWithPopup(auth, provider)
		const credential = GoogleAuthProvider.credentialFromResult(result)
		const token = credential.accessToken

		console.log(result)
		console.log(token)
		return result.user
	} catch (error) {
		console.error(error)
		return null
	}
}

/**
 * Logoutを実施
 * @returns
 */
export const logout = async () => {
	try {
		const auth = getAuth()
		await signOut(auth)
		return true
	} catch (error) {
		return false
	}
}

/**
 * ログインユーザー情報を取得する
 */
export const getCurrentUser = () => {
	const auth = getAuth()
	const user = auth.currentUser

	onAuthStateChanged(auth, (user) => {
		if (user) {
			return user
			// const uid = user.uid
			// console.log(uid)
			// $userStore = uid
		}
		return null
	})
}
