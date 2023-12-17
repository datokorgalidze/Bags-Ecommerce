import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Config = {
  apiKey: "AIzaSyAudRsgCrNp_Q_hCXB4Htgb3rmFHWr26Pc",
  authDomain: "nomad-bags-store-c145a.firebaseapp.com",
  projectId: "nomad-bags-store-c145a",
  storageBucket: "nomad-bags-store-c145a.appspot.com",
  messagingSenderId: "144200241890",
  appId: "1:144200241890:web:4c1e82dd4aa4602249c4bb"
};

const app = initializeApp(Config);
const firestore = getFirestore(app);
const auth = getAuth(app);

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error', error.message);
    }
  }
  return userRef;
};

export {
  firestore,
  createUserProfileDocument,
  auth
};
