import type { FirebaseOptions } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';
import {
	API_KEY,
	AUTH_DOMAIN,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SEND_ID,
	APP_ID
} from './_config';

// Dev環境の場合は_configから読み込んだ.envファイルの変数を使う
let config = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SEND_ID,
	appId: APP_ID
};

// Prod環境の場合はサーバーに設定したENVを使う
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
	config = {
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		projectId: process.env.PROJECT_ID,
		storageBucket: process.env.STORAGE_BUCKET,
		messagingSenderId: process.env.MESSAGING_SEND_ID,
		appId: process.env.APP_ID
	};
}

export const app = initializeApp(config as FirebaseOptions);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);
functions.region = 'asia-northeast1';

export { auth, db, storage, functions };
