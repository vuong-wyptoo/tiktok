import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from '@firebase/auth';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCczLx07ew3Yb2httqUB1g5peLAOwzBka8',
    authDomain: 'tiktok-sign-in.firebaseapp.com',
    projectId: 'tiktok-sign-in',
    storageBucket: 'tiktok-sign-in.appspot.com',
    messagingSenderId: '512616823946',
    appId: '1:512616823946:web:436f08f28cf3cdb2410173',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider(app);
const facebookProvider = new FacebookAuthProvider(app);

export { auth, googleProvider, facebookProvider, storage };
export default db;
