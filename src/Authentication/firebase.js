import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = initializeApp({
    apiKey: 'AIzaSyAcDuCEpVh1sBtooDpXKuC2SSVZmcyGhG0',
    authDomain: 'cryptoverse-bfc1d.firebaseapp.com',
    projectId: 'cryptoverse-bfc1d',
    storageBucket: 'cryptoverse-bfc1d.appspot.com',
    messagingSenderId: '887109983063',
    appId: '1:887109983063:web:e0e904608aaacd3fdffc12',
});

const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
