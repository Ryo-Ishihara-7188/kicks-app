import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'

/**
 * Google loginを実施
 * @returns
 */
export const authentication = async () => {
	const auth = getAuth()
	const provider = new GoogleAuthProvider()
	try {
		const result = await signInWithPopup(auth, provider)
		// const credential = GoogleAuthProvider.credentialFromResult(result)
		// const token = credential.accessToken

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
