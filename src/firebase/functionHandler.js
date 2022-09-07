import db from './config';
import { collection, where, query, addDoc, getDocs } from '@firebase/firestore';
export const getUser = (uid = '') => {
    const q = query(collection(db, 'users'), where('uid', '==', uid));
    return getDocs(q);
};
export const addNewUser = (userInfo) => {
    const { displayName, email, phoneNumber, photoURL, uid } = userInfo;
    return addDoc(collection(db, 'users'), {
        displayName,
        email,
        phoneNumber,
        photoURL,
        uid,
        rooms: [],
    });
};
