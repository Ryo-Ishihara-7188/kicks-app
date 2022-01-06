import functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

// ting Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.test = functions.region('asia-northeast1').https.onCall(async (data, context) => {
	const res = admin.firestore().collection('test').doc('1').get()
	console.log(res)
})
